<template>
  <div class="container">
    <div class="flex container">
      <AppSidebar img="/favicon.ico" title="title" :routes />
      <div class="content-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import appConfig from "~/app.config";
import AppSidebar from "~/components/AppSidebar.vue";

const routes = appConfig.routes || [];

console.log(routes);
</script>
