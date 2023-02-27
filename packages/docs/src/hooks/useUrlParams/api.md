<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 18:37:51
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 19:50:35
-->
<script setup lang="ts">
    /** 方法描述 */
const methodDescription="一个获取url中参数的hooks，默认获取window.location.href地址"
/** 添加版本 */
const addVersion="1.0.5"

</script>

# useUrlParams

{{methodDescription}}

### 添加版本

{{addVersion}}

#### 示例

::: code-group

```typescript [基本使用]
<script lang="ts" setup>
import { useUrlParams } from "mdollar/src/index";
interface IParams {
  name: string;
}
const params = useUrlParams<IParams>();
console.log(params.name);
</script>

```

```typescript [自定义Url]
<script lang="ts" setup>
import { useUrlParams } from "mdollar/src/index";
interface IParams {
  name: string;
}
const params = useUrlParams<IParams>("https://xxx.xxxx?name=mdollar");
console.log(params.name);
</script>

```

:::

### 类型定义

```typescript
/**
 * 获取url中参数
 * @param url 可不传，默认获取window.location.href的url
 * @returns
 */
const useUrlParams: <T extends Record<string, any>>(url?: string) => T;
```
