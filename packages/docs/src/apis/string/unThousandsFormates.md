<script setup lang="ts">
    /** 方法描述 */
const methodDescription="会计金额格式转为普通数字"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# unThousandsFormates

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.unThousandsFormates("4,800.00"));
// => 4800
console.log($$.unThousandsFormates("6,668,998.00"));
// => 6668998
```

### 类型定义

```typescript
/**
 * 会计金额格式转为普通数字
 * @param num 数字
 * @returns
 */
const unThousandsFormates: (num: string) => number;
```
