/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-11-09 15:32:25
 * @LastEditors: 万洲
 * @LastEditTime: 2022-11-09 16:58:38
 */
//@ts-ignore
import fuiUtils from "./fuiUtils.js"
export const newDate = (string: string) => new Date(string.replace(/-/g, "/"))

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
        //@ts-ignore
        // result = parseInt(time / month) + "月前";
        result = fuiUtils.dateFormatter(dateObject, "y-m-d", 4);
    } else if (time / week >= 1) {
        //@ts-ignore
        result = fuiUtils.dateFormatter(dateObject, "y-m-d", 4);
        // result = parseInt(time / week) + "周前";
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

/**
     * @desc 日期时间格式化
     
     * @param {String | Date} date 需要格式化的日期
     
     * @param {String} format 格式化字符串(y-m-d h:i:s)
     * format的格式可由（y m d h i s）组合，如：y-m，y-m-d，y年m月，h:i，y-m-d h:i 等
     
     * @param {Number} type 日期类型 1~4 
     * 1-date的格式类型：日期字符串(2017/12/04 12:12:12) 
     * 2-date的格式类型：时间戳(1603676514690) 
     * 3-date的格式类型：日期字符串，无连接符(20171204121212) 
     * 4-date的格式类型：new Date()时间格式(Thu Oct 01 2020 00:00:00 GMT+0800 (中国标准时间))

     * @param {Boolean} isMs 时间戳精度是否为毫秒，默认为true（当精度为秒时传false），type=2时有效
 **/
export const dateFormatter: (date: Date, formatter: string, type: number, isMs?: boolean) => void = fuiUtils.dateFormatter