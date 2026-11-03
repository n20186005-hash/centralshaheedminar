# QA Status

## 已完成的源码级检查

- package.json 直接依赖均为精确版本，无 `latest`、`*`、`^`、`~`。
- `packageManager` 与 `engines.pnpm` 固定为 pnpm 12.3.4。
- `.node-version` 与 `engines.node` 固定为 Node.js 24.20.0。
- `pnpm-workspace.yaml` 仅用于 `allowBuilds`（esbuild / workerd 构建脚本开关），不是多包工作区。
- 域名只在 `astro.config.mjs` 的 `siteUrl` 一处配置；当前为 `https://centralshaheedminar.com`，sitemap 集成随之启用。
- canonical / hreflang / og:url 均从 `src/i18n.ts` 的 `SITE` 与 `localizedPath()` 推导，无占位域名。
- Google Maps iframe 已使用孟加拉语 / Bangladesh 地区参数。
- GA4 仅在用户同意分析 Cookie 后加载。
- Logo / favicon 使用同一白柱 + 红日符号体系，含 SVG、16×16、32×32、180×180。

## 环境与构建验证（2026-11-03 已解除阻断）

先前的“环境阻断”前提已不成立。本次在便携 Node 24.20.0（`H:\tools\node-v24.20.0-win-x64`，位于仓库之外）下完成：

1. `pnpm install`（pnpm 12.3.4），依赖树完整，四大依赖版本与 package.json 一致。
2. `pnpm check` → `astro check`，32 个文件 **0 errors / 0 warnings / 0 hints**。
3. `pnpm build` → **91 个页面**构建成功，`sitemap-index.xml` 与 `sitemap-0.xml` 生成。

## 本次新增内容

- 报告 41 个候选页已全部落地（每条均含 bn / en 双语、facts、sections、faq、sources 与 2–4 条上下文内链），双语共 82 个页面：
  - `history/` 11、`visit/` 9、`guides/` 6、`nearby/` 7、`itineraries/` 3、`food/` 3、`planning/` 1、`stay/` 1。
- 路由：`src/pages/[section]/[slug].astro`（bn 根路径）与 `src/pages/en/[section]/[slug].astro`（en 镜像）。
- 渲染组件：`src/components/TopicContent.astro`（面包屑、事实栏、正文、FAQ、相关内链、权威来源、核实日期）。
- 集群内链闭环：三个总览页（`history`、`visit`、`nearby`）通过 `GuideContent.astro` 列出其下属专题页（history 11、visit+guides 15、nearby+itineraries+food+planning+stay 15），bn / en 双语一致。
- 数据修正：Google Maps 评分计数由 20,937 更新为 **20,952**，核实日期更新为 **2026-11-03**（`src/data/site.ts` 及页脚 / 首页 / 指南页文案同步）。
- 多语言纯净度已校验：构建产物中 en 页正文无孟加拉文字符（181 处孟加拉字符均为语言切换等公共模板），bn 页正文无英文正文段；`history/`、`visit/`、`guides/`、`nearby/`、`food/`、`practical/` 内容文件已扫描，无其他文字系统混入。

## 仍需外部确认的事项

- 引用来源均为可访问的权威链接（Banglapedia、UNESCO、Bangladesh National Museum、University of Dhaka、DMTCL、Dhaka Medical College、Bangladesh Tourism Board、Creative Commons），但第三方站点内容可能变动。
- 专题页不写具体票价、步行分钟数、距离、商家名或无障碍设施细节；`2 月 21 日入口`、`无障碍`、`餐饮`、`休息设施`、`住宿` 五类页面只写长期有效的判断原则与核实方法，具体数值与店名需现场或官方渠道核实后再补。
