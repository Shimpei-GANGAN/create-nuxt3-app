// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: "./src",
  modules: ["@nuxtjs/eslint-module"],
  eslint: {
    cache: false,
    eslintPath: "./eslintrc.js",
  },
});
