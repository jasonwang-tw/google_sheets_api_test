import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/styles.css";

createApp(App).use(router).mount("#app");

// import Vue from "vue";
// import axios from "./assets/js/axios";

// Vue.prototype.$axios = axios;
