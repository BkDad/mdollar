/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-04-02 22:13:46
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 22:13:46
 */
// isNumber
export const isNumber = (value: any) => {
    // 使用typeof运算符和isNaN函数来判断是否为数字或者数字字符串
    return typeof value === "number" || (!isNaN(value) && typeof value === "string");
  };
  