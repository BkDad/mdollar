<!--
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-02-25 19:04:47
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 19:09:00
-->
<script lang="ts" setup>
import { IFormRule, useValidator } from "mdollar";
import { reactive } from "vue";

const state = reactive({
  formModel: {
    age: 18,
    name: "高启强",
    profile: "99年，喜欢吃鱼",
  },
});
const formController = useValidator((errorMsg) => alert(errorMsg));
const formRules: IFormRule[] = [
  { name: "age", msg: ["请输入年龄"], rule: [formController.rules.required] },
  { name: "name", msg: ["请输入姓名"], rule: [formController.rules.required] },
  { name: "profile", msg: ["简介不能少于10个字","简介不能大于30个字"], rule: [`${formController.rules.minLength}:10`,`${formController.rules.maxLength}:30`] },
];

const handleSubmit = () => {
  formController.check(state.formModel, formRules);
};
</script>
<template>
  <el-button type="primary" @click="handleSubmit">复杂校验</el-button>
</template>
<style lang="scss" scoped></style>
