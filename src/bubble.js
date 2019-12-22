
/*
 * @Author: batman
 * @Date: 2019-12-21 06:40:50
 * @LastEditors  : batman
 * @LastEditTime : 2019-12-21 22:53:16
 * @Description: 
 */

/**
 * @name: 
 * @usage: 
 * @param {type} 
 * @return: 
 */
const stopBubble = (e) => {
  // 如果提供了事件对象，则这是一个非IE浏览器
  if (e && e.stopPropagation) {
    // 因此它支持W3C的stopPropagation()方法
    e.stopPropagation()
  } else {
    // 否则，我们需要使用IE的方式来取消事件冒泡
    window.event.cancelBubble = true
  }
}
export {
  stopBubble
}