<script setup lang="ts">
import Search_bar from "~/UI/Search_bar.vue";
import Language_select from "~/UI/Language_select.vue";
import Dark_theme from "~/UI/Dark_theme.vue";
import Notification from "~/UI/Notification.vue";
import UserProfileSigned from "~/UI/UserProfileSigned.vue";
import AuthFormContainer from "~/components/AuthFormContainer.vue";
</script>

<template>
  <div>
    <header
      class="header col-md-10 row no-wrap justify-between items-center q-px-md"
    >
      <div class="search-wrapper col-md-6">
        <Search_bar />
      </div>
      <div class="user-buttons row items-center justify-end col-md-4">
        <div class="user-language-btn col-2 q-mr-xs">
          <Language_select />
        </div>
        <div class="dark-mode-btn col-md-2 row no-wrap items-center q-mr-lg">
          <Dark_theme />

          <div class="notification-btn col-md-2">
            <Notification />
          </div>
        </div>
        <div class="user-avatar -btn col-md-1 q-mr-lg">
          <UserProfileSigned />
        </div>
      </div>
      <AuthFormContainer />
    </header>
  </div>
</template>

<style scoped>
:deep(.lang-button .q-icon) {
  font-size: 3em;
  transform: none;
}
:deep(.lang-button .q-icon img) {
  border-radius: 50%;
}
:deep(.dark-mode-btn),
:deep(.notification-btn) {
  color: #3a3541de !important;
}
</style>
