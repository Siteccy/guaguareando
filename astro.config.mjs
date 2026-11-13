// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guaguareandoando.com',
  output: 'static',
  // /programas se sirve desde programas.html (Netlify lo resuelve sin redireccion)
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
  fonts: [
    {
      name: 'Fredoka',
      cssVariable: '--font-fredoka',
      provider: fontProviders.fontsource(),
      weights: ['600 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-rounded', 'system-ui', 'sans-serif'],
    },
    {
      name: 'Figtree',
      cssVariable: '--font-figtree',
      provider: fontProviders.fontsource(),
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
