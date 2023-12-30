import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://your-api-url.com", // 替換成你的 API 基礎 URL
  withCredentials: false, // 這是預設值
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000, // 請求超時時間
});

export default {
  getPosts() {
    return apiClient.get("/posts"); // 以 '/posts' 為例的 API 端點
  },
  // 你可以在這裡添加更多的 API 請求方法
};
