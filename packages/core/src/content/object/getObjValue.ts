/**
 * 深度获取一个对象的值
 * @param obj 要获取的对象
 * @param key 对象的key 例如user.dept.name
 * @returns 对象为空的情况下返回undefined
 */
export const getObjValue = (obj: Record<string | number, any>, key: string) => {
    const keyList = key.split(".");
    return keyList.reduce((acc, cur) => {
        if (!acc) return undefined;
        return acc[cur];
    }, obj);
}