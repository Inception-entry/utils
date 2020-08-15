/*
 * @Author: batman
 * @Date: 2020-05-13 08:50:16
 * @LastEditors: batman
 * @LastEditTime: 2020-05-13 15:58:07
 * @Description: 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 * @param executeOncePerWait true 时表示 throttle， 否则为 debounce
 */

function debounceOrThrottle({ fn, wait = 300, immediate = false, executeOncePerWait = false }) {
	if (typeof fn !== 'function') {
		throw new Error('fn is expected to be a function');
	}

	let tId = null;
	let context = null;
	let args = null;
	let lastTriggerTime = null;
	let result = null;
	let lastExecutedTime = null;

	const later = function () {
		const last = Date.now() - (executeOncePerWait ? lastExecutedTime : lastTriggerTime);

		if (last < wait && last > 0) {
			setTimeout(later, wait - last);
		} else {
			if (!immediate) {
				executeOncePerWait && (lastExecutedTime = Date.now());
				result = fn.apply(context, args);
				context = args = null;
			}

			tId = null;
		}
	};

	return function () {
		context = this;
		args = arguments;
		!executeOncePerWait && (lastTriggerTime = Date.now());
		const callNow = immediate && !tId;

		if (!tId) {
			executeOncePerWait && (lastExecutedTime = Date.now());
			tId = setTimeout(later, wait);
		}

		if (callNow) {
			executeOncePerWait && (lastExecutedTime = Date.now());
			result = fn.apply(context, args);
			context = args = null;
		}

		return result;
	};
}

const debounce = ({ fn, wait, immediate }) =>
	debounceOrThrottle({
		fn,
		wait,
		immediate,
	});

const throttle = ({ fn, wait, immediate = true }) =>
	debounceOrThrottle({
		fn,
		wait,
		immediate,
		executeOncePerWait: true,
	});

export { debounce, throttle };
