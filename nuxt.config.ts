export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/i18n'],
    i18n: {
        locales: [
            {code: 'en', iso: 'en-US', file: 'translations/en.js', dir: 'ltr'},
            // {code: 'ar', iso: 'ar-SA', file: 'translations/ar.js', dir: 'rtl'},
            {code: 'ms', iso: 'ms-MY', file: 'translations/ms.js', dir: 'ltr'}
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        strategy: 'prefix_except_default'
    },
    colorMode: {
        preference: 'light',
    }
});
