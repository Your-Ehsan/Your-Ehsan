import { defineConfig } from 'astro/config'
import { defaultLang, locales } from './src/i18n/ui'
// import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import sentry from '@sentry/astro'
import spotlightjs from '@spotlightjs/astro'

/**
 * for more info @see https://astro.build/config
 */

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  i18n: {
    defaultLocale: defaultLang,
    locales: locales, // ['en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // output: 'server', // TODO: learn about this completely, later 🔥
  integrations: [
    // mdx(),
    sitemap(),
    sentry(),
    spotlightjs(),
    tailwind({
      nesting: true,
    }),
  ],
})
