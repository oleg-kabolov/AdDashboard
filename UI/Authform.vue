<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  email: String,
  password: String,
  accept: Boolean,
});

const emit = defineEmits<{
  (e: "update:email", value: string): void;
  (e: "update:password", value: string): void;
  (e: "update:accept", value: boolean): void;
  (e: "submit"): void;
  (e: "reset"): void;
}>();

const localEmail = computed({
  get: () => props.email,
  set: (value: string) => emit("update:email", value),
});
const localPassword = computed({
  get: () => props.password,
  set: (value: string) => emit("update:password", value),
});

const EmailRules = [
  (val: string) => (val && val.length > 0) || "Please type something",
  (val: string) => val.includes("@") || "email should contain @",
];
const PasswordRules = [
  (val: string) => (val !== null && val !== "") || "Please type your password",
  (val: string) =>
    val.length < 6 ||
    val.length > 20 ||
    "Please be sure that your password is between 6 and 20 symbols",
  (val: string) =>
    val.match(/[0-9]/gi)?.length ||
    "Please be sure that your password includes a number",
  (val: string) =>
    val.match(/[A-Z]/gi) ||
    "Please be sure that your password includes a capital letter",
];
</script>

<template>
  <div class="">
    <q-form
      @submit="$emit('submit')"
      @reset="$emit('reset')"
      class="q-gutter-md absolute-center width-400"
    >
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
          label="Submit"
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
  </div>
</template>

<style scoped>
:deep(.q-form) {
  transform: none;
  width: 400px;
}
</style>
