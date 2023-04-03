<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为回文字符串"
/** 添加版本 */
const addVersion="1.0.9"
</script>

# isPalindrome

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isPalindrome("1"));
// => true
console.log($$.isPalindrome("121"));
// => true
console.log($$.isPalindrome("123"));
// => false
```

### 类型定义

```typescript
/**
 * 判断是否为回文字符串
 * @param value 传入值
 * @returns
 */
const isPalindrome: (value: string) => boolean;
```
