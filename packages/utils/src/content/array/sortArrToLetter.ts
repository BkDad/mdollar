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