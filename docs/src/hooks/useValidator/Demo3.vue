
<script lang="ts" setup>
import { IFormRule, useValidator } from "mdollar";
import { reactive } from "vue";

const state = reactive({
  formModel: {
    age: 18,
    name: "高启强",
    profile: "99999999999年，喜欢吃鱼",
    buy: "安欣",
  },
});
const formController = useValidator((errorMsg) => alert(errorMsg));
const formRules: IFormRule[] = [
  { name: "age", msg: ["请输入年龄"], rule: [formController.rules.required] },
  { name: "name", msg: ["请输入姓名"], rule: [formController.rules.required] },
  { name: "profile", msg: ["简介不能少于10个字", "简介不能大于30个字"], rule: [`${formController.rules.minLength}:10`, `${formController.rules.maxLength}:30`] },
  {
    name: "buy",
    msg: [],
    rule: [],
    validator: [
      {
        msg: "不是老默卖的我不吃！",
        method: () => {
          return state.formModel.buy === "老默";
        },
      },
    ],
  },
];

const handleSubmit = () => {
  formController.check(state.formModel, formRules);
};
</script>
<template>
  <el-button type="primary" @click="handleSubmit">自定义校验</el-button>
</template>
<style lang="scss" scoped></style>
