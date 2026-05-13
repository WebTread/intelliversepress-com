import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// NOTE: Cloudflare adapter is commented out for local development.
// Uncomment before running `astro build` for deployment.
// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});
