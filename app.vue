<script setup lang="ts">
useHead({
  title: "Nuxt App", // titleタグ設定
  link: [
    // GoogleFonts設定
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap",
    },
  ],
});
</script>

<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
