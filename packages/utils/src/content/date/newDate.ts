/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 14:15:22
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 14:16:38
 */
/**
 * 创建date对象，解决xxxx-xx-xx在ios端new date无效问题
 * @param string 字符串日期
 * @returns 
 */
 export const newDate = (string: string) => new Date(string.replace(/-/g, "/"))