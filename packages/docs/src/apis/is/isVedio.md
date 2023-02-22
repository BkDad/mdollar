<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为视频"
/** 添加版本 */
const addVersion="1.0.0"
</script>



# isVedio

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isImage("mdollar.mp4"));
// => true
console.log($$.isImage("mdollar.avi"));
// => true
console.log($$.isImage("mdollar.jpg"));
// => false
```

### 类型定义

```typescript
/**
 * 判断是否为视频
 * @param fileName 文件名称
 * @returns 
 */
const isVedio: (fileName: string) => boolean
```
