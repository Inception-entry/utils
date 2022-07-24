import Hook from './syncHook';
class PromiseHook extends Hook {
	call(...args) {
		return new Promise((resolve) => {
			const fns = this.hookFns;
			let i = fns.length;
			let next = resolve;
			while (i) {
				let fn = fns[--i];
				let _next = next;
				next = () => fn(...args).then(_next);
			}
			next();
		});
	}
	callParallel(...args) {
		return new Promise((resolve) => {
			const fns = this.hookFns;
			let count = fns.length;
			let _done = () => {
				count--;
				if (count === 0) {
					resolve();
				}
			};
			fns.forEach((fn) => fn(...args).then(_done));
		});
	}
	callParallelN(...args) {
		return new Promise((resolve) => {
			const fns = this.hookFns;
			let count = fns.length;
			let cur = 0;
			let limit = N < fns.length ? N : fns.length;
			let _done = () => {
				count--;
				if (count === 0) {
					resolve();
				} else {
					if (cur < fns.length) {
						fns[cur++](...args).then(_done);
					}
				}
			};
			for (; cur < limit; cur++) {
				fns[cur](...args).then(_done);
			}
		});
	}
}

export { PromiseHook };
