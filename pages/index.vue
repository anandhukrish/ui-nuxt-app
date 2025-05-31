<template>
  <div>home {{ test.testing }}</div>
</template>

<script lang="ts" setup>
import { testStore } from "~/utils/store/test";

const test = testStore();
</script>
