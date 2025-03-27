/**
 * @desc 去左右空格
 * @paramvalue 需要处理的字符串
 **/
export const trim = (value: string) => value.replace(/(^\s*)|(\s*$)/g, "");