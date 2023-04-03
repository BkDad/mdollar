/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-04-02 22:14:19
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 22:14:19
 */
/**
 * 判断是否为方法
 * @param value 传入值
 * @returns 
 */
export const isFunction = (value: any) => {
    // 使用typeof运算符来判断是否为函数
    return typeof value === "function";
  };