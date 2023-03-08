import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 完整引入
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

createApp(App).use(router).mount("#app"); // 按需引入 .use(ElementPlus)
