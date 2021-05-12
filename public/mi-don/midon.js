const midon = $('.midon')
const nameLabel = $('.nameLabel')
const modalTitle = $('.modal-title')
const modalDescription = $('.modal-description')

loadInfo(myGift)

function loadInfo(someGift) {
	modalDescription.innerText = someGift.description
	modalTitle.innerText = someGift.name
}

function scratchCompleted() {
	document.documentElement.style.setProperty(
		'--body-background-color',
		myGift.color
	)
	localStorage.scratchedGift = true
}
