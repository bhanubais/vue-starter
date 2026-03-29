import { createRouter, createWebHistory } from "vue-router";
import About from "@/view/About.vue";
import Home from "@/view/Home.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/about", name: "About", component: About },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
