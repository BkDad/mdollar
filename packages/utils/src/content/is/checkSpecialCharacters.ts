/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 14:29:24
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 14:51:50
 */
/**
 * 判断是否有特殊字符
 * @param str 传入string类型的变量
 * @returns 返回boolean
 */
 export const checkSpecialCharacters = (str: string) => {
    var patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
    if (patrn.test(str)) {// 如果包含特殊字符返回false
        return true;
    }
    return false;
}
