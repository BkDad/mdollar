<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为数字"
/** 添加版本 */
const addVersion="1.0.9"
</script>

# isNumber

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isNumber(0));
// => true
console.log($$.isNumber(NaN));
// => true
console.log($$.isNumber("a"));
// => false
console.log($$.isNumber("0"));
// => true
```

### 类型定义

```typescript
/**
 * 判断是否为数字
 * @param value 传入值
 * @returns
 */
const isNumber: (value: any) => boolean;
```
