# QA Status

## 已完成的源码级检查

- package.json 直接依赖均为精确版本，无 `latest`、`*`、`^`、`~`。
- `packageManager` 与 `engines.pnpm` 固定为 pnpm 12.3.4。
- `.node-version` 与 `engines.node` 固定为 Node.js 24.20.0。
- 单包项目没有 `pnpm-workspace.yaml`。
- 域名只在 `astro.config.mjs` 的 `siteUrl` 一处配置；当前为空。
- site 为空时 sitemap 集成不启用，canonical / og:url 不输出占位 URL。
- 源码扫描未发现被禁止的占位域名/浏览器扩展协议。
- Google Maps iframe 已改为孟加拉语 / Bangladesh 地区参数。
- GA4 仅在用户同意分析 Cookie 后加载。
- Logo / favicon 使用同一白柱 + 红日符号体系，含 SVG、16×16、32×32、180×180。

## 当前环境阻断，未能完成的强制验收

本执行容器没有可用的外部 DNS / npm registry 访问，且容器内 Node 为 22.16.0，而项目按要求固定 Node 24.20.0。

尝试获取项目指定的 pnpm 12.3.4 时，Corepack 失败于：

```text
getaddrinfo EAI_AGAIN registry.npmjs.org
```

因此当前环境无法：

1. 生成真实、完整、与依赖树同步的 `pnpm-lock.yaml`；
2. 执行 `CI=1 corepack pnpm install --frozen-lockfile`；
3. 执行 `pnpm check` 与 `pnpm build`；
4. 对 `dist/` 执行最终 grep / sitemap 产物检查；
5. 将 Wikimedia Commons 的真实 JPG 二进制下载到 `public/media/`。

为避免伪造验收结果，本包没有放入手写或不完整的 lockfile，也没有声称这些命令已经通过。
