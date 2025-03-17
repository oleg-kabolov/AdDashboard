<script setup lang="ts">
const toogle2 = ref<boolean>(false);
</script>

<template>
  <div>
    <q-toggle v-model="toogle2" color="yellow" label="On Left" left-label />
    <q-icon size="38px" name="o_dark_mode_outlined" />
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
