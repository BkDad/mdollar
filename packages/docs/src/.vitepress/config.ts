/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 13:13:00
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 19:51:54
 */
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
            { text: 'hooks', link: '/hooks/useValidator/api' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://gitee.com/baikebaba' },
        ],
    },

})