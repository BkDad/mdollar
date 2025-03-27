<script setup lang="ts">
    /** 方法描述 */
const methodDescription="判断对象是否为空"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# objIsNull

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
  const objcet = { age: 11, name: "mdollar" };
  let result = $$.objIsNull(objcet);
// => false
```
```typescript
  const objcet = { };
  let result = $$.objIsNull(objcet);
// => true
```

```typescript
const arr = [{ age: 11, name: "mdollar" }];
let result = $$.objIsNull(arr);
// => false
```

### 类型定义

```typescript
/**
 * 判断对象是否为空
 * @param obj 传入的对象
 * @returns 
 */
const objIsNull: <T>(obj: T) => boolean
```
