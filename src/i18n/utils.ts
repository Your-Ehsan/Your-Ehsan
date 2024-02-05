import { ui, defaultLang } from './ui'

type useTranslationsType = { url: URL }

/**
 * Extracts language from the provided URL and returns the language if found,
 * otherwise, returns the default language.
 * @param url - The URL object to extract language from.
 * @returns The extracted language or the default language.
 */
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/')
  return lang in ui ? (lang as keyof typeof ui) : defaultLang
}

/**
 * Returns a translation function based on the language extracted from the provided URL.
 * @param url - The URL object to extract language from.
 * @returns The translation function.
 */
export function useTranslations({ url }: useTranslationsType) {
  /**
   * Translates the given key based on the extracted language.
   * If the translation is not found for the specified language,
   * falls back to the default language.
   * @param key - The key to translate.
   * @returns The translated value.
   */
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[getLangFromUrl(url)][key] || ui[defaultLang][key]
  }
}
