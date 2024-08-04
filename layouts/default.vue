<script setup lang="ts"></script>

<template>
  <div>
    <Navbar />
    デフォルトレイアウト
    <div class="flex flex-col h-screen items-center">
      <slot />
    </div>
  </div>
</template>