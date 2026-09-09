import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// সাইটের চূড়ান্ত ডোমেইন নির্ধারিত হলে শুধু এই এক জায়গাতেই লিখুন।
// ডোমেইন খালি থাকলেও প্রকল্পটি নির্মাণযোগ্য থাকবে।
const siteUrl = 'https://centralshaheedminar.com';

export default defineConfig({
  site: siteUrl || undefined,
  output: 'static',
  integrations: siteUrl ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
