/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-12-08 17:21:23
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 18:21:07
 */
import { arrayHasValue } from "../content";
export type IFormRule = {
    name: string;
    rule: TRuleEnum | string[];
    msg: string[];
    validator?: { msg: string; method: () => boolean }[];
}
export interface IFormRef<T> {
    validator: (
        formModel: T,
        rule: IFormRule[]
    ) => Promise<{
        isPassed: boolean;
        errorMsg: string;
    }>;
}

export enum TRuleEnum {
    /** 是否必填 */
    required = "required",
    /** 是否为手机号 */
    isMobile = "isMobile",
    /** ：是否为邮箱 */
    isEmail = "isEmail",
    /** ：是否为车牌号 */
    isCarNo = "isCarNo",
    /** ：是否为身份证号 */
    isIdCard = "isIdCard",
    /** ：是否为金额，允许保留两位小数 */
    isAmount = "isAmount",
    /** ：是否为数字 */
    isNumber = "isNumber",
    /** ：是否全为中文 */
    isChinese = "isChinese",
    /** ：是否不包含中文，可以有特殊字符 */
    isNotChinese = "isNotChinese",
    /** ：是否为英文 */
    isEnglish = "isEnglish",
    /** ：是否为英文和数字组合 4~30 位 */
    isEnAndNo = "isEnAndNo",
    /** ：只包含英文或者数字 */
    isEnOrNo = "isEnOrNo",
    /** ：是否有特殊字符，若有则返回false */
    isSpecial = "isSpecial",
    /** ：是否有表情符号，若有则返回false */
    isEmoji = "isEmoji",
    /** ：是否为日期：2021-08-09 */
    isDate = "isDate",
    /** ：是否为URL地址 */
    isUrl = "isUrl",
    /** ：与某个key值是否相同，传值：'isSame:key'，不相同则返回false */
    isSame = "isSame",
    /** ：数值范围，传值：'range:[1,9]' */
    range = "range",
    /** ：最小长度，传值：'minLength:Number'，如：'minLength:1' */
    minLength = "minLength",
    /** ：最大长度，传值：'maxLength:Number'，如：'maxLength:149' */
    maxLength = "maxLength",
    /** ：是否包含关键词，多个以英文逗号分隔，包含则返回false。传值：'isKeyword:key1,key2' */
    isKeyword = "isKeyword",
    /** 数组是否有值 */
    isArrayHaveValue = "isArrayHaveValue",
}



const ruleFuctions: Record<string, (value?: any, value2?: any, value3?: any) => boolean> = {
    _isArrHaveValue: function (value) {
        return arrayHasValue(value)
    },
    //允许填写字符串null或者undefined
    _isNullOrEmpty: function (value) {
        return (value === null || value === '' || value === undefined) ? true : false;
    },
    _isMobile: function (value) {
        return /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/.test(value);
    },
    _isEmail: function (value) {
        return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value);
    },
    _isCarNo: function (value) {
        // 新能源车牌
        const xreg =
            /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
        // 旧车牌
        const creg =
            /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
        if (value.length === 7) {
            return creg.test(value);
        } else if (value.length === 8) {
            return xreg.test(value);
        } else {
            return false;
        }
    },
    _isIdCard: function (value) {
        let idCard = value;
        if (idCard.length == 15) {
            return this.__isValidityBrithBy15IdCard as any;
        } else if (idCard.length == 18) {
            let arrIdCard = idCard.split("");
            if (this.__isValidityBrithBy18IdCard(idCard) && this.__isTrueValidateCodeBy18IdCard(arrIdCard)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    __isTrueValidateCodeBy18IdCard: function (arrIdCard) {
        let sum = 0;
        let Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
        let ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        if (arrIdCard[17].toLowerCase() == 'x') {
            arrIdCard[17] = 10;
        }
        for (let i = 0; i < 17; i++) {
            sum += Wi[i] * arrIdCard[i];
        }
        let valCodePosition = sum % 11;
        if (arrIdCard[17] == ValideCode[valCodePosition]) {
            return true;
        } else {
            return false;
        }
    },
    __isValidityBrithBy18IdCard: function (idCard18) {
        let year = idCard18.substring(6, 10);
        let month = idCard18.substring(10, 12);
        let day = idCard18.substring(12, 14);
        let temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
        if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 ||
            temp_date.getDate() !=
            parseFloat(day)) {
            return false;
        } else {
            return true;
        }
    },
    __isValidityBrithBy15IdCard: function (idCard15) {
        let year = idCard15.substring(6, 8);
        let month = idCard15.substring(8, 10);
        let day = idCard15.substring(10, 12);
        let temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));

        if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 ||
            temp_date.getDate() !=
            parseFloat(day)) {
            return false;
        } else {
            return true;
        }
    },
    _isAmount: function (value) {
        //是否为金额，只允许保留两位小数
        return /^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(value);
    },
    _isNumber: function (value) {
        //是否全为数字
        return /^[0-9]+$/.test(value);
    },
    //是否全部为中文
    _isChinese: function (value) {
        let reg = /^[\u4e00-\u9fa5]+$/;
        return value !== "" && reg.test(value) && !this._isSpecial(value) && !this._isEmoji(value)
    },
    //是否不包含中文，可以有特殊字符
    _isNotChinese: function (value) {
        let reg = /.*[\u4e00-\u9fa5]+.*$/;
        let result = true;
        if (reg.test(value)) {
            result = false
        }
        return result
    },
    _isEnglish: function (value) {
        return /^[a-zA-Z]*$/.test(value)
    },
    _isEnAndNo: function (value) {
        //4~30位数字和字母组合
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,30}$/.test(value);
    },
    _isEnOrNo: function (value) {
        let reg = /^[A-Za-z0-9]+$/;
        return reg.test(value)
    },
    _isSpecial: function (value) {
        //是否包含特殊字符
        let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
            regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
        if (regEn.test(value) || regCn.test(value)) {
            return true;
        }
        return false;
    },
    _isEmoji: function (value) {
        //是否包含表情
        return /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g.test(value);
    },
    _isDate: function (value) {
        //2019-10-12
        const reg =
            /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
        return reg.test(value);
    },
    _isUrl: function (value) {
        return /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})(:[0-9]{1,5})?((\/?)|(\/[\\\w_!~*\\'()\\\.;?:@&=+$,%#-]+)+\/?)$/
            .test(value);
    },
    _isSame: function (value1, value2) {
        return value1 === value2
    },
    _isRange: function (value, range1, range2) {
        if ((!range1 && range1 != 0) && (!range2 && range2 != 0)) {
            return true;
        } else if (!range1 && range1 != 0) {
            return value <= range2
        } else if (!range2 && range2 != 0) {
            return value >= range1
        } else {
            return value >= range1 && value <= range2
        }
    },
    _minLength: function (value, min) {
        return value.length >= Number(min)
    },
    _maxLength: function (value, max) {
        return value.length <= Number(max)
    },
    _isKeyword: function (value, keywords) {
        //是否包含关键词，敏感词，多个以英文逗号分隔，包含则为false,弹出提示语！
        let result = true;
        if (!keywords) return result;
        let key = keywords.split(',');
        for (let i = 0, len = key.length; i < len; i++) {
            if (~value.indexOf(key[i])) {
                result = false;
                break;
            }
        }
        return result;
    }
}
/**
 * 表单验证
 **/

const form = {
    /*
      非必填情况下，如果值为空则不进行校验
    */
    validator: <T>(formData: T, rules: IFormRule[]) => {

        let result = {
            isPassed: true,
            errorMsg: ''
        };
        for (let item of rules) {
            const key = item.name;
            const rule = item.rule || [];
            const validator = item.validator || [];
            const msgArr = item.msg || [];
            const ruleLen = rule.length;
            const validatorLen = validator.length;

            if (!key || (ruleLen === 0 && validatorLen === 0) || (!~rule.indexOf("required") &&
                formData[key]?.toString()
                    .length === 0)) {
                continue;
            }

            if (ruleLen) {
                for (let i = 0; i < ruleLen; i++) {
                    let ruleItem = rule[i];
                    let msg = msgArr[i] || `${key} error !`;
                    if (!ruleItem) continue;
                    //数据处理
                    let value = null;
                    if (~ruleItem.indexOf(":")) {
                        let temp = ruleItem.split(":");
                        ruleItem = temp[0];
                        value = temp[1];
                    }
                    let isError = false;
                    switch (ruleItem) {
                        case "required":
                            isError = ruleFuctions._isNullOrEmpty(formData[key]);
                            if (Array.isArray(formData[key])) {
                                console.log(formData[key].length);
                                isError = formData[key].length === 0
                            }
                            break;
                        case "isMobile":
                            isError = !ruleFuctions._isMobile(formData[key]);
                            break;
                        case "isEmail":
                            isError = !ruleFuctions._isEmail(formData[key]);
                            break;
                        case "isCarNo":
                            isError = !ruleFuctions._isCarNo(formData[key]);
                            break;
                        case "isIdCard":
                            isError = !ruleFuctions._isIdCard(formData[key]);
                            break;
                        case "isAmount":
                            isError = !ruleFuctions._isAmount(formData[key]);
                            break;
                        case "isNumber":
                            isError = !ruleFuctions._isNumber(formData[key]);
                            break;
                        case "isChinese":
                            isError = !ruleFuctions._isChinese(formData[key]);
                            break;
                        case "isNotChinese":
                            isError = !ruleFuctions._isNotChinese(formData[key]);
                            break;
                        case "isEnglish":
                            isError = !ruleFuctions._isEnglish(formData[key]);
                            break;
                        case "isEnAndNo":
                            isError = !ruleFuctions._isEnAndNo(formData[key]);
                            break;
                        case "isEnOrNo":
                            isError = !ruleFuctions._isEnOrNo(formData[key]);
                            break;
                        case "isSpecial":
                            isError = ruleFuctions._isSpecial(formData[key]);
                            break;
                        case "isEmoji":
                            isError = ruleFuctions._isEmoji(formData[key]);
                            break;
                        case "isDate":
                            isError = !ruleFuctions._isDate(formData[key]);
                            break;
                        case "isUrl":
                            isError = !ruleFuctions._isUrl(formData[key]);
                            break;
                        case "isSame":
                            //@ts-ignore
                            isError = !ruleFuctions._isSame(formData[key], formData[value]);
                            break;
                        case "range":
                            let range = null;
                            range = JSON.parse(value!);
                            isError = !ruleFuctions._isRange(formData[key], range[0], range[1])
                            break;
                        case "minLength":
                            isError = !ruleFuctions._minLength(formData[key], value)
                            break;
                        case "maxLength":
                            isError = !ruleFuctions._maxLength(formData[key], value)
                            break;
                        case "isKeyword":
                            isError = !ruleFuctions._isKeyword(formData[key], value)
                            break;
                        case "isArrayHaveValue":
                            isError = !ruleFuctions._isArrHaveValue(formData[key], value)
                            break;
                        default:
                            break;
                    }

                    if (isError) {
                        result.isPassed = false;
                        result.errorMsg = msg;
                        return result;
                    }
                }
            }

            if (validatorLen) {
                for (let model of validator) {
                    let func = model.method;
                    //@ts-ignore
                    if (func && !func(formData[key])) {
                        result.isPassed = false;
                        result.errorMsg = model.msg || `${key} error !`;
                        return result;
                    }
                }
            }
        }
        return result;
    },

};
interface IValidatorRes {
    errorMsg: string
    isPassed: boolean
}

/**
 * 使用表单校验
 * @param errorCallBack 
 * @returns 
 */
export const useValidator = (errorCallBack?: ((errorMsg: string) => void) | ((errorMsg: string) => Promise<void>)) => {
    const check = <T>(formModel: T, rules: IFormRule[]): IValidatorRes => {

        let result: IValidatorRes = form.validator(formModel, rules)
        if (result.isPassed) return result
        errorCallBack && errorCallBack(result.errorMsg)
        throw new Error(result.errorMsg);
    }
    return { check, rules: TRuleEnum }
}

