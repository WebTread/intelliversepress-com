import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // hybrid: pages are static by default; vault pages opt into SSR
  // with `export const prerender = false` when the email gate is wired up.
  output: 'hybrid',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});
