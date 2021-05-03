function $(selector) {
	return document.querySelector(selector)
}

function hide(element) {
	if (!element.className.includes('display-none')) {
		element.classList.add('display-none')
	}
}

function show(element) {
	if (element.className.includes('display-none')) {
		element.classList.remove('display-none')
	}
}
