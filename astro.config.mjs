// import mdx from '@astrojs/mdx'
import sentry from '@sentry/astro'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import spotlightjs from '@spotlightjs/astro'

import {defineConfig} from 'astro/config'
import {defaultLang, locales} from './src/i18n/ui'

/**
 * for more info @see https://astro.build/config
 */

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  // i18n: {
  //   // defaultLocale: defaultLang,
  //   // locales: locales,
  //   // // ['en', 'fr'],
  //   // routing: {
  //   //   prefixDefaultLocale: true,
  //   // },
  // },
  // output: 'server', // TODO: learn about this completely, later 🔥
  integrations: [
    // mdx(),
    // sentry(),
    sitemap(),
    // spotlightjs(),
    tailwind({nesting: true}),
    // react({ experimentalReactChildren: true }),
  ],
})
