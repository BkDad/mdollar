<script setup lang="ts">
    /** 方法描述 */
const methodDescription="根据日期获取距离当前时间时长"
/** 添加版本 */
const addVersion="1.0.0"
</script>



# friendlyFormatTime

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.friendlyFormatTime("2023-02-20 14:45:22"));
// => 8分钟前
```

### 类型定义

```typescript
/**
 * 根据日期获取距离当前时间时长，动态显示距离目前多久
 * @param stringTime 字符串日期 xxxx-xx-xx格式
 * @returns 
 */
const friendlyFormatTime: (stringTime: string) => string | number | undefined
```
