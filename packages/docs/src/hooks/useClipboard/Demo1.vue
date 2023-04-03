<script lang="ts" setup>
import { useClipboard } from "mdollar/src/hooks";
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
