//深拷贝
const deepcopy = (source) => {
	if (!source) {
		return source;
	}
	let sourceCopy = source instanceof Array ? [] : {};
	for (let item in source) {
		sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item];
	}
	return sourceCopy;
};

export { deepcopy };
