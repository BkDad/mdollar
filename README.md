<!--
 * @Description:
 * @Autor: 万洲
 * @Date: 2023-02-25 13:13:00
 * @LastEditors: 万洲
 * @LastEditTime: 2023-02-25 13:13:52
-->
<p align="center">
    <img alt="logo" src="./public/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">mdollar</h3>
<h3 align="center">常用开发函数JS工具库</h3>

## 介绍

`mdollar`是一个 js 工具库，适合用于日常开发，在 Vue 项目开发过程中，一套好用的 js 库是必不可少的，希望 mdollar 能成为您的选择。

## [文档：https://baikebaba.gitee.io/mdollar/](https://baikebaba.gitee.io/mdollar/)

## 特性

- 完整的 ts 类型支持
- 体积小，只保留日常常用业务开发函数
- 按需引入，精简打包体积

## 快速上手

请通过[快速上手](https://baikebaba.gitee.io/mdollar/guide/install)了解更详细的内容

## 使用方法

### 完整引入

```typescript
import $$ from "mdollar";
$$.deepCopy({ name: "mdollar" });
```

### 按需引入

```typescript
import { deepCopy } from "mdollar";
$$.deepCopy({ name: "mdollar" });
```
