// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@primevue/nuxt-module",
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
});
