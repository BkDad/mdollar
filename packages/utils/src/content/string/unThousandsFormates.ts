/**
 * 会计金额格式转为普通数字
 * @param num 数字
 * @returns 
 */
export const unThousandsFormates = (num: string) => parseFloat(num.replace(/[^\d\\.-]/g, ""));