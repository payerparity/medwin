import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://acepain.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
