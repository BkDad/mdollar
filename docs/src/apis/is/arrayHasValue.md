<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断数组中是否有值，防止arr为undefined时空指针错误"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# arrayHasValue

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.arrayHasValue([]));
// => false
console.log($$.arrayHasValue(undefined));
// => false
console.log($$.arrayHasValue([0, 1, 2]));
// => true
```

### 类型定义

```typescript
/**
 * 判断数组是否为空
 * @param arr 传入数组
 * @returns 
 */
const arrayHasValue: <T>(arr: T[] | undefined) => boolean
```
