<script lang="ts" setup>
import { useUrlParams } from "mdollar/src/index";
interface IParams {
  name: string;
}
const params = useUrlParams<IParams>();
console.log(params.name);
</script>
<template></template>
