<p align="center">
    <img alt="logo" src="../public/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">mdollar</h3>
<h3 align="center">常用开发函数JS工具库</h3>

## 介绍

mdollar 是一个支持 vue3 的开源工具库，使用 typescript 编写，提供了各种实用的函数和自定义的 hooks，让你的 vue 开发更加方便和高效。


## 特性

- 全面支持 vue3 和 typescript，充分利用了 vue3 的 composition api 和 typescript 的类型系统
- 包含了常用的函数，如防抖、节流、深拷贝、日期格式化等
- 包含了多种自定义的 hooks，如 useUrlParams、useHover、useSwipe 等，可以轻松实现各种常见的功能
- 代码简洁、易读、易维护，遵循了 eslint 和 prettier 的规范
- 使用 jest 进行单元测试，覆盖率高达 90%
- 使用 vitepress 生成文档，方便查阅和学习

## 快速上手

请通过[快速上手](https://baikebaba.gitee.io/mdollar/guide/install)了解更详细的内容

## 使用方法

### 安装

```ts
npm install mdollar --save
# or
yarn add mdollar
```

### 工具函数引用-完整引入(不包含 hooks)

```typescript
import $$ from "mdollar";
$$.deepCopy({ name: "mdollar" });
```

### 工具函数引用-按需引入

```typescript
import { deepCopy } from "mdollar";
$$.deepCopy({ name: "mdollar" });
```

### Hooks 使用

```ts
<script lang="ts" setup>
import { useClipboard } from "mdollar/src/hooks";
import { ref } from "vue";
import { ElMessage } from "element-plus";
const inputValue = ref();
const { copyText, copiedText } = useClipboard();
const handleCopy = () => {
  copyText({
    text: inputValue.value,
    success: () => ElMessage({ message: "复制成功", type: "success" }),
    fail: () => ElMessage({ message: "复制失败", type: "error" }),
  });
};
</script>
```

### 文档

你可以在[这里](https://baikebaba.gitee.io/mdollar/)查看完整的文档，了解更多的函数和 hooks 的用法和参数。

### 贡献

如果你对本项目感兴趣，欢迎提出 issue 或 pull request.

### 许可

本项目遵循 MIT 协议，你可以自由地使用、修改和分发本项目。
