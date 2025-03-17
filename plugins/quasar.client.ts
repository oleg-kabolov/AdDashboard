import {
  Quasar,
  useQuasar,
  QInput,
  QBtn,
  QBtnToggle,
  QToggle,
  QSelect,
  QAvatar,
  QIcon,
  QForm,
  QList,
  QItem,
  QItemLabel,
  QBtnDropdown,
  QItemSection,
  ClosePopup,
} from "quasar";
import { defineNuxtPlugin } from "#app";

import "@quasar/extras/material-icons/material-icons.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    components: {
      Quasar,
      QInput,
      QBtn,
      QBtnToggle,
      QToggle,
      QSelect,
      QAvatar,
      QIcon,
      QForm,
      QList,
      QItem,
      QItemLabel,
      QBtnDropdown,
      QItemSection,
    },
    directives: {
      ClosePopup,
      useQuasar,
    },
    methods: {
      useQuasar,
    },
    plugins: {},
  });
});
