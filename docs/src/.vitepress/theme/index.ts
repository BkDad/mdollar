/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-22 18:46:58
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 19:24:44
 */
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import CustomComponent from "../components/CustomComponent.vue"
// 主题样式


export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        ctx.app.use(ElementPlus)

        // ctx.app.component('CustomComponent', CustomComponent)
    }
}