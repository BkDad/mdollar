/*
 * @Description: 对象工具类
 * @Autor: 万洲
 * @Date: 2022-10-17 15:06:30
 * @LastEditors: 万洲
 * @LastEditTime: 2022-10-17 15:09:58
 */
/**
 * 对象转query格式
 * @param obj 对象
 * @returns 
 */
export const mapObjectToQueryString = (obj: object, takeHead = true) => {
    var str = [];
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return `${takeHead ? "&" : ""}${str.join("&")}`
}
