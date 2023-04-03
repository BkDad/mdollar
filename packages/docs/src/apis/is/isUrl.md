<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为一个链接"
/** 添加版本 */
const addVersion="1.0.9"
</script>

# isUrl

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isUrl(""));
// => false
console.log($$.isUrl("https://www.baidu.com"));
// => true
console.log($$.isUrl("http://www.baidu.com"));
// => true
```

### 类型定义

```typescript
/**
 * 判断是否为链接
 * value:链接
 */
const isUrl: (value: string) => boolean;
```
