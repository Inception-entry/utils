//浮点数乘除法
function muldivfloat(num0, num1, bzstr) {
	var ln0 = getws(num0), //第一个值的的小数位数
		ln1 = getws(num1), //第二个值的的小数位数
		lnz = Math.max(ln0, ln1), //取得小数位数中的最大数
		lncz, //小数位数的统计值
		num0str, //第一个值数字转字符
		num1str, //第二个值数字转字符
		resultz, //计算结果
		lnqh; //除法后结果存储小数

	if (lnz === 0) {
		//如果数字原本就是整形，直接执行计算
		if (bzstr === '*') {
			resultz = Number(num0) * Number(num1);
		} else {
			resultz = Number(num0) / Number(num1);
		}
		return resultz;
	}

	num0str = clearpoint(num0, '.');
	num1str = clearpoint(num1, '.');
	//根据传入的符号来判断是做乘法还是除法运算
	if (bzstr === '*') {
		lncz = ln0 + ln1; //小数位数的总数
		resultz = addwsfront((Number(num0str) * Number(num1str)).toString(), lncz); //对乘法运算后的结果执行位数补全
		return Number(resultz.slice(0, -lncz) + '.' + resultz.slice(-lncz));
	} else {
		lncz = ln0 - ln1; //小数位数的差数
		resultz = Number(num0str) / Number(num1str);
		if (lncz === 0) {
			//如果除数，被除除数小数位相同，即直接返回计算值
			return resultz;
		}
		lnqh = getws(resultz); //除法计算后可能的小数位数
		resultz = clearpoint(resultz, '.'); //除法运算结果去小数位数
		lncz = lncz + lnqh; //最后应该保留的小数位数
		if (lncz > 0) {
			//如果要保留的小数位数不够
			resultz = addwsfront(resultz, lncz); //对计算的结果前补0
			return Number(resultz.slice(0, -lncz) + '.' + resultz.slice(-lncz));
		} else {
			//如果要保留的小数位数小于0
			lncz = Math.abs(lncz);
			resultz = addwsback(resultz, lncz); //对计算的结果后补0
			return Number(resultz);
		}
	}
}
//后补0补够位数
function addwsback(str, len) {
	for (var i = 0; i < len; i++) {
		str = str + '0';
	}
	return str;
}
//前置0补够位数
function addwsfront(str, len) {
	var strlen = str.length,
		cz = len - strlen,
		returnstr = '';
	if (cz <= 0) {
		returnstr = str;
	} else {
		for (var i = 0; i < cz; i++) {
			str = '0' + str;
		}
		returnstr = str;
	}
	return returnstr;
}
//取得小数位数
function getws(num) {
	var ln = '';
	try {
		ln = num.toString().split('.')[1].length; //获取小数位数
	} catch (e) {
		ln = 0;
	}
	return ln;
}
//补全0
function getbq(str, len) {
	for (var i = 0; i < len; i++) {
		str = str + '0';
	}
	return str;
}
//浮点型数去小数点转字符串
function clearpoint(num, str) {
	return num.toString().replace(str, '');
}

export {muldivfloat};
