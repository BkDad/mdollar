<script setup lang="ts">
    /** 方法描述 */
const methodDescription="根据相同字段名将对象进行分组"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# dateFormatter

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.dateFormatter(new Date(), "y-m-d", 4));
// => 2023-02-20
```

### 参数说明

| 参数   |                            说明                            |     类型      |
| ------ | :--------------------------------------------------------: | :-----------: |
| date   |                      需要格式化的日期                      | string , Date |
| format | 格式化字符串, 如：y-m，y-m-d，y 年 m 月，h:i，y-m-d h:i 等 |    string     |
| type   |                      见下方 type 类型                      |    number     |
| isMs   | 时间戳精度是否为毫秒，默认为 true（当精度为秒时传 false）  |    boolean    |

### type

| 参数 |                                 说明   （根据date参数传入类型来选值）                              |
| ---- | :------------------------------------------------------------------: |
| 1    |           date 的格式类型：日期字符串(2017/12/04 12:12:12)           |
| 2    |                        时间戳(1603676514690)                         |
| 3    |                 日期字符串，无连接符(20171204121212)                 |
| 4    | new Date()时间格式(Thu Oct 01 2020 00:00:00 GMT+0800 (中国标准时间)) |

### 类型定义

```typescript
/**
     * @desc 日期时间格式化
     
     * @param date 需要格式化的日期
     
     * @param format 格式化字符串(y-m-d h:i:s)
     * format的格式可由（y m d h i s）组合，如：y-m，y-m-d，y年m月，h:i，y-m-d h:i 等
     
     * @param type 日期类型 1~4 
     * 1-date的格式类型：日期字符串(2017/12/04 12:12:12) 
     * 2-date的格式类型：时间戳(1603676514690) 
     * 3-date的格式类型：日期字符串，无连接符(20171204121212) 
     * 4-date的格式类型：new Date()时间格式(Thu Oct 01 2020 00:00:00 GMT+0800 (中国标准时间))

     * @param isMs 时间戳精度是否为毫秒，默认为true（当精度为秒时传false），type=2时有效
 **/
const dateFormatter: (date: string | Date, formatter: string, type: number, isMs?: boolean) => void;
```
