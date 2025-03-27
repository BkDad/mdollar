<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为图片"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# isImage

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isImage("mdollar.jpg"));
// => true
console.log($$.isImage("mdollar.png"));
// => true
console.log($$.isImage("mdollar.docx"));
// => false
```

### 类型定义

```typescript
/**
 * 判断是否为图片
 * @param fileName 文件名称
 * @returns
 */
const isImage: (fileName: string) => boolean;
```
