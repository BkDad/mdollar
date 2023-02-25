/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 13:30:11
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 13:31:52
 */
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