<script setup lang="ts">
    const { fetchProducts } = useApi()
    const { data: products } = await fetchProducts()
</script>

<template>
    <div>
        {{ products }}
    </div>
</template>


