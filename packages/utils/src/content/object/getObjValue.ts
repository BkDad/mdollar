export const getObjValue = (obj: { [key: string | number]: any }, key: string) => {
    const keyList = key.split(".");
    return keyList.reduce((acc, cur) => {
        if (!acc) return undefined;
        return acc[cur];
    }, obj);
}