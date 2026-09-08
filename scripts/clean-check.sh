#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm build
if grep -RIniE 'example[.]com|localhost|chrome-extension://' dist; then
  echo 'Forbidden placeholder/protocol found in build output.' >&2
  exit 1
fi
if [[ -f dist/sitemap-index.xml || -f dist/sitemap-0.xml || -f dist/sitemap.xml ]]; then
  if grep -RIni '<lastmod>' dist/sitemap*.xml; then
    echo 'Unexpected lastmod found.' >&2
    exit 1
  fi
fi
