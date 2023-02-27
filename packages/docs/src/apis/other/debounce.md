<script setup lang="ts">
    /** 方法描述 */
const methodDescription="函数防抖"
/** 添加版本 */
const addVersion="1.0.5"
</script>

# debounce

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

::: code-group

```typescript [vue2-optionsApi使用]
<script lang="ts">
import { debounce } from "mdollar";
export default {
  data() {
    return {
    };
  },
  methods: {
    testFnc: debounce(
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
import { debounce } from "mdollar";
const testFnc = debounce(() => {
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
 * 函数防抖
 * @param fn 防抖方法
 * @param time 间隔时间
 * @param config 配置 {first：首次点击是否执行 end：时间结束后是否执行} 
 * 默认{ first: true, end: false }
 * @returns 
 */
const debounce: (fn: () => void, time?: number, config?: {
    first?: boolean;
    end?: boolean;
}) => (this: unknown) => void
```
