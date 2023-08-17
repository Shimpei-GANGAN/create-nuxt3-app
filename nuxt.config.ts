// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: "./src",
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/eslint-module"
  ],
  imports: {
    dirs: ['stores']
  },
  pinia: {
    autoImports: [
      "createPinia",
      "defineStore",
      "storeToRefs",
      "setActivePinia"
    ],
  },
  eslint: {
    cache: false,
  },
});
