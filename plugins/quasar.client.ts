import {
  Quasar,
  QInput,
  QBtn,
  QBtnToggle,
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

import "@quasar/extras/material-icons/material-icons.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    components: {
      QInput,
      QBtn,
      QBtnToggle,
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
  });
});
