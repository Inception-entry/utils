/*
 * @Author: batman
 * @Date: 2020-02-14 10:03:27
 * @LastEditors  : batman
 * @LastEditTime : 2020-02-14 10:20:54
 * @Description: 深度比较两个数据是否相等
 */

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask) {
	/* object和other都是数组 */
	/* object和other都是对象 */
	// 如果是对象，判断是否是包裹型的对象
	/* object和other都是Map类型 */
	/* object和other都是Set类型 */
	/* object和other都是Buffer类型 */
}
