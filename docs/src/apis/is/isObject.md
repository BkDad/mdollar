<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为对象"
/** 添加版本 */
const addVersion="1.0.9"
</script>

# isObject

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isObject("mdollar"));
// => false
console.log($$.isObject({}));
// => true
console.log($$.isObject(function() {}));
// => false
```

### 类型定义

```typescript
/**
 * 判断是否为对象
 * @param value 传入值
 * @returns
 */
const isObject: (value: any) => boolean
```
