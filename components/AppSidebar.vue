<template>
  <aside class="container sidebar">
    <div class="app-header flex items-center py-20 px-20 gap-20">
      <img :src="img" alt="logo" v-if="img" class="logo" />
      <h1 v-if="title">{{ title }}</h1>
    </div>
    <nav>
      <AppMenu :routes />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import AppMenu from "./AppMenu.vue";
defineProps<{
  img?: string;
  title?: string;
  routes: any[];
}>();
</script>

<style scoped>
.sidebar {
  width: 320px;
  border: 1px solid black;
}
.app-header {
  display: flex;
}

.logo {
  height: 50px;
}
</style>
