<script lang="ts" setup>
import { IFormRule, useValidator } from "mdollar";
import { reactive } from "vue";

const state = reactive({
  formModel: {
    age: 18,
    name: undefined,
  },
});
const formController = useValidator((errorMsg) => alert(errorMsg));
const formRules: IFormRule[] = [
  { name: "age", msg: ["请输入年龄"], rule: [formController.rules.required] },
  { name: "name", msg: ["请输入姓名"], rule: [formController.rules.required] },
];

const handleSubmit = () => {
  formController.check(state.formModel, formRules);
};
</script>
<template>
  <el-button type="primary" @click="handleSubmit">基本校验</el-button>
</template>
<style lang="scss" scoped></style>
