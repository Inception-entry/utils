/*
 * @Author: batman
 * @Date: 2022-03-08 16:29:14
 * @LastEditors: batman
 * @LastEditTime: 2022-03-08 16:36:03
 * @Description: 通过url获得图片文件，进而还原成文件流，重新提交，办法太鸡肋，缘由在
 * 后台,
 * 注：本方法使用的前提是，获取服务器url图片不受跨域的制约
 */
/* eslint-disable no-undef */
/* eslint-disable indent */
//根据图片话canvas
const imagetoCanvas = (image) => {
	let cvs = document.createElement('canvas');
	let ctx = cvs.getContext('2d');
	cvs.width = image.width;
	cvs.height = image.height;
	ctx.drawImage(image, 0, 0, cvs.width, cvs.height);
	let base64 = cvs.toDataURL('image/jpeg', 1);
	return { entity: cvs, content: base64 };
};
//canvas转换成文件对象（quality为转换的质量取值0-1）
const canvasResizetoFile = (canvas, quality, callback) => {
	let imageFile = '';
	const _that = this;
	canvas.entity.toBlob(
		function (blob) {
			imageFile = {
				file: new File([blob], `${_that.uuid()}.jpg`, { type: 'image/jpeg', lastModified: Date.now() }),
				content: canvas.content,
				message: '',
				status: '',
			};
			callback(imageFile);
		},
		'image/jpeg',
		quality,
	);
};
//通过网络url加载图片
const urltoImage = (url) => {
	return new Promise((resolve) => {
		if (!url) {
			resolve(null);
		}
		let img = new Image();
		//这一句一定不能少，跨域请求图片必须要的，不然会报错
		img.setAttribute('crossOrigin', 'anonymous');
		img.src = url;
		img.onload = function () {
			let canvas = imagetoCanvas(img);
			canvasResizetoFile(canvas, 0.4, (file) => {
				resolve(file);
			});
		};
	});
};

export { urltoImage };
