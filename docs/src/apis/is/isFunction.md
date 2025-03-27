<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为方法"
/** 添加版本 */
const addVersion="1.0.9"
</script>

# isFunction

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isFunction("mdollar"));
// => false
console.log($$.isFunction(null));
// => false
console.log($$.isFunction(function() {}));
// => true
console.log($$.isFunction(() => {}));
// => true
```

### 类型定义

```typescript
/**
 * 判断是否为方法
 * @param value 传入值
 * @returns 
 */
const isFunction: (value: any) => boolean
```
