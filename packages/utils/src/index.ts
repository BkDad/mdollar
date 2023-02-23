/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-10-17 14:25:51
 * @LastEditors: 万洲
 * @LastEditTime: 2022-12-12 16:12:32
 */
import * as arrary from "./arrary"
import * as business from "./business"
import * as is from "./is"
import * as object from "./object"
import * as string from "./string"
import * as date from "./date"

// 全量引入
const mdollar = { ...business, ...is, ...object, ...string, ...date, ...arrary, }
export type TMdollar = typeof mdollar
export default mdollar

// 支持按需引入
export * from "./arrary"
export * from "./business"
export * from "./is"
export * from "./object"
export * from "./string"
export * from "./date"


// npm publish --access=public 