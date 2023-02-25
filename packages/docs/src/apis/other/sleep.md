<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 15:08:43
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 15:19:41
-->
<script setup lang="ts">
    /** 方法描述 */
const methodDescription="等待多少毫秒再执行 ，同步阻塞"
/** 添加版本 */
const addVersion="1.0.4"
</script>

# sleep

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
$$.sleep(500);
console.log("hello world");
// 500毫秒后打印
// => hello world
```

### 类型定义

```typescript
/**
 * 等待多少毫秒再执行 ，同步阻塞
 * @param {String} millisecond 毫秒
 **/
const sleep: (millisecond: number) => void;
```
