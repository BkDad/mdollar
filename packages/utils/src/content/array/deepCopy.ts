/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 20:00:47
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 22:28:32
 */
/**
 * 深拷贝
 * @param value 拷贝值，对象数组皆可
 * @returns 
 */
export const deepCopy = <T>(value: unknown): T => {
    if (value === undefined || value === null) return value as T;
    if (typeof value !== "object") return value as T;
    const result = Array.isArray(value) ? [] : {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      result[key] = deepCopy(val);
    }
    return result as T;
  };