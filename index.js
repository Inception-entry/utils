/*
 * @Author: batman
 * @Date: 2019-12-11 15:44:07
 * @LastEditors: sanks
 * @LastEditTime: 2020-05-13 14:47:58
 * @Description: 入口
 */
import { formatMobile } from './src/mobile';
import { formatTime } from './src/time';
import { stopBubble } from './src/bubble';
import { debounce, throttle } from './src/debounce_throttle';
import { Validator } from './src/validation/validator';
import { isEqual, uniq, uniqWith, uniqBy } from './src/handler/index';
import { Decimal, muldivfloat, floatObj } from './src/decimal/decimal';

export { formatMobile, formatTime, stopBubble, debounce, throttle, Validator, isEqual, uniq, uniqWith, uniqBy,  Decimal, muldivfloat, floatObj};
