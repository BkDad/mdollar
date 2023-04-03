/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-04-02 22:14:55
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 22:15:02
 */
export const isPalindrome = (value: string) => {
    // 使用字符串的反转和比较来判断是否为回文字符串
    return value === value.split("").reverse().join("");
};