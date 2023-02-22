<script setup lang="ts">
    /** 方法描述 */
const methodDescription="根据某字段删除数组中的对象"
/** 添加版本 */
const addVersion="1.0.0"
</script>


# deleteArrElement

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
const arr = [{ name: "徐江", type: 1 },{ name: "高启强", type: 1 },]
console.log($$.deleteArrElement(arr, "type", 1));
// => [{"name":"高启强","type":1}]
```

### 类型定义

```typescript
/**根据某字段删除数组中的对象
 * 
 * @param arr 传入数组
 * @param fieldName 需要根据哪个字段名删除
 * @param fieldValue 字段值是多少
 * @returns 返回一个新数组
 */
const deleteArrElement: <T>(arr: T[], fieldName: string, fieldValue: string | number) => T[]
```
