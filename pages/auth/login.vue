<template>
  <div>
    <form action="" @submit.prevent="handleSubmit">
      <input type="text" v-model="email" />
      <input type="text" v-model="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const email = ref("");
const password = ref("");

async function handleSubmit() {
  const data = await $fetch("http://localhost:8080/api/user/login", {
    method: "POST",
    body: {
      email: email.value,
      password: password.value,
    },
  });

  console.log(data);
}
</script>

<style scoped></style>
