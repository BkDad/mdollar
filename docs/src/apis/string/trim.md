<script setup lang="ts">
    /** 方法描述 */
const methodDescription="去除左右空格"
/** 添加版本 */
const addVersion="1.0.2"
</script>



# trim

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
 console.log($$.trim(" mdollar"));
// => mdollar
 console.log($$.trim(" mdollar     "));
// => mdollar
```

### 类型定义

```typescript
/**
 * @desc 去左右空格
 * @paramvalue 需要处理的字符串
 **/
const trim: (value: string) => string
```
