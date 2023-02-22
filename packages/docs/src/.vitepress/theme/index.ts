import DefaultTheme from 'vitepress/theme'
import CustomComponent from "../components/CustomComponent.vue"

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        ctx.app.component('CustomComponent', CustomComponent)
    }
}