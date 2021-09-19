/*
 * @Author: batman
 * @Date: 2019-12-11 15:44:07
 * @LastEditors: batman
 * @LastEditTime: 2021-01-17 22:07:20
 * @Description: 入口
 */

import { isPhone, isIOS, isAndroid, isMobile, slasher, wait, pickProperty } from './src/common';
import { stopBubble } from './src/bubble';
import { debounce, throttle } from './src/debounce_throttle';
import { deepCopy, shallowCopy } from './src/clone/index';
import { Decimal, muldivfloat, floatObj } from './src/decimal/decimal';
import { formatPhone, parseTime, formatTime, formatThousandthMoney } from './src/format/index';
import { baseIsEqual, isEqual, uniq, uniqWith, uniqBy } from './src/handler/index';
import { Validator } from './src/validation/validator';
import { isIdNo, isPhoneNo, isCarNo, isVehicleNo, isEmojiCharacter, dealImage, getImgData } from './src/validation/validate';
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
	pickProperty,
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
	/* Hook,
	AsyncHook,
	PromiseHook, */
};
