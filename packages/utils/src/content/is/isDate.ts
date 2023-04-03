export const isDate = (value: any) => {
    // 使用Date.parse函数和isNaN函数来判断是否为日期或者日期字符串
    return !isNaN(Date.parse(value));
  };