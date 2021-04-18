const fire = document.querySelector('.fuego')
const splash = document.querySelector('.splash')
const answer = document.querySelector('.answer')
const nameLabel = document.querySelector('.nameLabel')
const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-description')
let loading = false

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
	changeColor(gift.color)
	loadInfo(gift)
	hide(splash)
	show(answer)
	document.querySelector('.sc__container').style.height = `${scCanvas.getBoundingClientRect().height}px`

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

function changeColor(someColor) {
	document.documentElement.style.setProperty('--gift-color', someColor)
}

function loadInfo(someGift) {
	// nameLabel.innerText = someGift.name
	modalDescription.innerText = someGift.description
	modalTitle.innerText = someGift.name
}

function share() {
	const a = document.createElement('a')
	a.href = `whatsapp://send?text=A mi me tocó el don de ${gift.name}! Fijate cual te toca a vos! pastoralcopello.github.io/pentecostes`
	a.click()
}

function scratchCompleted() {
	document.documentElement.style.setProperty('--answer-color', gift.color)
}