/*
 * @Author: batman
 * @Date: 2022-03-08 16:20:39
 * @LastEditors: batman
 * @LastEditTime: 2022-03-08 16:26:49
 * @Description: 关于原生dom的一些操作
 */

// 判断其父级是否有对应className
const hasClass = (ele, cName) => {
	let reg = new RegExp('(?:^| +)' + cName + '(?: +|$)', 'g');
	if (ele.className === undefined) {
		return false;
	} else {
		return reg.test(ele.className);
	}
};
// 原生js移除class
const removeClasss = (ele, txt) => {
	let reg = new RegExp('(?:^| +)' + txt + '(?: +|$)', 'g');
	if (hasClass(ele, txt)) {
		ele.className = ele.className.replace(reg, '');
	}
};
// 原生js添加class
const addClasss = (ele, txt) => {
	ele.className += ' ' + txt;
};
// 查找当前元素的父级
const getParent = (ele, className) => {
	if (!ele) {
		return;
	}
	let targetParent = ele.parentNode;
	while (!hasClass(targetParent, className)) {
		targetParent = targetParent.parentNode;
	}
	return targetParent;
};
// 获得相对父元素的顶部边缘的距离
const getElementTop = (elem) => {
	var elemTop = elem.offsetTop; // 获得elem元素距相对定位的父元素的top
	elem = elem.offsetParent; // 将elem换成起相对定位的父元素
	while (elem != null) {
		// 只要还有相对定位的父元素
		// 获得父元素 距它父元素的top值,累加到结果中
		elemTop += elem.offsetTop;
		// 再次将elem换成他相对定位的父元素上;
		elem = elem.offsetParent;
	}
	return elemTop;
};

export { hasClass, removeClasss, addClasss, getParent, getElementTop };
