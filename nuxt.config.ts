// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: [
    "@primevue/nuxt-module",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils",
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
  ssr: false,
});
