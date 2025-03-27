
/**
 * @desc 去所有空格
 * @param {String} value 需要处理的字符串
 **/
export const trimAll = (value: string) => {
    return value.replace(/\s+/g, "")
}