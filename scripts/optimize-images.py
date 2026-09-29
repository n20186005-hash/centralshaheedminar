"""Compress the monument photographs for the web and build the OG cover.

Usage:
    python scripts/optimize-images.py

- public/gallery/*.jpg  → resized to a maximum width of 1600 px, quality 80
- public/images/og-cover.jpg → 1200x630 centre crop used for og:image / twitter:image
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
GALLERY = ROOT / "public" / "gallery"
OUTPUT = ROOT / "public" / "images"
MAX_WIDTH = 1600
QUALITY = 80


def compress(src: Path) -> None:
    with Image.open(src) as img:
        img = img.convert("RGB")
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            img = img.resize((MAX_WIDTH, round(img.height * ratio)), Image.LANCZOS)
        before = src.stat().st_size
        img.save(src, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        after = src.stat().st_size
        print(f"{src.name}: {before / 1e6:.2f} MB → {after / 1e6:.2f} MB")


def build_og_cover() -> None:
    hero = GALLERY / "central-shaheed-minar-hero.jpg"
    OUTPUT.mkdir(parents=True, exist_ok=True)
    target = OUTPUT / "og-cover.jpg"
    with Image.open(hero) as img:
        img = img.convert("RGB")
        wanted = 1200 / 630
        if img.width / img.height > wanted:
            new_width = round(img.height * wanted)
            left = (img.width - new_width) // 2
            img = img.crop((left, 0, left + new_width, img.height))
        else:
            new_height = round(img.width / wanted)
            top = round((img.height - new_height) * 0.35)
            img = img.crop((0, top, img.width, top + new_height))
        img = img.resize((1200, 630), Image.LANCZOS)
        img.save(target, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"og-cover.jpg: {target.stat().st_size / 1e3:.0f} KB")


if __name__ == "__main__":
    for path in sorted(GALLERY.glob("*.jpg")):
        compress(path)
    build_og_cover()
