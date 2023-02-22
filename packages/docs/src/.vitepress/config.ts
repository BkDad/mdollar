import { defineConfig } from 'vitepress'
import sidebar from "./sidebar"
export default defineConfig({
    base: "/mdollar/",
    outDir: "../build",
    title: "mdollar",
    titleTemplate: ':title',
    cleanUrls: true,
    head: [
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
        ]
    ],
    themeConfig: {
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...',
        },
        sidebar,
        nav: [
            { text: '介绍', link: '/guide/whatIs' },
            { text: '文档', link: '/apis/arrary/deepCopy' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://gitee.com/baikebaba' },
        ],
    },

})