<script setup lang="ts">
    /** 方法描述 */
const methodDescription="数组按字母进行排序"
/** 添加版本 */
const addVersion="1.0.0"
</script>



# sortArrToLetter

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
const arr = [{ name: "浙江省", code:"001" },{ name: "安徽省", code: "002"},{name:"黑龙江",code:"003"}]
console.log($$.sortArrToLetter(arr, "name"));
// => [{"name":"安徽省","code":"002"},{"name":"黑龙江","code":"003"},{"name":"浙江省","code":"001"}]
```

### 类型定义

```typescript
/**
 * 数组按字母进行排序
 * @param array 
 * @param fields 
 * @returns 
 */
const sortArrToLetter: <T>(array: T[], fields: string) => T[]
```
