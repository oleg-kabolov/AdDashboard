<script setup lang="ts">
import Dark_theme from "~/UI/Dark_theme.vue";

const darkMode = ref<boolean>(false);
// import { h } from 'vue'

// const vnode = h {
//     html,
//     {class: 'dark'},
//     []
// }

const darkModeOn = (): void => {
  darkMode.value = !darkMode.value;
  document.body.classList.toggle("dark-mode", darkMode.value);
};

// Установка начальной темы
onMounted(() => {
  document.body.classList.add("light-mode"); // По умолчанию светлая тема
});

// Очистка классов при уничтожении компонента
onUnmounted(() => {
  document.body.classList.remove("light-mode", "dark-mode");
});
</script>

<template>
  <div>
    <Dark_theme @active:darkTheme="darkModeOn" />
  </div>
</template>

<style>
.light-mode {
  background-color: white;
  color: black;
}

.dark-mode {
  background-color: black;
  color: white;
}
</style>
