<script setup>
import { onMounted, ref } from "vue";

const loading = ref(true);
const err = ref(null);
const data = ref(null);

const fetchData = async () => {
	loading.value = true;
	try {
		const response = await fetch("/api/v1/meta/branches");
		data.value = await response.json();
	} catch (error) {
		err.value = error;
	} finally {
		loading.value = false;
	}
};

onMounted(async () => {
	await fetchData();
});
</script>
<template>
<div v-if="loading" class="spinner-border" role="status">
	<span class="visually-hidden">Loading...</span>
</div>
<div v-else-if="err" class="alert alert-danger">
	Data could not be loaded!
	<div>{{ err }}</div>
</div>
<pre v-else>
{{ data }}
</pre>
</template>
