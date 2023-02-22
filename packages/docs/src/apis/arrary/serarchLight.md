<script setup lang="ts">
    /** 方法描述 */
const methodDescription="搜索列表致使搜索字段名带高亮，react中需配合dangerouslySetInnerHTML属性一起使用,vue请使用v-html渲染该字段"
/** 添加版本 */
const addVersion="1.0.0"

</script>

# serarchLight

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
const arr = [{ name: "浙江省", code: "001" }, { name: "安徽省", code: "002" }, { name: "黑龙江", code: "003" }]
console.log($$.serarchLight("安", arr, "name"));
// => [{"name":"<span style=\"color:#279EF3;\">安</span>徽省","code":"002"}]
```

### 类型定义

```typescript
/**
    * 搜索列表致使搜索字段名带高亮
    * react: dangerouslySetInnerHTML={{ __html: item[fields] }}
    * vue : <span v-html="item[fields]"></span>
    * @param searchValue 搜索值
    * @param totalList 总列表
    * @param fields 要替换的字段名
    * @param color 颜色 默认#279EF3
    * @returns 返回替换掉的字段列表
    */
const serarchLight: <T>(searchValue: string, totalList: T[], fields: string, color?: string) => (T & {
    [x: string]: any;
})[]
```
