import "@/scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.json";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
