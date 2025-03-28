
/**
 * 对象转query格式
 * @param obj 对象
 * @param takeHead 返回头部中是否带 &
 * @returns 
 */
 export const mapObjectToQueryString = (obj: any, takeHead = true) => {
    var str = [];
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return `${takeHead ? "&" : ""}${str.join("&")}`
}
