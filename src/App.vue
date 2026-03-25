<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
<button @click="count++" class="btn btn-outline-primary">Count: {{ count }}</button>
</template>

<style scoped>
</style>
