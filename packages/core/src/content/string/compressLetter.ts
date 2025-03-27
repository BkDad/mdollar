/**
 * 把连续出现多次的字母字符串进行压缩。aaabbbbcccccd=>3a4b5cd
 * @param value 需要压缩的字符串
 * @param ignoreCase 是否忽略大小写
 */
export const compressLetter = (value: string, ignoreCase?: boolean) => {
    let pattern = new RegExp("([a-zA-Z])\\1+", ignoreCase ? "ig" : "g");
    return value.replace(pattern, (matchStr, group_1) => matchStr.length + group_1);
}