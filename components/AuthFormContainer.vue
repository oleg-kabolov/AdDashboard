<script setup lang="ts">
import { useQuasar } from "quasar";
import Authform from "~/UI/Authform.vue";
import { signUp } from "~/api/auth";

const $q = useQuasar();

// Состояние формы
const email = ref<string>("");
const password = ref<string>("");

const updateEmail = (newValue: string): void => {
  email.value = newValue; // Обновляем реактивное состояние
};
const updatePassword = (newValue: string): void => {
  password.value = newValue; // Обновляем реактивное состояние
};

// Бизнес-логика submit
const handleSubmit = async () => {
  // $q.notify({
  //   color: "green-4",
  //   textColor: "white",
  //   icon: "cloud_done",
  //   message: "Submitted",
  // });

  await signUp(email.value, password.value);
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
    ></Authform>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
