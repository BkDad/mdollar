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
const methodDescription="一个可以帮你监听用户是否在线的hooks"
/** 添加版本 */
const addVersion="1.0.9"

</script>

# useOnlineStatus

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
import { useOnlineStatus } from "mdollar";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const divRef = ref();
const { onOnlineChange, isOnline } = useOnlineStatus();
onOnlineChange((status) => {
  status
    ? ElMessage({ type: "success", message: "妈妈呀，我上线了" })
    : ElMessage({ type: "warning", message: "妈妈呀，我断线了" });
});
</script>
<template>
  <el-tag> 网络状态：{{ isOnline ? "在线" : "离线" }} </el-tag>
  <div style="margin-top: 12px;">
    提示：{{ isOnline ? "关闭" : "打开" }}网络试试
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
 * 监听用户在线状态
 * @returns
 */
const useOnlineStatus: () => {
  // 在线状态
  isOnline: Ref<boolean>;
  // 状态改变回调
  onOnlineChange: (callback: (value: boolean) => void) => void;
};
```
