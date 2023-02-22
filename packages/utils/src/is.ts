/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-10-17 15:05:17
 * @LastEditors: 万洲
 * @LastEditTime: 2022-12-07 13:52:03
 */
/**
 * 判断是否为图片
 * @param ext 
 * @returns 
 */
export const isImage = (fileName: string) => {
    const ext = fileName.substring(fileName.lastIndexOf("."))
    return [".png", ".jpg", ".jpeg", ".bmp", ".gif", ".webp", ".svg", ".tiff"].indexOf(ext.toLowerCase()) !== -1;
}
/**
 * 判断是否为视频
 * @param ext 
 * @returns 
 */
export const isVedio = (fileName: string) => {
    const ext = fileName.substring(fileName.lastIndexOf("."))
    return [".mp4", ".avi", "wmv", "mov"].indexOf(ext.toLowerCase()) !== -1;
}
/**
 * 判断对象是否为空
 * @param obj 
 * @returns 
 */
export const objIsNull = (obj: any) => {
    return JSON.stringify(obj) === "{}"
}
/**
   * 判断数组是否为空
   * @param arr 
   * @returns 
   */
export const arraryHaveValue = (arr: any[] | undefined): boolean => {
    if (!arr) return false
    if (!Array.isArray(arr)) return false
    if (!arr[0]) return false
    return true
}
/**
 * 判断是否有特殊字符
 * @param str 传入string类型的变量
 * @returns 返回boolean
 */
export const checkSpecialCharacters = (str: string) => {
    var patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
    if (patrn.test(str)) {// 如果包含特殊字符返回false
        return true;
    }
    return false;
}
