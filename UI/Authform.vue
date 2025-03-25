<script setup lang="ts">
import { defineProps, defineEmits, computed, Transition } from "vue";

const props = defineProps({
  email: String,
  password: String,
  accept: Boolean,
  label: String,
});

const emit = defineEmits<{
  (e: "update:email", value: string): void;
  (e: "update:password", value: string): void;
  (e: "update:accept", value: boolean): void;
  (e: "update:signBtnText", value: string): void;
  (e: "submit"): void;
  (e: "reset"): void;
  (e: "closeAuthForm"): void;
}>();

const closeBtn = ref<HTMLElement | null>(null);

const localEmail = computed({
  get: () => props.email,
  set: (value: string) => emit("update:email", value),
});
const localPassword = computed({
  get: () => props.password,
  set: (value: string) => emit("update:password", value),
});
const signBtnValue = computed({
  get: () => props.label,
  set: (value: string) => emit("update:signBtnText", value),
});

const EmailRules = [
  (val: string) => (val && val.length > 0) || "Please type something",
  (val: string) => val.includes("@") || "email should contain @",
];

const PasswordRules = [
  // Проверка на пустое значение
  (val: string) => !!val || "Please type your password",

  // Проверка длины пароля (от 6 до 20 символов)
  (val: string) =>
    (val.length >= 6 && val.length <= 20) ||
    "Password must be between 6 and 20 symbols",

  // Проверка наличия хотя бы одной цифры
  (val: string) =>
    /\d/.test(val) || "Password must include at least one number",

  // Проверка наличия хотя бы одной заглавной буквы
  (val: string) =>
    /[A-Z]/.test(val) || "Password must include at least one capital letter",
];

const closeAuthForm = () => {
  closeBtn.value?.classList.add("do-outgoing-animation");
  setTimeout(() => {
    emit("closeAuthForm");
  }, 1000);
};
</script>

<template>
  <div class="form-wrapper">
    <transition
      appear
      enter-active-class="animate__animated  animate__fadeInDown"
      ref="closeBtn"
    >
      <q-form
        @submit="$emit('submit')"
        @reset="$emit('reset')"
        class="q-gutter-md absolute-center width-400"
      >
        <q-icon
          @click="closeAuthForm"
          size="30px"
          class="form-close-btn"
          name="close"
        ></q-icon>
        <q-input
          filled
          v-model="localEmail"
          label="Your email *"
          lazy-rules
          :rules="EmailRules"
        />

        <q-input
          filled
          type="password"
          v-model="localPassword"
          label="Your password should be at least 6 symbols *"
          lazy-rules
          :rules="PasswordRules"
        />

        <div>
          <q-btn
            @click="$emit('submit')"
            :label="signBtnValue === 'Sign In' ? 'Sign In' : 'Sign Up'"
            type="submit"
            color="primary"
          />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </transition>
  </div>
</template>

<style scoped>
:deep(.q-form) {
  transform: none;
  width: 400px;
}

.form-wrapper :deep(.q-icon.form-close-btn) {
  position: absolute;
  top: -85px;
  right: -6px;
}
.do-outgoing-animation {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: fadeOutDown;
}
</style>
