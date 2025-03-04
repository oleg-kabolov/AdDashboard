<script setup lang="ts"></script>

<template>
  <div>
    <q-btn-dropdown
      menu-anchor="bottom middle"
      menu-self="top middle"
      round
      dropdown-icon="img:/icons/ru-lang-icon.svg"
      class="lang-button"
    >
      <q-list bg-color="none">
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-avatar size="40px">
              <img src="../public/icons/eng-lang-icon.svg" />
            </q-avatar>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-avatar size="40px">
              <img src="../public/icons/esp-lang-icon.svg" />
            </q-avatar>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-avatar size="40px">
              <img src="../public/icons/fr-lang-icon.svg" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>
