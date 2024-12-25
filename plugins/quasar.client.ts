import {
  Quasar,
  QInput,
  QBtn,
  QSelect,
  QAvatar,
  QIcon,
  QList,
  QItem,
  QBtnDropdown,
  QItemSection,
  ClosePopup,
} from "quasar";
import { defineNuxtPlugin } from "#app";

import iconSet from "quasar/icon-set/fontawesome-v6";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    components: {
      QInput,
      QBtn,
      QSelect,
      QAvatar,
      QList,
      QItem,
      QBtnDropdown,
      QItemSection,
      QIcon,
    },
    directives: {
      ClosePopup,
    },
    plugins: {},
    iconSet: iconSet,
  });
});
