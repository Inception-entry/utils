class Hook {
	constructor() {
		this.hookFns = [];
	}
	reg(fn) {
		this.hookFns.push(fn);
	}
	call(...args) {
		this.hookFns.forEach((fn) => fn(...args));
	}
}

export { Hook };
