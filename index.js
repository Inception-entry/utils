/*
 * @Author: batman
 * @Date: 2019-12-11 15:44:07
 * @LastEditors: batman
 * @LastEditTime: 2020-08-21 16:18:04
 * @Description: 入口
 */

import { isPhone, isIOS, isAndroid, isMobile, slasher } from './src/common';
import { stopBubble } from './src/bubble';
import { debounce, throttle } from './src/debounce_throttle';
import { deepCopy, shallowCopy } from './src/clone/index';
import { Decimal, muldivfloat, floatObj } from './src/decimal/decimal';
import { formatPhone, parseTime, formatTime, formatThousandthMoney } from './src/format/index';
import { baseIsEqual, isEqual, uniq, uniqWith, uniqBy } from './src/handler/index';
import { Validator } from './src/validation/validator';
import { isIdNo } from './src/validation/';

export {
	isPhone,
	isIOS,
	isAndroid,
	isMobile,
	slasher,
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
};
