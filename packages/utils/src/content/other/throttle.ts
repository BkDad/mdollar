/**
 * 函数节流
 * @param fn 节流方法
 * @param time 间隔时间
 * @param config 配置 {first：首次点击是否执行 end：时间结束后是否执行}
 * @returns 
 */
export const throttle = (fn: () => void, time = 500, config: { first?: boolean, end?: boolean } = { first: true, end: false }) => {
    let canRun: boolean = true;
    if (typeof fn !== 'function') {
        throw new TypeError('类型错误，传入函数不是一个方法')
    }
    return function (this: unknown) {
        if (config.first && canRun) fn.call(this)
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            config.end && fn.call(this)
            canRun = true;
        }, time);
    };
}