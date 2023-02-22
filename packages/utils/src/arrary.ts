/**
 * 深拷贝
 * @param value 拷贝值
 * @returns 
 */
export const deepCopy = <T>(value: T): T => {
    // 数值为空直接返回
    if (value === undefined || value === null) return value
    // 如果不是对象或者数组直接返回
    if (typeof value !== "object") return value
    let result = Array.isArray(value) ? [] : {};
    //循环遍历方便拷贝
    for (let key in value) {
        //判读自有属性
        if ((value as any).hasOwnProperty(key)) {
            //函数递归实现深层拷贝
            result[key as string] = deepCopy(value[key])
        }
    }
    return result as T
}

/**
 * 根据指定长度分割数组
 * @param array 传入任意数组
 * @param subLength 需要分割的长度
 * @returns 返回一个新数组
 */
export const divisionArr = <T>(array: T[], subLength: number): T[][] => {
    let index = 0;
    let newArray = [];
    while (index < array.length) { newArray.push(array.slice(index, index += subLength)); }
    return newArray;
}
/**
    * 根据字段名将对象进行分组
    * @param arr 泛型对象数组
    * @param fields 字段名
    * @returns 返回T[][]
    */
export const sortClass = <T>(arr: T[], field: string) => Array.from(new Set(arr.map(item => item[field]))).map(fileditem => arr.filter(v => v[field] === fileditem))

/**根据某字段删除数组中的对象
     * 
     * @param arr 传入数组
     * @param fieldName 需要根据哪个字段名删除
     * @param fieldValue 字段值是多少
     * @returns 返回一个新数组
     */
export const deleteArrElement = <T>(arr: T[], fieldName: string, fieldValue: string | number): T[] => {
    let tempArr: any[] = JSON.parse(JSON.stringify(arr))
    let index = tempArr.findIndex(item => item[fieldName] === fieldValue)
    if (index === -1) return arr
    tempArr.splice(index, 1)
    return tempArr
}
/**
 * 数组按字母进行排序
 * @param array 
 * @param fields 
 * @returns 
 */
export const sortArrToLetter = <T>(array: T[], fields: string) => {
    return array.sort(
        function compareFunction(param1, param2) {
            return param1[fields].localeCompare(param2[fields], "zh");
        }
    );
}
/**
    * 搜索列表致使搜索字段名带高亮，只支持react，需配合dangerouslySetInnerHTML属性一起使用
    * dangerouslySetInnerHTML={{ __html: item[fields] }}
    * @param searchValue 搜索值
    * @param totalList 总列表
    * @param fields 要替换的字段名
    * @param color 颜色 默认#279EF3
    * @returns 返回替换掉的字段列表
    */
export const serarchLight = <T>(searchValue: string, totalList: T[], fields: string, color: string = "#279EF3") => {
    let totalListCopy = deepCopy(totalList)
    totalListCopy = totalListCopy.filter(v => v[fields].includes(searchValue))
    return totalListCopy.map(item => {
        var re = new RegExp(searchValue, "g"); //定义正则
        let val = `<span style="color:${color};">${searchValue}</span>`
        return { ...item, [fields]: item[fields].replace(re, val) } //进行替换，并定义高亮的样式
    })
}

/**
   * 列表转树
   * @param list 任意数组
   * @param parentId 父级id
   * @param fields 父级本身id
   * @returns 
   */
export const listToTree = <T extends { parentId: number, children: T[] }>(list: T[], parentId: number, fields: string): T[] => {
    return list.filter((item) => {
        if (item.parentId === parentId) {
            item.children = listToTree(list, item[fields], fields);
            return true;
        }
        return false;
    });
};

/**
 * 树状结构拍平
 * @param children 
 * @returns 
 */
export const getFlatTree = <T>(children: T[], childrenName: string = "children"): T[] => {
    return children.reduce((pre, cur) => {
        let childrenList = cur[childrenName] || []
        let result: any = [...pre, cur, ...getFlatTree(childrenList, childrenName)];
        return result;
    }, []);
};

