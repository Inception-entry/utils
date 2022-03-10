# utils

tools for front-end development

- 目前本库已经收集了 54 个函数，持续维护补充中；
- 这是一个开放的工具类库，针对前端的函数工具集合；
- 希望广大使用本库的朋友提出宝贵建议，后续陆续解决这个库中存在的不足和书写遗漏等问题。</font>

## 后台工具类函数(nodejs)

### slugify(暂未放开)

对 URL，文件名和 ID 有用。 它正确处理德语变音符号，越南语，阿拉伯语，俄语，罗马尼亚语，土耳其语等。

---

## 前台工具类函数（页面实用型函数）

isPhone 除 Android，iPhone 以外的手机操作系统（待完善）

isMobile -> isIOS || isAndroid || isPhone 判断手机的操作系统

slasher 返回一个数组截断前 n 个元素组成的数组，从索引 0 开始截断

isWeixinBrowser 判断当前浏览器是否是微信浏览器

wait 延时等待一定时间执行的处理函数

stopBubble 阻止冒泡

### debounce 防抖动

在 vue 中的使用方法：

第一步：

```js
import { debounce } from 'awesome-utils-normal';
```

第二步：

```js
created() {
	this._DB = debounce({
		fn: this.handleSubmit,
		wait: 1000,
		immediate: true
	});
},
methods: {
	_debounce(e) {
		e.preventDefault();
		this._DB();
	}
}
```

第三步：

```html
<form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="_debounce">...</form>
```

### throttle 节流(用法同 debounce)

### clone 文件夹

- deepCopy 深拷贝
- shallowCopy 浅拷贝

### decimal 文件夹

- Decimal 浮点数精度（除加减乘除外，还有平方，取余，正弦，余弦...）
- muldivfloat 浮点数精度（只有乘法、除法）
- floatObj 浮点数精度（加、减、乘、除）

使用方法：

- a \* b = new Decimal(a).mul(new Decimal(b)).toNumber
- a \* b = muldivfloat(a, b, '\*')
- a \* b = floatObj.multiply(a, b)

### format 文件夹

- formatPhone 格式化手机号码 138 4383 8438
- parseTime 格式化时间 2019-12-31 10:08:46
- formatTime 距今相隔多久的时间格式化工具 1 天前
- formatThousandthMoney 千分符分隔数字 1,888,999
- formatCardNo 格式化银行卡号 0000 0000 0000 0000
- randomGenerate 生成随机字符串
- pickProperty 提取对象中的一些属性成为一个新的对象，类似 lodash 的 pick
- escapeProperty 转义对象成字符串
- restoreProperty 还原转义后的对象
- hasClass 判断其父级是否有对应 className
- removeClasss 原生 js 移除 class
- addClasss 原生 js 添加 class
- getParent 查找当前元素的父级
- getElementTop 获得相对父元素的顶部边缘的距离

### handler 文件夹

- baseIsEqual 数组或对象比较是否相等（有序、无序均可比较）
- isEqual 数组或对象比较是否相等（有序比较）
- uniq 数组去重（常用）
- uniqWith 数组去重
- uniqBy 数组去重

### hook 文件夹(后续完善使用方法再开放)

- syncHook 同步钩子
- asyncHook 异步回调钩子
- asyncPromiseHook 异步 Promise 钩子

### images 文件夹

- handleImg 压缩图片
- urltoImage 图片转换成文件流

### store 文件夹

- setStore 存储 localStorage 或 sessionStorage
- getStore 获取 localStorage 或 sessionStorage
- removeStore 删除 localStorage 或 sessionStorage
- getAllStore 获取全部 localStorage 和 sessionStorage
- clearStore 清空全部 localStorage 和 sessionStorage

### validation 文件夹

- isIdNo 验证身份证号格式是否正确
- isPhoneNo 验证手机号码格式是否正确
- isCarNo 验证车牌号号码格式是否正确
- isVehicleNo 验证车架号号码格式是否正确
- isEmojiCharacter 判断输入框是否有表情
- dealImage 压缩图片(暂时保留，与 images 中的方法重合)
- getImgData 图片转成 base64
- validatenull 判断是否为空
