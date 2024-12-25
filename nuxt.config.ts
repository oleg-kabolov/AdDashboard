// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    baseURL: "/",
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            '@import "@/assets/styles/_variables.scss";',
            '@import "@/assets/scss/main.scss";',
          ].join(""),
        },
      },
    },
  },

  postcss: {
    plugins: {
      cssnano: {},
      autoprefixer: {},
    },
  },
  css: [
    "quasar/dist/quasar.prod.css", // Подключение базовых стилей Quasar
  ],

  build: {
    transpile: ["quasar"], // Обеспечивает корректную работу Quasar
  },
});
