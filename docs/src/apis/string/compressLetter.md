<script setup lang="ts">
    /** 方法描述 */
const methodDescription="把连续出现多次的字母字符串进行压缩。"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# compressLetter

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.compressLetter("aaabbbbcccccd"));
// => 3a4b5cd
```

### 类型定义

```typescript
/**
 * 把连续出现多次的字母字符串进行压缩。
 * @param value 需要压缩的字符串
 * @param ignoreCase 是否忽略大小写
 */
const compressLetter: (value: string, ignoreCase: boolean) => string;
```
