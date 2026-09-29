# Central Shaheed Minar — Astro / Cloudflare Workers

孟加拉语 + 英语双语景点站，围绕中央烈士纪念碑（কেন্দ্রীয় শহীদ মিনার / Central Shaheed Minar）的纪念性气质设计。

- 孟加拉语：`/` `/history/` `/visit/` `/nearby/`
- 英语：`/en/` `/en/history/` `/en/visit/` `/en/nearby/`
- 每个页面都输出 `canonical` + `hreflang`（bn-BD / en / x-default），英语版用于承接国际查询。

## 技术栈

- Astro 7.3.1
- Tailwind CSS 4.3.3 + @tailwindcss/vite 4.3.3
- TypeScript 6.0.3
- @astrojs/check 0.9.10
- @astrojs/sitemap 3.7.4
- Wrangler 4.129.0
- Node.js 24.20.0
- pnpm 12.3.4

所有直接依赖均为精确版本，不使用浮动范围。单包项目未创建 `pnpm-workspace.yaml`。

## 域名唯一配置点

域名在两处保持一致：

- `astro.config.mjs` 的 `siteUrl`（决定 canonical / `og:url` / sitemap 是否产出）
- `src/i18n.ts` 的 `SITE`（决定 hreflang 绝对地址与 JSON-LD 的 `@id`）

## 内容组织

- `src/data/site.ts` — 纪念碑的唯一事实源：名称、地址、坐标、Plus Code、地图链接、评分（4.6 / 20,897）、照片路径、GA4 ID，以及 SEO 站点名（`SITE_NAME`，格式：景点 + 城市 + 旅游指南）与 `withSiteName()`。
- `src/i18n.ts` — 语言列表、`localizedPath()`、`hreflangAlternates()` 与界面文案字典（导航、页脚、Cookie 提示等）。
- `src/content/home.ts` — 首页全部文案（bn / en）。
- `src/content/guides.ts` — 三个专题页（history / visit / nearby）的文案（bn / en）。
- `src/lib/schema.ts` — JSON-LD 构造：WebSite、Organization、TouristAttraction + LandmarksOrHistoricalBuildings、FAQPage、BreadcrumbList。
- `src/layouts/BaseLayout.astro` — TDK、canonical、hreflang、Open Graph / Twitter Card、JSON-LD、页头语言切换与页脚。

新增语言时同步 `src/i18n.ts`、`src/content/*.ts` 两处即可，页面文件无需改动。

## 图片

`public/gallery` 存放纪念碑实拍图。`scripts/optimize-images.py` 会把它们压缩到最大宽度 1600 px，并由 hero 图生成 1200×630 的 `public/images/og-cover.jpg`：

```bash
python scripts/optimize-images.py
```

## Cloudflare Workers

项目采用 Astro 静态输出 + Cloudflare Workers Static Assets。`wrangler.jsonc` 的资源目录为 `./dist`。

常规流程：

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm wrangler deploy
```

## GA4 与 Cookie

GA4 ID 为 `G-HXM22WWPKP`（常量在 `src/data/site.ts`）。页面默认不会加载 Google Analytics；用户同意分析 Cookie 后才动态加载 gtag。

## 安全头

`public/_headers` 下发 HSTS、`X-Content-Type-Options`、`X-Frame-Options`、`Referrer-Policy`、`Permissions-Policy` 与 CSP（允许 Google Maps iframe 与 GA）。HTTP → HTTPS 的 301 由 Cloudflare 控制台的 Always Use HTTPS 完成。

## 资料来源

- Bangladesh Tourism Board / Beautiful Bangladesh
- Banglapedia
- UNESCO — International Mother Language Day
- 用户提供的 Google Maps 地点资料、评分与 iframe
