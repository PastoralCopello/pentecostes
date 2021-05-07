const midon = $('.midon')
const nameLabel = $('.nameLabel')
const modalTitle = $('.modal-title')
const modalDescription = $('.modal-description')
// const modalShareButton = $('.btn-modal-share')

// document.documentElement.style.setProperty('--midon-color', myGift.color)
loadInfo(myGift)
// getGift()

function getGift() {
	changeColor(myGift.color)
	show(midon)
	$('.sc__container').style.height = `${
		scCanvas.getBoundingClientRect().height
	}px`
}

function loadInfo(someGift) {
	// nameLabel.innerText = someGift.name
	modalDescription.innerText = someGift.description
	modalTitle.innerText = someGift.name
}

function scratchCompleted() {
	document.documentElement.style.setProperty('--midon-full-color', myGift.color)
	localStorage.scratchedGift = true
}
