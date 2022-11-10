/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-10-17 15:04:29
 * @LastEditors: 万洲
 * @LastEditTime: 2022-10-17 15:06:15
 */
export const getTimeState = (): string => {
    let now = new Date(),
        hour = now.getHours();
    if (hour < 6) {
        return "凌晨好";
    } else if (hour < 9) {
        return "早上好";
    } else if (hour < 12) {
        return "上午好";
    } else if (hour < 14) {
        return "中午好";
    } else if (hour < 17) {
        return "下午好";
    } else if (hour < 19) {
        return "傍晚好";
    } else if (hour < 22) {
        return "晚上好";
    } else {
        return "夜里好";
    }
}

