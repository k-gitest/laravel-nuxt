<script setup>
const error = useError();
</script>

<template>
  <div>
    <h1 v-if="error.statusCode === 404">404エラー！</h1>
    <h1 v-else>エラー</h1>
    <p>{{ error.message }}</p>
  </div>
</template>