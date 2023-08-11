// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: "./src",
  modules: ["@pinia/nuxt", "@nuxtjs/eslint-module"],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  eslint: {
    cache: false,
    eslintPath: "./eslintrc.js",
  },
});
