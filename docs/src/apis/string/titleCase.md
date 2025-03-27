<script setup lang="ts">
    /** 方法描述 */
const methodDescription="英文首字母大写"
/** 添加版本 */
const addVersion="1.0.2"
</script>



# titleCase

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.titleCase("mdollar"));
// => Mdollar
```

### 类型定义

```typescript
/**
 * 英文首字母大写
 * @param value 传入值
 * @returns 
 */
const titleCase: (value: string) => string
```
