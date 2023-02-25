/**
 * 判断是否为视频
 * @param fileName 文件名称
 * @returns 
 */
 export const isVedio = (fileName: string) => {
    const ext = fileName.substring(fileName.lastIndexOf("."))
    return [".mp4", ".avi", "wmv", "mov"].indexOf(ext.toLowerCase()) !== -1;
}