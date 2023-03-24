<script lang="ts" setup>
import { debounce } from "mdollar/src";
const test = debounce((name: string) => {
  console.log("name===", name);
});
</script>
<template>
  <button @click="test('wz')">1111</button>
</template>
<style lang="scss" scoped></style>
