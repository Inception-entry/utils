/* eslint-disable no-undef */
/* eslint-disable indent */
import idNoCheck from './idNoCheck';
// 校验身份证号
const isIdNo = (str) => {
	return idNoCheck.isIdno(str);
};
// 校验手机号码
const isPhoneNo = (val) => {
	var patrn = /^((1[3456789][0-9]{1})+\d{8})$/;
	if (!patrn.test(val) || val === '') {
		return false;
	} else {
		return true;
	}
};
// 检验车牌号
const isCarNo = (val) => {
	var patrn = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
	var patrn2 = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))$/;
	if (!patrn.test(val) && !patrn2.test(val)) {
		return false;
	} else {
		return true;
	}
};
// 校验车架号
const isVehicleNo = (val) => {
	var patrn = /^[A-HJ-NP-Za-hj-np-z0-9]+$/;
	if (!patrn.test(val) || val === '') {
		return false;
	} else {
		return true;
	}
};
// 判断输入框是否有表情
const isEmojiCharacter = (substring) => {
	for (var i = 0; i < substring.length; i++) {
		const hs = substring.charCodeAt(i);
		if (hs >= 0xd800 && hs <= 0xdbff) {
			if (substring.length > 1) {
				const ls = substring.charCodeAt(i + 1);
				var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
				if (uc >= 0x1d000 && uc <= 0x1f77f) {
					return true;
				}
			}
		} else if (substring.length > 1) {
			const ls = substring.charCodeAt(i + 1);
			if (ls === 0x20e3) {
				return true;
			}
		} else {
			if (hs >= 0x2100 && hs <= 0x27ff) {
				return true;
			} else if (hs >= 0x2b05 && hs <= 0x2b07) {
				return true;
			} else if (hs >= 0x2934 && hs <= 0x2935) {
				return true;
			} else if (hs >= 0x3297 && hs <= 0x3299) {
				return true;
			} else if (hs === 0xa9 || hs === 0xae || hs === 0x303d || hs === 0x3030 || hs === 0x2b55 || hs === 0x2b1c || hs === 0x2b1b || hs === 0x2b50) {
				return true;
			}
		}
	}
};
// 压缩图片
const dealImage = (path, obj, callback) => {
	var img = new Image();
	img.src = path;
	img.onload = function () {
		var that = this;
		// 默认按比例压缩
		var w = that.width;
		var h = that.height;
		var scale = w / h;
		w = obj.width || w;
		h = obj.height || w / scale;
		var quality = 0.5; // 默认图片质量为0.7
		// 生成canvas
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		// 创建属性节点
		var anw = document.createAttribute('width');
		anw.nodeValue = w;
		var anh = document.createAttribute('height');
		anh.nodeValue = h;
		canvas.setAttributeNode(anw);
		canvas.setAttributeNode(anh);
		ctx.drawImage(that, 0, 0, w, h);
		// 图像质量
		if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
			quality = obj.quality;
		}
		// quality值越小，所绘制出的图像越模糊
		var base64 = canvas.toDataURL('image/jpeg', quality);
		// 回调函数返回base64的值
		callback(base64);
	};
};
// 图片转成base64
const getImgData = (img, dir, next) => {
	var image = new Image();
	image.onload = function () {
		var degree = 0;
		var drawWidth;
		var drawHeight;
		var width;
		var height;
		drawWidth = this.naturalWidth;
		drawHeight = this.naturalHeight;
		// 以下改变一下图片大小
		var canvas = document.createElement('canvas');
		canvas.width = width = drawWidth;
		canvas.height = height = drawHeight;
		var context = canvas.getContext('2d');
		// 判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
		switch (dir) {
			// iphone横屏拍摄，此时home键在左侧
			case 3:
				degree = 180;
				drawWidth = -width;
				drawHeight = -height;
				break;
			// iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
			case 6:
				canvas.width = height;
				canvas.height = width;
				degree = 90;
				drawWidth = width;
				drawHeight = -height;
				break;
			// iphone竖屏拍摄，此时home键在上方
			case 8:
				canvas.width = height;
				canvas.height = width;
				degree = 270;
				drawWidth = -width;
				drawHeight = height;
				break;
		}
		// 使用canvas旋转校正
		context.rotate((degree * Math.PI) / 180);
		context.drawImage(this, 0, 0, drawWidth, drawHeight);
		// 返回校正图片
		next(canvas.toDataURL('image/jpeg', 0.8));
	};
	image.src = img;
};
export { isIdNo, isPhoneNo, isCarNo, isVehicleNo, isEmojiCharacter, dealImage, getImgData };
