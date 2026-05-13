import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Cloudflare adapter is only loaded during `astro build` (production).
// Skipped in dev to avoid Workers runtime conflicts with the local server.
const adapter = process.env.NODE_ENV === 'production'
  ? (await import('@astrojs/cloudflare')).default()
  : undefined;

export default defineConfig({
  site: 'https://intelliversepress.com',
  adapter,
  vite: {
    plugins: [tailwindcss()],
  },
});
