/**
 * 深拷贝
 * @param value 拷贝值，对象数组皆可
 * @returns 
 */
export const deepCopy = <T>(value: T): T => {
    if (value === undefined || value === null) return value
    if (typeof value !== "object") return value
    let result = Array.isArray(value) ? [] : {};
    for (let key in value) {
        if ((value as any).hasOwnProperty(key)) {
            result[key as string] = deepCopy(value[key])
        }
    }
    return result as T
}