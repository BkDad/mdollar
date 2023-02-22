<script setup lang="ts">
    /** 方法描述 */
const methodDescription="金额转会计格式，带逗号分割"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# toThousandsFormates

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.toThousandsFormates("-500"));
// => -500.00
console.log($$.toThousandsFormates("4800"));
// => 4,800.00
```

### 类型定义

```typescript
/**
 * 金额转会计格式，带逗号分割
 * @param num 金额，string或者numbber类型
 * @returns
 */
const toThousandsFormates: (num: string | number) => string;
```
