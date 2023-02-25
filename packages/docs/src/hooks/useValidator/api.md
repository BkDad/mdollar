<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 18:37:51
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 19:50:35
-->
<script setup lang="ts">
  import Demo1 from "./Demo1.vue"
  import Demo2 from "./Demo2.vue"
  import Demo3 from "./Demo3.vue"
    /** 方法描述 */
const methodDescription="一个帮你完成表单校验的hooks"
/** 添加版本 */
const addVersion="1.0.4"

</script>

# useValidator

{{methodDescription}}

### 添加版本

{{addVersion}}

#### 示例

<Demo1/>
<Demo2/>
<Demo3/>
::: code-group

```typescript [基本校验]
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
  <el-button type="primary" @click="handleSubmit">校验</el-button>
</template>
<style lang="scss" scoped></style>


```

```typescript [复杂校验]
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

```

```typescript [自定义校验]

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

```

:::

### 类型定义

::: code-group
```useValidator类型
/**
 * 使用表单校验
 * @param errorCallBack 校验失败回调
 * @returns 
 */
const useValidator: (errorCallBack?: ((errorMsg: string) => void) | ((errorMsg: string) => Promise<void>) | undefined) => {
    check: <T>(formModel: T, rules: IFormRule[]) => IValidatorRes;
    rules: typeof TRuleEnum;
}
```
```typescript [rule类型]
enum TRuleEnum {
  /** 是否必填 */
  required = "required",
  /** 是否为手机号 */
  isMobile = "isMobile",
  /** ：是否为邮箱 */
  isEmail = "isEmail",
  /** ：是否为车牌号 */
  isCarNo = "isCarNo",
  /** ：是否为身份证号 */
  isIdCard = "isIdCard",
  /** ：是否为金额，允许保留两位小数 */
  isAmount = "isAmount",
  /** ：是否为数字 */
  isNumber = "isNumber",
  /** ：是否全为中文 */
  isChinese = "isChinese",
  /** ：是否不包含中文，可以有特殊字符 */
  isNotChinese = "isNotChinese",
  /** ：是否为英文 */
  isEnglish = "isEnglish",
  /** ：是否为英文和数字组合 4~30 位 */
  isEnAndNo = "isEnAndNo",
  /** ：只包含英文或者数字 */
  isEnOrNo = "isEnOrNo",
  /** ：是否有特殊字符，若有则返回false */
  isSpecial = "isSpecial",
  /** ：是否有表情符号，若有则返回false */
  isEmoji = "isEmoji",
  /** ：是否为日期：2021-08-09 */
  isDate = "isDate",
  /** ：是否为URL地址 */
  isUrl = "isUrl",
  /** ：与某个key值是否相同，传值：'isSame:key'，不相同则返回false */
  isSame = "isSame",
  /** ：数值范围，传值：'range:[1,9]' */
  range = "range",
  /** ：最小长度，传值：'minLength:Number'，如：'minLength:1' */
  minLength = "minLength",
  /** ：最大长度，传值：'maxLength:Number'，如：'maxLength:149' */
  maxLength = "maxLength",
  /** ：是否包含关键词，多个以英文逗号分隔，包含则返回false。传值：'isKeyword:key1,key2' */
  isKeyword = "isKeyword",
  /** 数组是否有值 */
  isArrayHaveValue = "isArrayHaveValue",
}
```

:::
