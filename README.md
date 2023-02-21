# mdollar

# 介绍

此工具类用于业务需要

什么？还在每个项目里面复制粘贴常用的js工具库？

什么？复制还得考虑ts支不支持？？

什么？不是ts还得删除类型注解？？？

什么？摸鱼时间少了？

对不起，我不乐意

## 安装命令

安装mdollar

```bash
npm install mdollar # or yarn add mdollar
```

## 使用方法

### 引入方式

```typescript
import $$ from "mdollar"
//深拷贝
$$.deepCopy({ name: "$$" })
```

### 合并某工具类，并且提供类型提示

```typescript
import $$ from "mdollar"
class wzUtilsClass {
    /**
     * 加载
     * @param message 
     */
    showLoading = (message: string = '加载中...') => {}
    /**
     * 停止加载 
     */
    hideLoading = () => {}
}

const wzUtils: wzUtilsClass & typeof $$ = new wzUtilsClass() as any
// 合并utils
for (const key in $$) {
    wzUtils[key] = $$[key]
}
export default wzUtils

```



## API文档

##  