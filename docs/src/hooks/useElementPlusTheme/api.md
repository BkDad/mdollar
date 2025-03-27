<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 18:37:51
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 19:50:35
-->
<script setup lang="ts">
    /** 方法描述 */
const methodDescription="一个帮你完成element-plus动态主题的hooks"
/** 添加版本 */
const addVersion="1.0.5"

</script>

# useElementPlusTheme

{{methodDescription}}

### 添加版本

{{addVersion}}

#### 示例

::: code-group

```typescript [基本使用]
<script lang="ts" setup>
import { useElementPlusTheme } from "mdollar";
import { reactive, watch } from "vue";
const { changeTheme } = useElementPlusTheme("#409eff");
const state = reactive({
  color: "#409eff",
});
watch(
  () => state.color,
  () => {
    changeTheme(state.color);
  }
);
</script>
<template>
  <el-button type="primary">
    主要按钮
  </el-button>
  <div style="margin-top: 10px;">
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
  </div>
  <div style="margin-top: 10px;">
    <el-color-picker v-model="state.color" />
  </div>
</template>

```

:::

### 类型定义

```typescript
/**
 * 动态更改element-plus主题
 * @param color 切换颜色
 * @returns
 */
const useElementPlusTheme: (
  color?: string
) => {
  changeTheme: (color?: string) => void;
};
```
