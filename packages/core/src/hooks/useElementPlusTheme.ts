/** 变量前缀 */
const PRE = '--el-color-primary'
const PRE_LIGHT = `${PRE}-light`
const PRE_DARK = `${PRE}-dark`

const html = document.documentElement
/**
 * 混合颜色
 */
const mix = (color1: string, color2: string, weight: number) => {
    weight = Math.max(Math.min(Number(weight), 1), 0)
    const r1 = parseInt(color1.substring(1, 3), 16)
    const g1 = parseInt(color1.substring(3, 5), 16)
    const b1 = parseInt(color1.substring(5, 7), 16)
    const r2 = parseInt(color2.substring(1, 3), 16)
    const g2 = parseInt(color2.substring(3, 5), 16)
    const b2 = parseInt(color2.substring(5, 7), 16)
    const r = Math.round(r1 * (1 - weight) + r2 * weight)
    const g = Math.round(g1 * (1 - weight) + g2 * weight)
    const b = Math.round(b1 * (1 - weight) + b2 * weight)
    const _r = ('0' + (r || 0).toString(16)).slice(-2)
    const _g = ('0' + (g || 0).toString(16)).slice(-2)
    const _b = ('0' + (b || 0).toString(16)).slice(-2)
    return '#' + _r + _g + _b
}

/**
 * 更换颜色的方法
 * @param color 颜色
 */
const changeTheme = (color?: string) => {
    if (!color) return
    // 设置主要颜色
    html.style.setProperty(PRE, color)
    // 循环设置次级颜色
    for (let i = 1; i < 10; i += 1) {
        html.style.setProperty(`${PRE_LIGHT}-${i}`, mix(color, "#ffffff", i * 0.1))
    }
    // 设置主要暗色
    const dark = mix(color, "#000000", 0.2)
    html.style.setProperty(`${PRE_DARK}-2`, dark)
}

/**
 * 动态更改element-plus主题
 * @param color 切换颜色
 * @returns 
 */
export const useElementPlusTheme = (color?: string) => {
    changeTheme(color)
    return {
        changeTheme
    }
}
