<template>
  <li>
    <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
  </li>
</template>

<script setup lang="ts">
defineProps<{ route: any }>();
</script>

<style lang="scss" scoped></style>
