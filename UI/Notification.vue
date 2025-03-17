<script setup lang="ts">
const toogle1 = ref<boolean>(false);
</script>

<template>
  <div>
    <q-toggle v-model="toogle1" color="yellow" label="On Left" left-label />
    <q-icon size="38px" name="o_notifications" />
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
