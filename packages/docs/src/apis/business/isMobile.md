<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否在手机中打开"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# isMobile

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isMobile());
// => false
```

### 类型定义

```typescript

const isMobile: () => boolean
```
