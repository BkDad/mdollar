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
        text: '数组',
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
        text: '业务',
        collapsed: false,
        items: [
            { text: "getTimeState", link: '/apis/business/getTimeState' },
            { text: "isMobile", link: '/apis/business/isMobile' },
        ]
    },
    {
        text: '日期',
        collapsed: false,
        items: [
            { text: "dateFormatter", link: '/apis/date/dateFormatter' },
            { text: "friendlyFormatTime", link: '/apis/date/friendlyFormatTime' },
            { text: "newDate", link: '/apis/date/newDate' },
        ]
    },
    {
        text: '判断',
        collapsed: false,
        items: [
            { text: "isImage", link: '/apis/is/isImage' },
            { text: "isVedio", link: '/apis/is/isVedio' },
            { text: "objIsNull", link: '/apis/is/objIsNull' },
            { text: "arraryHaveValue", link: '/apis/is/arraryHaveValue' },
            { text: "checkSpecialCharacters", link: '/apis/is/checkSpecialCharacters' },
        ]
    },
    {
        text: '字符串',
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
]


export default {
    '/guide/': guideSidebar,
    '/apis/': apisSidebar,
}