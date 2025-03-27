/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 13:47:55
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 13:50:17
 */
/**
 * 等待多少毫秒再执行 ，同步阻塞
 * @param {String} millisecond 毫秒
 **/
export const sleep = (millisecond: number) => {
    let now = new Date();
    let exitTime = now.getTime() + millisecond;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) return;
    }
}

