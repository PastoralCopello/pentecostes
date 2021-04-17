const fire = document.querySelector('.fuego')
const splash = document.querySelector('.splash')
const answer = document.querySelector('.answer')
const nameLabel = document.querySelector('.nameLabel')
const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-description')
let loading = false
let gift = null

function start() {
	if (!loading) {
		loading = true
		fire.src = 'images/fire.gif'
		setTimeout(() => {
			getGift()
		}, 3000)
	}
}

function getGift() {
	gift = randomGift()
	changeColor(gift.color)
	loadInfo(gift)
	hide(splash)
	show(answer)
}

function hide(element) {
	if (!element.className.includes('hidden')) {
		element.classList.add('hidden')
	}
}

function show(element) {
	if (element.className.includes('hidden')) {
		element.classList.remove('hidden')
	}
}

function changeColor(someColor) {
	document.documentElement.style.setProperty('--gift-color', someColor)
}

function loadInfo(someGift) {
	nameLabel.innerText = someGift.name
	// modalDescription.innerText = gift.description
	modalTitle.innerText = someGift.name
}

function share() {
	const a = document.createElement('a')
	a.href = `whatsapp://send?text=A mi me tocó el don de ${gift.name}! Fijate cual te toca a vos! pastoralcopello.github.io/pentecostes`
	a.click()
}
