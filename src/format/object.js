/*
 * @Author: batman
 * @Date: 2022-03-08 14:27:42
 * @LastEditors: batman
 * @LastEditTime: 2022-03-08 17:05:28
 * @Description:关于对象的一些处理方法
 */

// 提取对象中的一些属性成为一个新的对象，类似 lodash 的 pick
const pickProperty = (obj, array) => {
	let inclusivePick = (obj, ...keys) => Object.fromEntries(keys.map((key) => [key, obj[key]]));
	let subset = inclusivePick(obj, ...array);
	return subset;
};

// 转义对象成字符串(根据array中的属性，例 ["province","city","district"])
const escapeProperty = (obj, array) => {
	if (!obj) {
		return {};
	}
	Object.keys(obj).map((prop) => {
		if (array.includes(prop) && obj[prop]) {
			obj[prop] = JSON.stringify(obj[prop]);
		}
	});
	return obj;
};
// 还原转义后的对象(根据array中的属性，例 ["province","city","district"])
const restoreProperty = (obj, array) => {
	if (!obj) {
		return {};
	}
	Object.keys(obj).map((prop) => {
		if (array.includes(prop) && obj[prop]) {
			obj[prop] = JSON.parse(obj[prop]);
		}
	});
	return obj;
};

export { pickProperty, escapeProperty, restoreProperty };
