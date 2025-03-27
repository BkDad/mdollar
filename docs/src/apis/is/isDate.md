<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断是否为日期"
/** 添加版本 */
const addVersion="1.0.9"
</script>

# isDate

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.isDate("mdollar"));
// => false
console.log($$.isDate("2022-01-02"));
// => true
console.log($$.isDate(new Date()));
// => true
console.log($$.isDate(new Date("aaaa")));
// => false
```

### 类型定义

```typescript
/**
 * 判断是否为日期
 * @param value 传入值
 * @returns
 */
const isDate: (value: any) => boolean
```
