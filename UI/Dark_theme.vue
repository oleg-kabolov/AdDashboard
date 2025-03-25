<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: "active:darkTheme"): void;
}>();

let nameIcon = ref<string>("o_dark_mode_outlined");

const changeIcon = () => {
  nameIcon.value =
    nameIcon.value === "o_dark_mode_outlined"
      ? "o_light_mode"
      : "o_dark_mode_outlined";
};
const activateDarkTheme = () => {
  emit("active:darkTheme");
  changeIcon();
};
</script>

<template>
  <div @click="activateDarkTheme">
    <transition
      appear
      enter-active-class="animate__animated  animate__rollIn"
      leave-active-class="animate__animated animate__rollOut"
      mode="out-in"
    >
      <q-icon
        :key="nameIcon"
        class="cursor-pointer animated-icon"
        size="38px"
        :name="nameIcon"
      />
    </transition>
  </div>
</template>

<style scoped></style>
