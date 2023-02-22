<script setup lang="ts">
    /** 方法描述 */
const methodDescription="此方法用于深拷贝，将引用类型重新拷贝"
/** 添加版本 */
const addVersion="1.0.0"
</script>



# deepCopy

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
var objects = [{ a: 1 }, { b: 2 }];
var deep = $$.deepCopy(objects);
console.log(deep[0] === objects[0]);
// => false
```

### 类型定义

```typescript
/**
 * 深拷贝
 * @param value 拷贝值
 * @returns
 */
const deepCopy: <T>(value: T) => T;
```
