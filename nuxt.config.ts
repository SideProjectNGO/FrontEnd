export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/i18n'],
    i18n: {
        locales: [
            {code: 'en', iso: 'en-US', file: 'translations/en.js', dir: 'ltr'},
            {code: 'ms', iso: 'ms-MY', file: 'translations/ms.js', dir: 'ltr'},
        ],
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        strategy: 'prefix_except_default',
    },
    app: {
        baseURL: process.env.NODE_ENV === 'development' ? '' : '/FrontEnd/',
    },
    nitro: {
        preset: 'github_pages'
    },
    runtimeConfig: {
        public: {
            isDev: process.env.NODE_ENV === 'development',
        },
    },
    colorMode: {
        preference: 'light',
    },
});
