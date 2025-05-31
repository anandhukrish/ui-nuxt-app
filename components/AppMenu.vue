<template>
  <ul class="menu-container">
    <AppMenuItem />
  </ul>
</template>

<script setup>
import AppMenuItem from "./AppMenuItem.vue";
</script>

<style scoped>
.menu-container {
  list-style: none;
  padding: 20px;
}
</style>
