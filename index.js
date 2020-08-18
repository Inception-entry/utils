/*
 * @Author: batman
 * @Date: 2019-12-11 15:44:07
 * @LastEditors: batman
 * @LastEditTime: 2020-05-13 14:47:58
 * @Description: 入口
 */
import { formatMobile } from './src/mobile';
import { formatTime } from './src/time';
import { stopBubble } from './src/bubble';
import { debounce, throttle } from './src/debounce_throttle';
import { Validator } from './src/validation/validator';
import { baseIsEqual, isEqual, uniq, uniqWith, uniqBy } from './src/handler/index';
import { Decimal, muldivfloat, floatObj } from './src/decimal/decimal';
import { deepCopy, shallowCopy } from './src/clone/index';

export { formatMobile, formatTime, stopBubble, debounce, throttle, Validator, baseIsEqual, isEqual, uniq, uniqWith, uniqBy, Decimal, muldivfloat, floatObj, deepCopy, shallowCopy };
