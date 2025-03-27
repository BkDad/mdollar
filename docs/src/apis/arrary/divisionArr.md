<script setup lang="ts">
    /** 方法描述 */
const methodDescription="此方法用于切割数组，将数组按照一个数字多等分"
/** 添加版本 */
const addVersion="1.0.0"
</script>



# divisionArr

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
var arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
var divisionArr = $$.divisionArr(arr);
console.log(divisionArr);
// => [[ { a: 1 }, { b: 2 } ] , [{ c: 3 }]]
```

### 类型定义

```typescript
/**
 * 根据指定长度分割数组
 * @param array 传入任意数组
 * @param subLength 需要分割的长度
 * @returns 返回一个新数组
 */
const divisionArr: <T>(array: T[], subLength: number) => T[][]
```
