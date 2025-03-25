import { defineNuxtPlugin } from "#app";
import { createPinia } from "pinia";

const pinia = createPinia();

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(pinia);
});

export * from "pinia";
