<script setup lang="ts">
    /** 方法描述 */
const methodDescription="随机生成字符串"
/** 添加版本 */
const addVersion="1.0.0"
</script>

# getRandomString

{{methodDescription}}

### 添加版本

{{addVersion}}

### 例子

```typescript
console.log($$.getRandomString());
// =>  XTWEuMEuVYeBgYg
console.log($$.getRandomString(10));
// =>  WbbkdX5LQv
console.log($$.getRandomString(100));
// =>  fLgJVwwGeojwjhdDE9SXB6uS9smBBXaWKayCF8ZU4WVadnl1WYaEu786A5tsbPSrHjsG3RH8FvWFalBHnfTCBODKE75TB32MS5vc
```

### 类型定义

```typescript
/**
 * 随机生成字符串
 * @param len 指定生成字符串长度，默认长度15
 */
const getRandomString: (len?: number) => string;
```
