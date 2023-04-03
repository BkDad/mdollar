<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为邮箱"
/** 添加版本 */
const addVersion="1.0.9"
</script>

# isEmail

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isEmail("mdollar"));
// => false
console.log($$.isEmail("18888888888@163.com"));
// => true
console.log($$.isEmail("1888888888@qq.com"));
// => true
```

### 类型定义

```typescript
/**
 * 判断是否为油箱
 * @param value 邮箱号
 * @returns
 */
const isEmail: (value: string) => boolean;
```
