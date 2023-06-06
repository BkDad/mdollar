<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 13:13:00
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 15:26:35
-->

# 更新日志

[[toc]]

### v1.1.1

---

- 部分hooks支持在vue2中使用
- 解决vue2控制台中警告vue中没有导出部分api的问题

### v1.0.9

---

- 原 arrayHaveValue 改为 arrayHasValue，对判断逻辑稍作调整
- deepCpopy函数递归逻辑优化，原for in 改为 Object.entries
- 新增函数 [isFunction](../apis/is/isFunction.md)
- 新增函数 [isUrl](../apis/is/isUrl.md)
- 新增函数 [isEmail](../apis/is/isEmail.md)
- 新增函数 [isNumber](../apis/is/isNumber.md)
- 新增函数 [isObject](../apis/is/isObject.md)
- 新增函数 [isPalindrome](../apis/is/isPalindrome.md)
- 新增函数 [isDate](../apis/is/isDate.md)
- 新增 hooks [useClipboard](../hooks/useClipboard/api.md)
- 新增 hooks [useHover](../hooks/useHover/api.md)
- 新增 hooks [useOnlineStatus](../hooks/useOnlineStatus/api.md)
- 新增 hooks [useSwipe](../hooks/useSwipe/api.md)

### v1.0.5

---

- 修复 string 模块缺失
- 新增函数防抖 [debounce](../apis/other/debounce.md)
- 新增函数节流 [throttle](../apis/other/throttle.md)
- 新增 hooks [useUrlParams](../hooks/useUrlParams/api.md)
- 新增 hooks [useElementPlusTheme](../hooks/useElementPlusTheme/api.md)

### v1.0.4

---

- 新增阻塞函数 [sleep](../apis/other/sleep)
- 新增数字转中文函数 [numberToChinese](../apis/number/numberToChinese)
- 新增 hooks
- 引入的方法鼠标悬停支持方法及参数提示

### v1.0.3

---

- 解决 在 uniapp+vite3 环境下引入需要加上/dist/index 问题
