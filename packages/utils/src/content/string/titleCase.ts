
/**
 * 英文首字母大写
 * @param value 传入值
 * @returns 
 */
export const titleCase = (value: string) => {
    if (value == null || value.length === 0) return value;
    return value.replace(/^[a-z]/, (matchStr) => {
        return matchStr.toLocaleUpperCase();
    });
}
