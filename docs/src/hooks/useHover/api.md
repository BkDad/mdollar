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
const methodDescription="一个可以帮你监听容器是否被hover的hooks"
/** 添加版本 */
const addVersion="1.0.9"

</script>

# useHover

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
import { useHover } from "mdollar";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const divRef = ref();
const { onHoverChange, isHovering } = useHover(divRef);
onHoverChange((status) => {
  status
    ? ElMessage({ type: "success", message: "感觉有什么奇怪的东西摸到了我" })
    : ElMessage({ type: "warning", message: "感觉有什么奇怪的东西离开了我" });
});
</script>
<template>
  <div class="hoverContaier" ref="divRef">
    {{ isHovering ? "leave me" : "hover me" }}
  </div>
</template>
<style lang="scss" scoped>
.hoverContaier {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #eee;
}
</style>


```

:::

### 类型定义

```typescript
/**
 * 监听元素hover状态
 * @param element 元素ref
 * @returns
 */
const useHover: (
  element: Ref<HTMLElement>
) => {
  // 当前hover状态
  isHovering: Ref<boolean>;
  // hover状态改变回调
  onHoverChange: (callback: (value: boolean) => void) => void;
};
```
