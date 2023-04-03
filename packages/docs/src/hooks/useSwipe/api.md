<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 18:37:51
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 19:50:35
-->
<script setup lang="ts">
  import Demo1 from "./Demo1.vue"
    /** 方法描述 */
const methodDescription="一个可以帮你在移动端监听容器用户左右滑动的hooks"
/** 添加版本 */
const addVersion="1.0.9"

</script>

# useSwipe

{{methodDescription}}

### 添加版本

{{addVersion}}

#### 示例

---

<Demo1/>

---

::: code-group

```typescript [基本使用]
<script lang="ts" setup>
import { useSwipe } from "mdollar/src/hooks";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const divRef = ref();
useSwipe(divRef, (status) => {
  if (status === "left") {
    ElMessage({ type: "success", message: "妈妈呀，我被左滑了" });
  }
  if (status === "right") {
    ElMessage({ type: "success", message: "妈妈呀，我被右滑了" });
  }
});
</script>
<template>
  <div class="hoverContaier" ref="divRef">
    控制台中调成手机模式滑我
  </div>
</template>
<style lang="scss" scoped>
.hoverContaier {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
}
</style>


```

:::

### 类型定义

```typescript
/**
 * 监听左右滑动
 * @param element 元素ref
 * @param callback 回调事件
 * @returns
 */
const useSwipe: (ref: Ref<HTMLDivElement | null>, callback: SwipeCallback) => void
```
