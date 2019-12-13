/*
 * @Author: batman
 * @Date: 2019-12-14 01:17:18
 * @LastEditors: batman
 * @LastEditTime: 2019-12-14 01:49:39
 * @Description: 一些常用工具函数
 */
const slugify = require('slugify');

slugify.extend({ '/': '-' });

//Some weired phone brands with weired browser features support
// 一些支持奇怪的浏览器功能的奇怪的手机品牌
const weiredBrands = [];

//some UA related utilities, and some simple device check
// 一些UA相关的实用程序，和一些简单的设备检查
exports.normalizeUA = function normalizeUA(ua) {
  return String(ua || '').toLowerCase();
};

exports.isPhone = function isPhone(ua) {
  ua = this.normalizeUA(ua);
  for (const phone of weiredBrands) {
    if (ua.indexOf(phone) >= 0) {
      return true;
    }
  }
  return false;
};

exports.isIOS = function isIOS(ua) {
  ua = this.normalizeUA(ua);
  return ua.indexOf('iphone') >= 0 || ua.indexOf('ipad') >= 0;
};

exports.isAndroid = function isAndroid(ua) {
  ua = this.normalizeUA(ua);
  return ua.indexOf('android') >= 0;
};

exports.isMobile = function isMobile(ua) {
  return this.isIOS(ua) || this.isAndroid(ua);
};

exports.slugify = function(input) {
  return slugify(input);
};

exports.wait = function(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};