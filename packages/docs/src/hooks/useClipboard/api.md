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
const methodDescription="一个可以实现帮助用户复制粘贴的hooks"
/** 添加版本 */
const addVersion="1.0.9"

</script>

# useClipboard

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
import { useClipboard } from "mdollar";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const inputValue = ref();
const { copyText, copiedText } = useClipboard();
const handleCopy = () => {
  copyText({
    text: inputValue.value,
    success: () => ElMessage({ message: "复制成功", type: "success" }),
    fail: () => ElMessage({ message: "复制失败", type: "error" }),
  });
};
</script>
<template>
  <div style="display: flex;gap: 12px;">
    <el-input
      style="width: 200px;"
      type="text"
      v-model="inputValue"
      placeholder="请输入"
    />
    <el-button @click="handleCopy" type="primary">复制</el-button>
  </div>
  <div style="margin-top: 12px;">当前复制值:{{ copiedText || "无" }}</div>
</template>
<style lang="scss" scoped></style>


```

:::

### 类型定义

```typescript
/**
 * 复制到剪切板hooks
 */
const useClipboard: () => {
  // copyText：复制文本值到剪切板
  copyText: (options: {
    text: string;
    success?: () => void;
    fail?: () => void;
  }) => Promise<void>;
  // copiedText：当前复制文本
  copiedText: Ref<string>;
  // copyError：复制失败的错误信息
  copyError: Ref<string | null>;
};
```
