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