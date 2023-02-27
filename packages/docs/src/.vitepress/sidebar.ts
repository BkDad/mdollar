/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 13:13:00
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 18:51:08
 */
/**
 * 引导页侧栏
 */
const guideSidebar = [
    {
        text: '介绍',
        link: '/guide/whatIs'
    },
    {
        text: '安装',
        link: '/guide/install'
    },
    {
        text: '使用',
        link: '/guide/use'
    },
    {
        text: '更新日志',
        link: '/guide/updateLog'
    },

]
/** 
 * 文档侧栏
 */
const apisSidebar = [
    {
        text: '数组-array',
        collapsed: false,
        items: [
            { text: "deepCopy", link: '/apis/arrary/deepCopy' },
            { text: "divisionArr", link: '/apis/arrary/divisionArr' },
            { text: "sortClass", link: '/apis/arrary/sortClass' },
            { text: "deleteArrElement", link: '/apis/arrary/deleteArrElement' },
            { text: "sortArrToLetter", link: '/apis/arrary/sortArrToLetter' },
            { text: "listToTree", link: '/apis/arrary/listToTree' },
            { text: "serarchLight", link: '/apis/arrary/serarchLight' },
            { text: "getFlatTree", link: '/apis/arrary/getFlatTree' },
        ]
    },

    {
        text: '日期-Date',
        collapsed: false,
        items: [
            { text: "dateFormatter", link: '/apis/date/dateFormatter' },
            { text: "friendlyFormatTime", link: '/apis/date/friendlyFormatTime' },
            { text: "newDate", link: '/apis/date/newDate' },
        ]
    },
    {
        text: '判断-Is',
        collapsed: false,
        items: [
            { text: "isImage", link: '/apis/is/isImage' },
            { text: "isVedio", link: '/apis/is/isVedio' },
            { text: "objIsNull", link: '/apis/is/objIsNull' },
            { text: "arraryHaveValue", link: '/apis/is/arraryHaveValue' },
            { text: "checkSpecialCharacters", link: '/apis/is/checkSpecialCharacters' },
            { text: "isMobile", link: '/apis/is/isMobile' },
        ]
    },
    {
        text: '字符串-string',
        collapsed: false,
        items: [
            { text: "toThousandsFormates", link: '/apis/string/toThousandsFormates' },
            { text: "unThousandsFormates", link: '/apis/string/unThousandsFormates' },
            { text: "getRandomString", link: '/apis/string/getRandomString' },
            { text: "titleCase", link: '/apis/string/titleCase' },
            { text: "compressLetter", link: '/apis/string/compressLetter' },
            { text: "trim", link: '/apis/string/trim' },
            { text: "trimAll", link: '/apis/string/trimAll' },
            { text: "numberFormatter", link: '/apis/string/numberFormatter' },
            { text: "getUUID", link: '/apis/string/getUUID' },
        ]
    },
    {
        text: '数字-number',
        collapsed: false,
        items: [
            { text: "numberToChinese", link: '/apis/number/numberToChinese' },
        ]
    },
    {
        text: '其他-other',
        collapsed: false,
        items: [
            { text: "getTimeState", link: '/apis/other/getTimeState' },
            { text: "sleep", link: '/apis/other/sleep' },
            { text: "debounce", link: '/apis/other/debounce' },
            { text: "throttle", link: '/apis/other/throttle' },
        ]
    },
]
const hooksSidebar = [
    { text: "useValidator", link: '/hooks/useValidator/api' },
    { text: "useUrlParams", link: '/hooks/useUrlParams/api' },
    { text: "useElementPlusTheme", link: '/hooks/useElementPlusTheme/api' },
]

export default {
    '/guide/': guideSidebar,
    '/apis/': apisSidebar,
    "/hooks/": hooksSidebar
}