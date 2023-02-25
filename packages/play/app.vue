<script lang="ts" setup>
import { IFormRule, useValidator } from "mdollar";
import { reactive, PropType } from "vue";

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
  <div class="contaier">
    <button @click="handleSubmit">校验</button>
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
