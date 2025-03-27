/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-04-02 22:14:07
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 22:14:13
 */
export const isObject = (value: any) => {
  // 使用typeof运算符和null值来判断是否为对象
  return typeof value === "object" && value !== null;
};