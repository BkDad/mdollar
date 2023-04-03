// isUrl
const isUrl = (value: string) => {
    // 使用正则表达式来匹配网址的格式
    const urlRegex = /^(http(s?):\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}([/?].*)?$/;
    return urlRegex.test(value);
};