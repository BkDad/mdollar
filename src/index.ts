/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2022-10-17 14:25:51
 * @LastEditors: 万洲
 * @LastEditTime: 2022-12-07 13:52:10
 */
import * as arrary from "./arrary"
import * as business from "./business"
import * as is from "./is"
import * as object from "./object"
import * as string from "./string"
import * as date from "./date"
const wzUtils = { ...business, ...is, ...arrary, ...object, ...string, ...date }
export default wzUtils
// npm publish --access=public 