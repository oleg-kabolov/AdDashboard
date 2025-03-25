<script setup lang="ts">
import UserProfileMenu from "~/UI/UserProfileMenu.vue";
import { useAuthStore } from "~/store/authStore";
import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: "openAuthForm"): void;
}>();

const isUserAuthenticated = ref<boolean>(false);

const authStore = useAuthStore();
const checkUserStatus = () => {
  authStore.userTokens.idToken
    ? (isUserAuthenticated.value = true)
    : (isUserAuthenticated.value = false);
};
</script>

<template>
  <div>
    <UserProfileMenu
      @checkUserStatus="checkUserStatus"
      @openAuthForm="$emit('openAuthForm')"
      :isUserAuthenticated="isUserAuthenticated"
    />
    <div></div>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
