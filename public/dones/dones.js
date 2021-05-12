chequearScratchedGift()

const ulDones = $('.ul-dones')
const giftCount = $('.gift-count')

const modalTitle = $('.modal-title')
const modalDescription = $('.modal-description')

const modalShareButton = $('.btn-modal-share')

const descriptionModal = new bootstrap.Modal(
	document.getElementById('descriptionModal'),
	{
		keyboard: false,
	}
)

loadGifts()

ulDones.addEventListener('click', (e) => {
	const selectedgiftName = e.target.innerText
	const selectedGift = giftByName(selectedgiftName)
	modalDescription.innerText = selectedGift.description
	modalTitle.innerText = selectedGift.name

	if (selectedGift != myGift) {
		hide(modalShareButton)
	} else {
		show(modalShareButton)
	}
	descriptionModal.toggle()
	descriptionModal.show()
})

function loadGifts() {
	const giftsNames = receivedGifts()
	const giftsAmount = giftsNames.length
	giftCount.innerText = `${giftsAmount} / 7`

	const gifts = giftsNames.map((name) => giftByName(name))
	const liItems = gifts.map((gift) => gift.li())

	liItems.forEach((li) => ulDones.appendChild(li))
}
