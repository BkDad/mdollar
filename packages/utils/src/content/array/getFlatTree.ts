/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 13:29:58
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 13:32:26
 */
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

