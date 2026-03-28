import "@/scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import About from "@/view/About.vue";
import Home from "@/view/Home.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "Home", component: Home },
		{ path: "/about", name: "About", component: About },
	],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
