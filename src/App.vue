<script setup>
import { onMounted, ref } from "vue";

// reactive state
const count = ref(0);

function increment() {
	count.value++;
}

onMounted(() => {
	console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
<button @click="increment" class="btn btn-outline-primary">Count: {{ count }}</button>
</template>

<style scoped>
</style>
