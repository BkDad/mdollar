/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 13:28:30
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 13:29:35
 */
/**根据某字段删除数组中的对象
     * 
     * @param arr 传入数组
     * @param fieldName 需要根据哪个字段名删除
     * @param fieldValue 字段值是多少
     * @returns 返回一个新数组
     */
export const deleteArrElement = <T>(arr: T[], fieldName: string, fieldValue: string | number): T[] => {
    let tempArr: any[] = JSON.parse(JSON.stringify(arr))
    let index = tempArr.findIndex(item => item[fieldName] === fieldValue)
    if (index === -1) return arr
    tempArr.splice(index, 1)
    return tempArr
}