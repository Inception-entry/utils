/*
 * @Author: batman
 * @Date: 2022-03-08 16:51:34
 * @LastEditors: batman
 * @LastEditTime: 2022-03-09 15:03:50
 * @Description: 存储localStorage和sessionStorage的方法
 * 注：此方法生成的storage的key有前缀“verify-”，这样可以分辨出这些前缀的key是你的站点
 * 的存储变量
 */
/* eslint-disable no-undef */
/* eslint-disable indent */
import { validatenull } from '../validation/validate';

const keyName = 'awesome-';
/**
 * 存储localStorage
 */
const setStore = (params = {}) => {
	let { name, content, type } = params;
	name = keyName + name;
	const obj = {
		dataType: typeof content,
		content: content,
		type: type,
		datetime: new Date().getTime(),
	};
	if (type) window.sessionStorage.setItem(name, JSON.stringify(obj));
	else window.localStorage.setItem(name, JSON.stringify(obj));
};
/**
 * 获取localStorage
 */

const getStore = (params = {}) => {
	let { name, debug } = params;
	name = keyName + name;
	let obj = {};
	let content;
	obj = window.sessionStorage.getItem(name);
	if (validatenull(obj)) obj = window.localStorage.getItem(name);
	if (validatenull(obj)) return;
	try {
		obj = JSON.parse(obj);
	} catch (e) {
		return obj;
	}
	if (debug) {
		return obj;
	}
	if (obj.dataType === 'string') {
		content = obj.content;
	} else if (obj.dataType === 'number') {
		content = Number(obj.content);
	} else if (obj.dataType === 'boolean') {
		content = eval(obj.content);
	} else if (obj.dataType === 'object') {
		content = obj.content;
	}
	return content;
};
/**
 * 删除localStorage
 */
const removeStore = (params = {}) => {
	let { name, type } = params;
	name = keyName + name;
	if (type) {
		window.sessionStorage.removeItem(name);
	} else {
		window.localStorage.removeItem(name);
	}
};

/**
 * 获取全部localStorage
 */
const getAllStore = (params = {}) => {
	const list = [];
	const { type } = params;
	if (type) {
		for (let i = 0; i <= window.sessionStorage.length; i++) {
			list.push({
				name: window.sessionStorage.key(i),
				content: getStore({
					name: window.sessionStorage.key(i),
					type: 'session',
				}),
			});
		}
	} else {
		for (let i = 0; i <= window.localStorage.length; i++) {
			list.push({
				name: window.localStorage.key(i),
				content: getStore({
					name: window.localStorage.key(i),
				}),
			});
		}
	}
	return list;
};

/**
 * 清空全部localStorage
 */
const clearStore = (params = {}) => {
	const { type } = params;
	if (type) {
		window.sessionStorage.clear();
	} else {
		window.localStorage.clear();
	}
};

export { setStore, getStore, removeStore, getAllStore, clearStore };
