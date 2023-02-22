<script setup lang="ts">
    /** 方法描述 */
const methodDescription="去所有空格"
/** 添加版本 */
const addVersion="1.0.2"
</script>



# trimAll

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
 console.log($$.trim(" mdollar"));
// => mdollar
 console.log($$.trim(" mdoll  ar     "));
// => mdollar
```

### 类型定义

```typescript
/**
 * @paramvalue 需要处理的字符串
 **/
const trimAll: (value: string) => string
```
