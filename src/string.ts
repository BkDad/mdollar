/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-10-17 15:09:06
 * @LastEditors: 万洲
 * @LastEditTime: 2022-11-04 17:27:05
 */
/**
 * 带逗号分隔符
 * @param num 数字
 * @returns 
 */
export const toThousandsFormates = (num: string) => {
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
* @param len 指定生成字符串长度
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