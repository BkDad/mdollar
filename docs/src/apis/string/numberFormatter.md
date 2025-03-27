<script setup lang="ts">
    /** 方法描述 */
const methodDescription="隐藏手机号码中间四位"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# numberFormatter

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.numberFormatter("15867356666"));
// => 158****6666
console.log($$.numberFormatter("155678"));
// => 155678
```

### 类型定义

```typescript
/**
 * @desc 隐藏手机号码中间四位
 * @param {String} num 手机号码
 **/
const numberFormatter: (num: string) => string;
```
