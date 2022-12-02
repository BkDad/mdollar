# wzjs-utils

# 介绍

此工具类用于业务需要

什么？还在每个项目里面复制粘贴常用的js工具库？

什么？复制还得考虑ts支不支持？？

什么？不是ts还得删除类型注解？？？

什么？摸鱼时间少了？

对不起，我不乐意

## 安装命令

安装wzjs-utils

```bash
npm install wzjs-utils # or yarn add wzjs-utils
```

## 使用方法

### 引入方式

```typescript
import wzJsUtils from "wzjs-utils"
//深拷贝
wzJsUtils.deepCopy({ name: "wzJsUtils" })
```

### 合并某工具类，并且提供类型提示

```typescript
import wzJsUtils from "wzjs-utils"
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

const wzUtils: wzUtilsClass & typeof wzJsUtils = new wzUtilsClass() as any
// 合并utils
for (const key in wzJsUtils) {
    wzUtils[key] = wzJsUtils[key]
}
export default wzUtils

```



## API文档

##  