/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 14:15:24
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 14:19:12
 */
import { newDate } from "./newDate"
import { dateFormatter } from "./dateFormatter"
/**
 * 根据日期获取距离当前时间时长，动态显示距离目前多久
 * @param stringTime 字符串日期 xxxx-xx-xx格式
 * @returns 
 */
export const friendlyFormatTime = (stringTime: string) => {
    if (!stringTime) return
    let dateObject = newDate(stringTime)
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let week = day * 7;
    let month = day * 30;
    let time1 = new Date().getTime(); //当前的时间戳
    //@ts-ignore
    let time2 = Date.parse(newDate(stringTime)); //指定时间的时间戳
    let time = time1 - time2;

    let result!: string | number;
    if (time < 0) {
        result = "--";
    } else if (time / month >= 1) {
        result = dateFormatter(dateObject, "y-m-d", 4);
    } else if (time / week >= 1) {
        result = dateFormatter(dateObject, "y-m-d", 4);
        return stringTime
    } else if (time / day >= 1) {
        //@ts-ignore
        result = parseInt(time / day) + "天前";
    } else if (time / hour >= 1) {
        //@ts-ignore
        result = parseInt(time / hour) + "小时前";
    } else if (time / minute >= 1) {
        //@ts-ignore
        result = parseInt(time / minute) + "分钟前";
    } else {
        result = "刚刚";
    }
    return result;
}