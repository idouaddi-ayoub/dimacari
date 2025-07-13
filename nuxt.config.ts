// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  css: ["~/assets/css/style.css"],
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
});
