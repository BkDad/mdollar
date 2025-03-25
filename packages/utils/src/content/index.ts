
/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 13:37:25
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 14:59:09
 */
import * as array from "./array"
import * as other from "./other"
import * as date from "./date"
import * as is from "./is"
import * as number from "./number"
import * as object from "./object"
import * as string from "./string"
export default { ...date, ...is, ...array, ...other, ...number, ...object, ...string, }

export * from "./array"
export * from "./other"
export * from "./date"
export * from "./is"
export * from "./number"
export * from "./object"
export * from "./string"