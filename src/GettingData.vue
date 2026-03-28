<script setup>
import { onMounted, ref } from "vue";

const loading = ref(true);
const err = ref(null);
const data = ref(null);
const access_token = ref(
	localStorage.access_token ??
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNCIsInJvbGUiOiJTVFVERU5UIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTc3NDY5NjExMSwiZXhwIjoxNzc0Njk5NzExLCJ2ZXIiOjF9.rjffFof8OYDcfOxQCDU_LlmhSFjDyMVNo-xNy5Gf_iQ",
);

const URL = "/api/v1/student/drives?sort=deadline_asc&page=1&per_page=20";

const payload = {
	method: "GET",
	headers: {
		accept: "application/json",
		"Content-Type": "application/json",
		Authorization: `Bearer ${access_token.value}`,
	},
};

const fetchData = async () => {
	loading.value = true;
	try {
		const response = await fetch(URL, payload);
		data.value = await response.json();
		access_token.value = data.value.access_token;
	} catch (error) {
		err.value = error;
	} finally {
		loading.value = false;
	}
};

onMounted(async () => {
	await fetchData();
	localStorage.setItem("access_token", access_token.value);
});
</script>
<template>
<div v-if="loading" class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div v-else-if="err" class="alert alert-danger">
	Data cound't fetched!
	<div>{{ err }}</div>
</div>
<pre v-else>
	{{ data }}
</pre>
</template>
