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

// const root = 'http://127.0.0.1:5500'
const root = 'http://pastoralcopello.github.io/pentecostes'

function chequearScratchedGift() {
	if (!localStorage.scratchedGift) {
		window.location = `${root}/fuego`
	}
}

function share() {
	const a = document.createElement('a')
	a.href = `whatsapp://send?text=Te comparto mi don de ${myGift.name}! Fijate cual te toca a vos! pastoralcopello.github.io/pentecostes`
	a.click()
}
