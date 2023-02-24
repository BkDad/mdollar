import { defineConfig } from 'vitepress'
import sidebar from "./sidebar"
export default defineConfig({
    base: "/mdollar/",
    outDir: "../build",
    title: "mdollar",
    titleTemplate: ':title - mdollar',
    cleanUrls: true,
    head: [
        [
            'link', { rel: 'icon', href: '/logo.png' }
        ]
    ],
    themeConfig: {
        logo: "/logo.png",
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...',
        },
        sidebar,
        nav: [
            { text: '指南', link: '/guide/whatIs' },
            { text: '文档', link: '/apis/arrary/deepCopy' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://gitee.com/baikebaba' },
        ],
    },

})