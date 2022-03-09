/*
 * @Author: batman
 * @Date: 2019-12-21 06:40:50
 * @LastEditors: batman
 * @LastEditTime: 2022-03-09 14:49:39
 * @Description: 阻止事件冒泡
 */
const stopBubble = (e) => {
	// 如果提供了事件对象，则这是一个非IE浏览器
	if (e && e.stopPropagation) {
		// 因此它支持W3C的stopPropagation()方法
		e.stopPropagation();
	} else {
		// 否则，我们需要使用IE的方式来取消事件冒泡
		// eslint-disable-next-line no-undef
		window.event.cancelBubble = true;
	}
};
export { stopBubble };
