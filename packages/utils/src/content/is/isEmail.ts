export const isEmail = (value: string) => {
    // 使用正则表达式来匹配电子邮件地址的格式
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
};