<script setup lang="ts"></script>

<template>
  <div>
    <q-btn-dropdown
      menu-anchor="bottom middle"
      menu-self="top middle"
      round
      dropdown-icon="img:https://cdn.quasar.dev/img/avatar2.jpg"
      class="lang-button"
    >
      <q-list bg-color="none">
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label caption>Settings</q-item-label>
            <q-item-label caption>Profile</q-item-label>
            <q-item-label size="16px">Log out</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
