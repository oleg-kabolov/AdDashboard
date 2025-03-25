<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isUserAuthenticated: Boolean,
});

const emit = defineEmits<{
  (e: "openAuthForm"): void;
}>();
</script>

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
          <q-item-section v-if="props.isUserAuthenticated">
            Profile
          </q-item-section>
          <q-item-section
            @click="$emit('openAuthForm')"
            v-if="!props.isUserAuthenticated"
          >
            Sign In
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section v-if="!props.isUserAuthenticated"
            >Sign Up
          </q-item-section>
          <q-item-section v-if="props.isUserAuthenticated"
            >Settings</q-item-section
          >
        </q-item>
        <q-item clickable v-close-popup v-if="props.isUserAuthenticated">
          <q-item-section> Log out </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
