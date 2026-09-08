# Central Shaheed Minar — Astro / Cloudflare Workers

孟加拉语单页景点站，围绕中央烈士纪念碑（কেন্দ্রীয় শহীদ মিনার）的纪念性气质设计。

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

只修改 `astro.config.mjs` 中的：

```js
const siteUrl = '';
```

为空时不输出 canonical / `og:url`，且不启用 sitemap；填写真实域名后 canonical、Open Graph、JSON-LD 与 sitemap 会从 `Astro.site` 派生。

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

GA4 ID 为 `G-HXM22WWPKP`。页面默认不会加载 Google Analytics；用户同意分析 Cookie 后才动态加载 gtag。

## 图片

页面使用 Wikimedia Commons 上 Central Shaheed Minar 的真实照片，并在页面与 `public/media/PHOTO-SOURCES.md` 中标明作者和 CC BY-SA 3.0 授权来源。

当前执行环境无法解析外部域名，因此无法把这些 JPG 二进制文件下载进 ZIP；源码中保留了可直接显示的 Wikimedia 原图 URL。详见 `QA-STATUS.md`。

## 资料来源

- Bangladesh Tourism Board / Beautiful Bangladesh
- Banglapedia
- UNESCO — International Mother Language Day
- 用户提供的 Google Maps 地点资料、评分与 iframe
