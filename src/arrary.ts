import { cloneDeep } from "lodash"
/**
 * 深拷贝
 * @param value 拷贝值
 * @returns 
 */
export const deepCopy = <T>(value: T): T => cloneDeep(value)
/**
 * 
 * @param array 传入任意数组
 * @param subLength 需要分割的长度
 * @returns 返回一个新数组
 */
export const divisionArr = (array: any[], subLength: number) => {
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
export const deleteArrElement = (arr: any[], fieldName: string, fieldValue: string | number) => {
    let tempArr: any[] = JSON.parse(JSON.stringify(arr))
    let index = tempArr.findIndex(item => item[fieldName] === fieldValue)
    if (index === -1) return alert("未找到要删除数组")
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
            //@ts-ignore
            return param1[fields].localeCompare(param2[fields], "zh");
        }
    );
}
/**
 * 
 * @param ItemArr 对象数组
 * @param fields 获取哪个字段
 * @param separate 分隔符
 * @returns 返回用户列表名字名称
 */
export const ItemArrToName = <T>(ItemArr: T[], fields: string, separate: string = "-") => {
    if (!ItemArr || !ItemArr[0]) return;
    let result: string = "";
    ItemArr.forEach((item, index) => {
        if (!item[fields]) return
        result = `${result}${index !== 0 ? separate : ""}${item[fields]}`
    })
    return result;
};

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
export const listToTree = <T extends { parentID: number, children: T[] }>(list: T[], parentId: number, fields: string): T[] => {
    return list.filter((item) => {
        if (item.parentID === parentId) {
            item.children = listToTree(list, item[fields], fields);
            return true;
        }
        return false;
    });
};

