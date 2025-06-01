<template>
  <ul class="menu-container">
    <template v-for="(route, index) in routes" :key="index">
      <AppMenuItem :route />
    </template>
  </ul>
</template>

<script setup lang="ts">
import AppMenuItem from "./AppMenuItem.vue";

defineProps<{ routes: any[] }>();
</script>

<style scoped>
.menu-container {
  list-style: none;
  padding: 20px;
}
</style>
