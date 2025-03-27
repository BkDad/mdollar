/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-22 18:46:58
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 18:34:45
 */
import { createApp } from "vue";
import App from "./app.vue";
import 'element-plus/dist/index.css'
import Element from "element-plus"
const app = createApp(App);
app.use(Element)
app.mount("#app");