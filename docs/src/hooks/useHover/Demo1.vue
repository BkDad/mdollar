<script lang="ts" setup>
import { useHover } from "mdollar/src/hooks";
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
