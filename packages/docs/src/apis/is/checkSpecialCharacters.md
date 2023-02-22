<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否有特殊字符"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# checkSpecialCharacters

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.checkSpecialCharacters("abcd"));
// => false
console.log($$.checkSpecialCharacters("abcd！！！"));
// => true
console.log($$.checkSpecialCharacters("abcd@"));
// => true
```

### 类型定义

```typescript
/**
 * 判断是否有特殊字符
 * @param str 传入string类型的变量
 * @returns 返回boolean
 */
const checkSpecialCharacters: (str: string) => boolean;
```
