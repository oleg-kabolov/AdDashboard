<script setup lang="ts">
import { defineEmits } from "vue";
import { useQuasar } from "quasar";
import Authform from "~/UI/Authform.vue";
import { createUserInDB } from "~/api/auth";

const $q = useQuasar();

const emit = defineEmits<{
  (e: "closeAuthForm"): void;
}>();

// Состояние формы
const email = ref<string>("");
const password = ref<string>("");

const updateEmail = (newValue: string): void => {
  email.value = newValue; // Обновляем реактивное состояние
};
const updatePassword = (newValue: string): void => {
  password.value = newValue; // Обновляем реактивное состояние
};

const closeAuthForm = () => {
  emit("closeAuthForm");
};

// Бизнес-логика submit
const handleSubmit = () => {
  $q.notify({
    color: "green-4",
    textColor: "white",
    icon: "cloud_done",
    message: "Submitted",
  });

  // await createUserInDB(email.value, password.value);
};

// Бизнес-логика reset
const handleReset = () => {
  email.value = "";
  password.value = "";
};
</script>

<template>
  <div>
    <Authform
      :email="email"
      :password="password"
      @update:email="updateEmail"
      @update:password="updatePassword"
      @submit="handleSubmit"
      @reset="handleReset"
      @closeAuthForm="closeAuthForm"
    ></Authform>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
