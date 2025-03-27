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