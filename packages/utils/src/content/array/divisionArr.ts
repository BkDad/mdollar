/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 13:28:25
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 13:28:25
 */
/**
 * 根据指定长度分割数组
 * @param array 传入任意数组
 * @param subLength 需要分割的长度
 * @returns 返回一个新数组
 */
 export const divisionArr = <T>(array: T[], subLength: number): T[][] => {
    let index = 0;
    let newArray = [];
    while (index < array.length) { newArray.push(array.slice(index, index += subLength)); }
    return newArray;
}