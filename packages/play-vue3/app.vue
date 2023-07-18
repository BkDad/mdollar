<script lang="ts" setup>
import { useValidator } from "mdollar/src/hooks/useValidator";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const inputValue = ref();
const validate = useValidator((msg) => alert(msg));

const test = () => {
  validate.check({ imgList: [] }, [
    { msg: ["66666"], rule: [validate.rules.required], name: "imgList" },
  ]);
};
</script>
<template>
  <div style="display: flex;gap: 12px;">
    <button @click="test">123123123</button>
  </div>
</template>
<style lang="scss" scoped></style>
