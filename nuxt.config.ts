export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: "./src",
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/storybook",
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],
  imports: {
    dirs: ["schemas"],
  },
  i18n: {
    /** @link https://v8.i18n.nuxtjs.org/guide/lazy-load-translations */
    lazy: true,
    langDir: "locales/",
    defaultLocale: "ja",
    locales: [
      {
        code: "ja",
        iso: "ja-JP",
        file: "ja.json",
        name: "日本語",
      },
    ],
  },
  pinia: {
    storesDirs: ["stores/**"],
  },
  storybook: {
    url: "http://localhost:6006",
    port: 6006,
  },
});
