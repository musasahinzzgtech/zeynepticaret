import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: true },
    }),
  ],
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },
});
