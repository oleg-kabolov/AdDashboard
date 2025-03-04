<script setup lang="ts">
const text = ref<string>("");
const searchField = ref<InstanceType<typeof HTMLElement> | null>(null);
const iconClicked = ref<boolean>(false);

const focusSearchField = (): void => {
  if (searchField.value) {
    searchField.value.focus();
    iconClicked.value = true;
  }
};
const blurSearchField = (): void => {
  if (searchField.value) {
    iconClicked.value = false;
  }
};
</script>

<template>
  <div class="q-gutter-y-sm row items-center q-py-md">
    <q-icon
      size="24px"
      class="search-icon text-primary"
      name="search"
      @click="focusSearchField"
    />
    <q-input
      v-show="iconClicked"
      @blur="blurSearchField"
      dense
      placeholder="Введите запрос"
      ref="searchField"
      v-model="text"
      input-class="text-left"
      class="header-input width-100 col-md-8"
    >
    </q-input>
  </div>
</template>

<style scoped>
:deep(.header-input .q-field__control) {
  height: 24px;
}
</style>
