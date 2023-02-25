/**
    * 根据字段名将对象进行分组
    * @param arr 泛型对象数组
    * @param fields 字段名
    * @returns 返回T[][]
    */
 export const sortClass = <T>(arr: T[], field: string) => Array.from(new Set(arr.map(item => item[field]))).map(fileditem => arr.filter(v => v[field] === fileditem))
