/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 20:00:47
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 22:21:19
 */
/**
 * 判断数组是否为空
 * @param arr 传入数组
 * @returns 
 */
export const arrayHasValue = (arr: unknown[] | null | undefined): boolean => {
    if (!arr) return false;
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return false;
    return true;
};