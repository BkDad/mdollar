<script setup lang="ts">
    /** 方法描述 */
const methodDescription="根据当前本地时间获取问候语"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# getTimeState

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
// 当前时间14：34
console.log($$.getTimeState());
// => 下午好
```

### 类型定义

```typescript
/**
 * 根据当前时间获取问候语
 * @returns 
 */
const getTimeState: () => string
```
