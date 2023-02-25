/**
    * 搜索列表致使搜索字段名带高亮，只支持react，需配合dangerouslySetInnerHTML属性一起使用
    * dangerouslySetInnerHTML={{ __html: item[fields] }}
    * @param searchValue 搜索值
    * @param totalList 总列表
    * @param fields 要替换的字段名
    * @param color 颜色 默认#279EF3
    * @returns 返回替换掉的字段列表
    */
import { deepCopy } from "./deepCopy"
export const serarchLight = <T>(searchValue: string, totalList: T[], fields: string, color: string = "#279EF3") => {
    let totalListCopy = deepCopy(totalList)
    totalListCopy = totalListCopy.filter(v => v[fields].includes(searchValue))
    return totalListCopy.map(item => {
        var re = new RegExp(searchValue, "g"); //定义正则
        let val = `<span style="color:${color};">${searchValue}</span>`
        return { ...item, [fields]: item[fields].replace(re, val) } //进行替换，并定义高亮的样式
    })
}