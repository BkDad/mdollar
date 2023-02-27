<script setup lang="ts">
    /** 方法描述 */
const methodDescription="函数节流"
/** 添加版本 */
const addVersion="1.0.5"
</script>

# throttle

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

::: code-group

```typescript [vue2-optionsApi使用]
<script lang="ts">
import { throttle } from "mdollar";
export default {
  data() {
    return {
    };
  },
  methods: {
    testFnc: throttle(
      function() {
        console.log("函数执行");
      },
      500,
      { first: true, end: false }
    ),
  },
};
</script>
<template>
  <button @click="testFnc">
    防抖
  </button>
</template>
```
```typescript [vue3-compositionApi使用]
<script lang="ts" setup>
import { throttle } from "mdollar";
const testFnc = throttle(() => {
  console.log("函数执行");
}, 500, { first: true, end: false });
</script>
<template>
  <button @click="testFnc">
    防抖
  </button>
</template>

```

:::

### 类型定义

```typescript
/**
 * 函数节流
 * @param fn 节流方法
 * @param time 间隔时间
 * @param config 配置 {first：首次点击是否执行 end：时间结束后是否执行} 
 * 默认{ first: true, end: false }
 * @returns 
 */
const throttle: (fn: () => void, time?: number, config?: {
    first?: boolean;
    end?: boolean;
}) => (this: unknown) => void
```
