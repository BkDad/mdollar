/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 14:29:53
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 14:50:56
 */
/**
 * 判断是否为图片
 * @param fileName 文件名称
 * @returns 
 */
 export const isImage = (fileName: string) => {
    const ext = fileName.substring(fileName.lastIndexOf("."))
    return [".png", ".jpg", ".jpeg", ".bmp", ".gif", ".webp", ".svg", ".tiff"].indexOf(ext.toLowerCase()) !== -1;
}