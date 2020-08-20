import idNoCheck from './idNoCheck';
// 校验身份证号
const isIdNo = (str) => {
	return idNoCheck.isIdno(str);
};

export { isIdNo };
