---
typora-root-url: ..
---

<script setup lang="ts">
    /** 方法描述 */
const methodDescription="递归拍平树状数组，返回扁平数组"
/** 添加版本 */
const addVersion="1.0.0"
</script>



# getFlatTree

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
const arr = [
    {
        name: "1", id: 1, parentID: 0,
        children: [
            { name: "1-1", id: 2, parentID: 1 },
            { name: "1-2", id: 3, parentID: 1 },
        ]
    },
]
console.log($$.getFlatTree(arr,"children"));
// => [{"name":"1","id":1,"parentID":0,"children":[{"name":"1-1","id":2,"parentID":1},{"name":"1-2","id":3,"parentID":1}]},{"name":"1-1","id":2,"parentID":1},{"name":"1-2","id":3,"parentID":1}]
```

### 类型定义

```typescript
/**
 * 树状结构拍平
 * @param children 
 * @returns 
 */
const getFlatTree: <T>(children: T[], childrenName?: string) => T[]
```
