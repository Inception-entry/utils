# utils

tools for front-end development

## 后台工具类函数(nodejs)

### slugify

对 URL，文件名和 ID 有用。 它正确处理德语变音符号，越南语，阿拉伯语，俄语，罗马尼亚语，土耳其语等。

### wait

延时等待一定时间执行的, 异步变换同步的处理函数

---

## 前台工具类函数（页面实用型函数）

isMobile -> isIOS || isAndroid 判断手机的操作系统

stopBubble 阻止冒泡

formatMobile 格式化手机号码 138 4383 8438

formatTime 格式化时间 2019-12-31 10:08:46

### handler 文件夹

- baseIsEqual 数组或对象比较是否相等（有序、无序均可比较）
- isEqual 数组或对象比较是否相等（有序比较）
- uniq 数组去重
- uniqWith 数组去重
- uniqBy 数组去重

### decimal 文件夹

- Decimal 浮点数精度（除加减乘除外，还有平方，取余，正弦，余弦...）
- muldivfloat 浮点数精度（只有乘法、除法）
- floatObj 浮点数精度（加、减、乘、除）

使用方法：

- a \* b = new Decimal(a).mul(new Decimal(b)).toNumber
- a \* b = muldivfloat(a, b, '\*')
- a \* b = floatObj.multiply(a, b)

### debounce 防抖动

在 vue 中的使用方法：
第一步：

```js
import { debounce } from 'awesome-utils-normal';
```

第二步：

```js
created() {
	this.\_DB = debounce({ fn: this.handleSubmit, wait: 1000, immediate: true });
},
methods: {
	\_debounce(e) {
	e.preventDefault();
	this.\_DB();
}
```

第三步：

```html
<a-form
	:form="form"
	:label-col="{ span: 5 }"
	:wrapper-col="{ span: 12 }"
	@submit="\_debounce"
>
...
</form>
```

### throttle 节流(用法同 debounce)
