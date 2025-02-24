
// The Only Nuxt.js Tutorial on I18n You’ll Ever Need
// https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/
export default {
    locales: [
        { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
        { code: 'de', iso: 'de-DE', file: 'de.js', name: 'Deutsch' },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en',
      onlyOnRoot: true,
      useCookie: true,
      cookieKey: 'language'
    },
    langDir: 'lang',
    lazy: true,
    strategy: 'prefix',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true
}