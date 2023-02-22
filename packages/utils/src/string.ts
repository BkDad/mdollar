/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-10-17 15:09:06
 * @LastEditors: 万洲
 * @LastEditTime: 2022-11-04 17:27:05
 */
/**
 * 金额转会计格式，带逗号分割
 * @param num 金额，string或者numbber类型
 * @returns 
 */
export const toThousandsFormates = (num: string | number) => {
    if (typeof num === "number") num = `${num}`
    // 判断传进来的数字是否为非空数字
    if (!isNaN(parseFloat(num))) {
        var reg = /\./g;
        var newNum = Number(Number(num).toFixed(2)).toLocaleString();
        // 判断转换后的数字是否带有小数
        if (reg.test(newNum)) {
            var numArr = newNum.split(".");
            // 判断小数点后数字长度为1，则自动补0
            numArr[1] = numArr[1].length === 1 ? numArr[1] + "0" : numArr[1];
            return numArr.join(".");
        } else {
            // 整数直接在后面补上0.00
            return newNum + ".00";
        }
    } else {
        return "";
    }
};
/**
 * 会计金额格式转为普通数字
 * @param num 数字
 * @returns 
 */
export const unThousandsFormates = (num: string) => parseFloat(num.replace(/[^\d\\.-]/g, ""));
/**
* 随机生成字符串
* @param len 指定生成字符串长度，默认长度15
*/
export const getRandomString = (len: number = 15) => {
    function RandomIndex(min: any, max: any, i: any) {
        let index = Math.floor(Math.random() * (max - min + 1) + min),
            numStart = _charStr.length - 10;
        //如果字符串第一位是数字，则递归重新获取
        if (i == 0 && index >= numStart) {
            index = RandomIndex(min, max, i);
        }
        //返回最终索引值
        return index;
    }

    const _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
    let min = 0, max = _charStr.length - 1, _str = '';
    //判断是否指定长度，否则默认长度为15
    len = len || 15;
    //循环生成字符串
    for (var i = 0, index; i < len; i++) {
        index = RandomIndex(min, max, i);
        _str += _charStr[index];
    }
    return _str;
}


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

/**
 * 把连续出现多次的字母字符串进行压缩。aaabbbbcccccd=>3a4b5cd
 * @param value 需要压缩的字符串
 * @param ignoreCase 是否忽略大小写
 */
export const compressLetter = (value: string, ignoreCase?: boolean) => {
    let pattern = new RegExp("([a-zA-Z])\\1+", ignoreCase ? "ig" : "g");
    return value.replace(pattern, (matchStr, group_1) => matchStr.length + group_1);
}


/**
 * @desc 去左右空格
 * @paramvalue 需要处理的字符串
 **/
export const trim = (value: string) => value.replace(/(^\s*)|(\s*$)/g, "");


/**
 * @desc 去所有空格
 * @param {String} value 需要处理的字符串
 **/
export const trimAll = (value: string) => {
    return value.replace(/\s+/g, "")
}

/**
 * @desc 隐藏手机号码中间四位
 * @param {String} num 手机号码
 **/
export const numberFormatter = (num: string) => {
    return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2') : num;
}

/**
 * @desc 获取uuid
 */
export const getUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' as any | '0x8')).toString(16)
    })
}