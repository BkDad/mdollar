/**
 * 函数防抖
 * @param fn 防抖方法
 * @param time 间隔时间
 * @param config 配置 {first：首次点击是否执行 end：时间结束后是否执行}
 * @returns 
 */
export const debounce = (fn: () => void, time = 500, config: { first?: boolean, end?: boolean } = { first: true, end: false }) => {
    let timeout: number | null = null;
    if (typeof fn !== 'function') {
        throw new TypeError('类型错误，传入函数不是一个方法')
    }
    return function (this: unknown) {
        if (config.first && !timeout) fn.call(this)
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            config.end && fn.call(this)
            timeout = null
        }, time);
    };
}