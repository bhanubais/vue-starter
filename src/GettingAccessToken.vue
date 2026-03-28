<script setup>
import { onMounted, ref, toRaw } from "vue";

const loading = ref(true);
const err = ref(null);
const data = ref(null);
const access_token = ref(null);

const email = "student01@placement.in";
const password = "Student@123";

const payload = {
	method: "POST",
	headers: {
		accept: "application/json",
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		email,
		password,
	}),
};

const fetchData = async () => {
	loading.value = true;
	try {
		const response = await fetch("/api/v1/auth/login", payload);
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
