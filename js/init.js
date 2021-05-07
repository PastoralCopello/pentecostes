let myGift = null
// let receivedGifts = null
// let newGift = null

if (localStorage.myGift) {
	// newGift = false
	const giftName = localStorage.myGift
	myGift = giftByName(giftName)
	document.documentElement.style.setProperty('--midon-color', myGift.color)
} else {
	// newGift = true
	myGift = randomGift()
	localStorage.myGift = myGift.name
}

if (!localStorage.receivedGifts) {
	saveReceivedGifts([myGift.name])
}
