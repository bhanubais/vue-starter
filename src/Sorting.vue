<script setup>
import { ref } from "vue";

const items = ref([
	{ message: "Primary message", theme: "primary", show: true },
	{ message: "Successful!", theme: "success", show: false },
	{ message: "Danger!", theme: "danger", show: true },
]);

const fruits = ref([
	["Apple", 1],
	["Banana", 2],
	["Orange", 3],
	["Mango", 4],
	["Grape", 5],
	["Strawberry", 6],
	["Pineapple", 7],
	["Watermelon", 8],
	["Pear", 9],
	["Papaya", 10],
	["Guava", 11],
	["Kiwi", 12],
	["Lemon", 13],
	["Blueberry", 14],
	["Peach", 15],
	["Pomegranate", 16],
]);

function suffleList(alist) {
	alist.sort(() => Math.random() - 0.5);
}

function reset(alist) {
	alist.sort((a, b) => a[1] - b[1]);
}

function sortByName(alist) {
	alist.sort((a, b) => a[0].localeCompare(b[0]));
}
</script>
<template>
	<!-- <template v-for="(item, index) in items.filter((item) => item.show)">
		<div class="alert" :class="`alert-${item.theme}`">{{ item.message }} - {{ index }}</div>
		<hr>
	</template> -->
	<p class="mb-0" v-for="(fruit, index) in fruits" :key="index">{{fruit[1]}} - {{ fruit[0] }}</p>
	<hr>
	<div class="d-flex gap-2">
		<button @click="suffleList(fruits)" class="btn btn-outline-primary">Shuffle List</button>
		<button @click="reset(fruits)" class="btn btn-outline-primary">Reset order</button>
		<button @click="sortByName(fruits)" class="btn btn-outline-primary">Sort by name</button>
	</div>
</template>
