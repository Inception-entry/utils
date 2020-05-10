function debounce(cb, wait = 3000, immediate = false) {
	let timeout;

	return function(...args) {
		let callNow = immediate && !timeout;

		if (timeout) clearTimeout(timeout);

		timeout = setTimeout(() => {
			timeout = null;

			if (!immediate) cb.apply(this, args);
		}, wait);

		if (callNow) cb.apply(this, args);
	};
}

export {debounce};
