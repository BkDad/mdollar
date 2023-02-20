/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-10-17 15:04:29
 * @LastEditors: 万洲
 * @LastEditTime: 2022-11-15 16:28:27
 */
/**
 * 根据当前时间获取问候语
 * @returns 
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

/**
 * 是否为手机端
 */
export const isMobile = () => {
    let userAgentInfo = navigator.userAgent.toLowerCase();
    let Agents = new Array('android', 'iphone', 'symbianos', 'windows phone', 'ipad', 'ipod');
    let flag = false;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) !== -1) {
            flag = true;
            break;
        }
    }
    return flag;
};