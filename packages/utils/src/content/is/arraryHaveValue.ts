/**
 * 判断数组是否为空
 * @param arr 传入数组
 * @returns 
 */
export const arraryHaveValue = (arr: any[] | undefined): boolean => {
    if (!arr) return false
    if (!Array.isArray(arr)) return false
    if (!arr[0] && arr[0] !== 0) return false
    return true
}