<script setup lang="ts">
  definePageMeta({ middleware: ["auth"] });
  /*
  const user =useUser()
  const currentUser = await fetchCurrentUser();
  if(currentUser){
    user.value = currentUser;
  }
  console.log(user.value)
  */
</script>

<template>
  <div>
    <p>ダッシュボード</p>
  </div>
</template>