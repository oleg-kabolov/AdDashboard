// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer: {
    port: 3000,
  },
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
  // runtimeConfig: {
  //   public: {
  //     apiBase: "", // Убери 'http://localhost:3000', если он там есть
  //   },
  // },
  // nitro: {
  //   devProxy: {
  //     "/api": {
  //       target: "https://example.com", // Укажи настоящий API-адрес
  //       changeOrigin: true,
  //     },
  //   },
  // },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: [
  //           '@import "@/assets/styles/_variables.scss";',
  //           '@import "@/assets/scss/main.scss";',
  //         ].join(""),
  //       },
  //     },
  //   },
  // },
  postcss: {
    plugins: {
      cssnano: {},
      autoprefixer: {},
    },
  },
  css: [
    "quasar/dist/quasar.prod.css", // Подключение базовых стилей Quasar
    "@quasar/extras/material-icons/material-icons.css",
    "@quasar/extras/material-icons-outlined/material-icons-outlined.css", // Material Icons Outline
  ],

  build: {
    transpile: ["quasar"], // Обеспечивает корректную работу Quasar
  },
});
