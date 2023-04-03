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
