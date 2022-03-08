/*
 * @Author: batman
 * @Date: 2019-12-11 15:44:07
 * @LastEditors: batman
 * @LastEditTime: 2022-03-08 16:53:56
 * @Description: 入口
 */

import { isPhone, isIOS, isAndroid, isMobile, slasher, wait } from './src/common';
import { stopBubble } from './src/bubble';
import { debounce, throttle } from './src/debounce_throttle';
import { deepCopy, shallowCopy } from './src/clone/index';
import { Decimal, muldivfloat, floatObj } from './src/decimal/decimal';
import {
	formatPhone,
	parseTime,
	formatTime,
	formatThousandthMoney,
	pickProperty,
	escapeProperty,
	restoreProperty,
	hasClass,
	removeClasss,
	addClasss,
	getParent,
	getElementTop,
} from './src/format/index';
import { baseIsEqual, isEqual, uniq, uniqWith, uniqBy } from './src/handler/index';
import { Validator } from './src/validation/validator';
import { isIdNo, isPhoneNo, isCarNo, isVehicleNo, isEmojiCharacter, dealImage, getImgData } from './src/validation/validate';
import { handleImg, urltoImage } from './src/images';
import { setStore, getStore, removeStore, getAllStore, clearStore } from './store';
// import { Hook } from './src/hook/syncHook';
// import { AsyncHook } from './src/hook/asyncHook';
// import { PromiseHook } from './src/hook/asyncPromiseHook';

export {
	isPhone,
	isIOS,
	isAndroid,
	isMobile,
	slasher,
	wait,
	stopBubble,
	debounce,
	throttle,
	deepCopy,
	shallowCopy,
	Decimal,
	muldivfloat,
	floatObj,
	formatPhone,
	parseTime,
	formatTime,
	formatThousandthMoney,
	pickProperty,
	escapeProperty,
	restoreProperty,
	hasClass,
	removeClasss,
	addClasss,
	getParent,
	getElementTop,
	baseIsEqual,
	isEqual,
	uniq,
	uniqWith,
	uniqBy,
	Validator,
	isIdNo,
	isPhoneNo,
	isCarNo,
	isVehicleNo,
	isEmojiCharacter,
	dealImage,
	getImgData,
	handleImg,
	urltoImage,
	setStore,
	getStore,
	removeStore,
	getAllStore,
	clearStore,
	/* Hook,
	AsyncHook,
	PromiseHook, */
};
