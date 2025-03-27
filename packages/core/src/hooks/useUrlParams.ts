/**
 * 获取url中参数
 * @param url 可不传，默认获取window.location.href的url
 * @returns 
 */
export const useUrlParams = <T extends Record<string, any>>(url?: string): T => {
    const realUrl = url === undefined ? window.location.href : url
    if (typeof realUrl !== "string") {
        throw new TypeError("useUrlParams=>url类型错误")
    }
    const queryString = realUrl.split("?")[1]
    if (!queryString) return {} as T
    const splitQuery = queryString.split("&")
    const object = {}
    splitQuery.forEach(item => {
        const key = item.split("=")[0]
        const value = item.split("=")[1]
        object[key] = value
    })
    return object as T
}