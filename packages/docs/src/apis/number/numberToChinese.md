<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 15:17:11
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 15:22:08
-->
<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 15:08:43
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 15:09:02
-->
<script setup lang="ts">
    /** 方法描述 */
const methodDescription="数字转汉字显示"
/** 添加版本 */
const addVersion="1.0.4"
</script>

# numberToChinese

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log(numberToChinese(500));
// => 五百
console.log(numberToChinese(631));
// => 六百三十一
console.log(numberToChinese(1000));
// => 一千
```

### 类型定义

```typescript
/**
 * 数字转中文显示
 * @param num 数字
 * @returns
 */
const numberToChinese: (num: number) => string;
```
