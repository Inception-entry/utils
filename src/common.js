/* eslint-disable no-undef */
/*
 * @Author: batman
 * @Date: 2019-12-14 01:17:18
 * @LastEditors: batman
 * @LastEditTime: 2022-03-09 14:56:35
 * @Description: 一些常用工具函数
 */
/* const slugify = require('slugify');

slugify.extend({ '/': '-' });

exports.slugify = function (input) {
	return slugify(input);
}; */

//Some weired phone brands with weired browser features support
// 一些支持奇怪的浏览器功能的奇怪的手机品牌
const weiredBrands = ['webOS', 'BlackBerry'];

//some UA related utilities, and some simple device check
// 一些UA相关的实用程序，和一些简单的设备检查
const normalizeUA = (ua) => {
	return String(ua || '').toLowerCase();
};

// 杂牌手机
const isPhone = (ua) => {
	ua = normalizeUA(ua);
	for (const phone of weiredBrands) {
		if (ua.indexOf(phone) >= 0) {
			return true;
		}
	}
	return false;
};

// ios终端
const isIOS = (ua) => {
	ua = normalizeUA(ua);
	return ua.indexOf('iphone') >= 0 || ua.indexOf('ipad') >= 0;
};

// 安卓终端
const isAndroid = (ua) => {
	ua = normalizeUA(ua);
	return ua.indexOf('android') >= 0;
};

// 判断设备是否处于移动端
const isMobile = () => {
	const ua = navigator.userAgent;
	return isIOS(ua) || isAndroid(ua) || isPhone(ua);
};

const isWeixinBrowser = () => {
	// 判断是否是微信浏览器
	let ua = navigator.userAgent.toLowerCase();
	let isWeixinBroswer = false;
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		isWeixinBroswer = true;
	} else {
		isWeixinBroswer = false;
	}
	return isWeixinBroswer;
};

// 返回一个数组截断前n个元素组成的数组，从索引0开始截断。
const slasher = (arr, howMany) => {
	var arr1 = [];
	if (arr.length === howMany) {
		return arr;
	} else {
		arr1 = arr.splice(0, howMany);
	}
	return arr1;
};

const wait = (ms = 0) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

export { isPhone, isIOS, isAndroid, isMobile, isWeixinBrowser, slasher, wait };
