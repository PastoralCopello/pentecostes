const fire = $('.fuego')
const splash = $('.splash')
const answer = $('.answer')
const nameLabel = $('.nameLabel')
const modalTitle = $('.modal-title')
const modalDescription = $('.modal-description')
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
	changeColor(myGift.color)
	loadInfo(myGift)
	hide(splash)
	show(answer)
	$('.sc__container').style.height = `${
		scCanvas.getBoundingClientRect().height
	}px`
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
	a.href = `whatsapp://send?text=A mi me tocó el don de ${myGift.name}! Fijate cual te toca a vos! pastoralcopello.github.io/pentecostes`
	a.click()
}

function scratchCompleted() {
	document.documentElement.style.setProperty('--answer-color', myGift.color)
	localStorage.scratchedGift = true
}
