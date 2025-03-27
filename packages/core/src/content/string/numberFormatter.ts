/**
 * @desc 隐藏手机号码中间四位
 * @param {String} num 手机号码
 **/
export const numberFormatter = (num: string) => {
    return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2') : num;
}