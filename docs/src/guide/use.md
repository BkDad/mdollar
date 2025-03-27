# 使用方法

### 前言

mdollar 提供完整引入和按需引入两种方式，注：hooks 并不在完整引入中

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

### 使用 hooks

```typescript
import { useValidator } from "mdollar";
const formController = useValidator((errorMsg) => alert(errorMsg));
```
