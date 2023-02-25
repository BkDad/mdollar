/**
 * 判断对象是否为空
 * @param obj 传入的对象
 * @returns 
 */
 export const objIsNull = <T>(obj: T) => {
    return JSON.stringify(obj) === "{}"
}