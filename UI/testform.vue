<script setup lang="ts">
const text = ref<string>("");
</script>
<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-form class="q-gutter-md absolute-center width-400">
        <q-input v-model="text" label="Standard" />
        <q-input v-model="text" label="Standard" />
      </q-form>
    </div>
  </div>
</template>
