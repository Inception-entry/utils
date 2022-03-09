/*
 * @Author: batman
 * @Date: 2022-03-08 14:44:34
 * @LastEditors: batman
 * @LastEditTime: 2022-03-08 15:31:02
 * @Description:压缩图片的一些方法
 */
/* eslint-disable no-undef */
/* eslint-disable indent */
// 压缩图片
const dealImage = (path, obj, callback) => {
	return new Promise((resolve) => {
		var img = new Image();
		img.src = path;
		img.onload = function () {
			var that = this;
			// 默认按比例压缩
			var w = that.width;
			var h = that.height;
			var scale = w / h;
			w = obj.width || w;
			h = obj.height || w / scale;
			var quality = 0.7; // 默认图片质量为0.7
			// 生成canvas
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');
			// 创建属性节点
			var anw = document.createAttribute('width');
			anw.nodeValue = w;
			var anh = document.createAttribute('height');
			anh.nodeValue = h;
			canvas.setAttributeNode(anw);
			canvas.setAttributeNode(anh);
			ctx.drawImage(that, 0, 0, w, h);
			// 图像质量
			if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
				quality = obj.quality;
			}
			// quality值越小，所绘制出的图像越模糊
			var base64 = canvas.toDataURL('image/jpeg', quality);
			// 回调函数返回base64的值
			callback(base64);
			resolve(base64);
		};
	});
};
const uuid = () => {
	var temp_url = URL.createObjectURL(new Blob());
	var uuid = temp_url.toString();
	URL.revokeObjectURL(temp_url);
	return uuid.substr(uuid.lastIndexOf('/') + 1).toUpperCase();
};
const base64ToFile = (base64, filename) => {
	let arr = base64.split(',');
	let mime = arr[0].match(/:(.*?);/)[1];
	let suffix = mime.split('/')[1];
	let bstr = atob(arr[1]);
	let n = bstr.length;
	let u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], `${filename}.${suffix}`, {
		type: mime,
	});
};
// 图片压缩成base64，再转换成文件流 FIle ，重新用uuid命名后返回
const handleImg = async (file) => {
	const size = Math.ceil(file.file.size / 1024 / 1024);
	let base64Code = '';
	// 增加策略压缩
	switch (size) {
		case 0:
		case 1:
		case 2:
		case 3:
			return file.file;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			// 0.4比例压缩
			file.quality = 0.4;
			await dealImage(file.content, file, (base64) => {
				base64Code = base64;
			});
			break;
		default:
			// 0.4比例压缩
			file.quality = 0.4;
			await dealImage(file.content, file, (base64) => {
				base64Code = base64;
			});
	}
	return base64ToFile(base64Code, uuid());
};

export { handleImg };
