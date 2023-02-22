<script setup lang="ts">
    /** 方法描述 */
const methodDescription="根据相同字段名将对象进行分组"
/** 添加版本 */
const addVersion="1.0.0"
</script>



# sortClass

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
const arr = [{ name: "王小虎", type: 1 }, { name: "徐江", type: 2 }, { name: "高启强", type: 1 }]
console.log($$.sortClass(arr, "type"));
// => [[{"name":"王小虎","type":1},{"name":"高启强","type":1}],[{"name":"徐江","type":2}]]
```

### 类型定义

```typescript
/**
    * 根据字段名将对象进行分组
    * @param arr 泛型对象数组
    * @param fields 字段名
    * @returns 返回T[][]
    */
const sortClass: <T>(arr: T[], field: string) => T[][]
```
