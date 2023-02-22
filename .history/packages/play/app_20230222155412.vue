<script lang="ts" setup>
import $$ from "./mdollar/utils/src/index";
import { onMounted, reactive } from "vue";
const state = reactive({
  result: undefined as any,
});
onMounted(() => {
  const object = [{ age: 11, name: "wz" }];
  let result = $$.deepCopy(object);
  state.result = result;
});
</script>
<template>
  <div class="contaier">
    <div>输出结果</div>
    <div>{{ JSON.stringify(state.result) || "无" }}</div>
  </div>
</template>
<style lang="scss" scoped>
.contaier {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
