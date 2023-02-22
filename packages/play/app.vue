<script lang="ts" setup>
import $$ from "mdollar/src/index";
import { onMounted, reactive } from "vue";
const state = reactive({
  result: undefined as any,
});
onMounted(() => {
  const objcet = {};
  console.log($$.getUUID());
  let result = $$.checkSpecialCharacters("abcd！");
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
