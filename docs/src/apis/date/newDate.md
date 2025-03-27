<script setup lang="ts">
    /** 方法描述 */
const methodDescription="创建Date对象，解决ios端以xxxx-xx-xx格式创建日期时为NaN的问题"
/** 添加版本 */
const addVersion="1.0.0"
</script>



# newDate

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.newDate("2022-01-02 14:22:22"));
// => Sun Jan 02 2022 14:22:22 GMT+0800 (中国标准时间)
```

### 类型定义

```typescript
/**
 * 
 * @param string 字符串日期 xxxx-xx-xx格式
 * @returns 
 */
const newDate: (string: string) => Date
```
