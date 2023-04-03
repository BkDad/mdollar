<script lang="ts" setup>
import { useOnlineStatus } from "mdollar/src/hooks";
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
