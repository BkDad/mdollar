

<p align="center">
    <img alt="logo" src="./public/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">mdollar</h3>
<h3 align="center">常用开发函数JS工具库</h3>

## 介绍

mdollar是一个支持vue3的开源工具库，使用typescript编写，提供了各种实用的函数和自定义的hooks，让你的vue开发更加方便和高效。

## [文档：https://baikebaba.gitee.io/mdollar/](https://baikebaba.gitee.io/mdollar/)

## 特性

- 全面支持vue3和typescript，充分利用了vue3的composition api和typescript的类型系统
- 包含了常用的函数，如防抖、节流、深拷贝、日期格式化等
- 包含了多种自定义的hooks，如useUrlParams、useHover、useSwipe等，可以轻松实现各种常见的功能
- 代码简洁、易读、易维护，遵循了eslint和prettier的规范
- 使用jest进行单元测试，覆盖率高达90%
- 使用vitepress生成文档，方便查阅和学习

## 快速上手

请通过[快速上手](https://baikebaba.gitee.io/mdollar/guide/install)了解更详细的内容

## 使用方法

### 安装

```ts
npm install mdollar --save
# or
yarn add mdollar
```

### 完整引入(不包含hooks)

```typescript
import $$ from "mdollar";
$$.deepCopy({ name: "mdollar" });
```

### 按需引入

```typescript
import { deepCopy } from "mdollar";
$$.deepCopy({ name: "mdollar" });
```

### 使用

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

你可以在[这里](https://baikebaba.gitee.io/mdollar/)查看完整的文档，了解更多的函数和hooks的用法和参数。

### 贡献

如果你对本项目感兴趣，欢迎提出issue或pull request.

### 许可

本项目遵循MIT协议，你可以自由地使用、修改和分发本项目。