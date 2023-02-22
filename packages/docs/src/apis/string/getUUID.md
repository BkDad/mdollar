<script setup lang="ts">
    /** 方法描述 */
const methodDescription="获取uuid"
/** 添加版本 */
const addVersion="1.0.2"
</script>

# getUUID

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.getUUID());
// => f491a0b7-0632-4e1f-r&0x35b5-1ef61d9df2d8
```

### 类型定义

```typescript
/**
 * @desc 获取uuid
 */
const getUUID: () => string;
```
