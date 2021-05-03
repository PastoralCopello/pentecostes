let myGift = null
// let receivedGifts = null
// let newGift = null

if (localStorage.myGift) {
	// newGift = false
	const giftName = localStorage.myGift
	myGift = giftByName(giftName)
} else {
	// newGift = true
	myGift = randomGift()
	localStorage.myGift = myGift.name
}

if (!localStorage.receivedGifts) {
	saveReceivedGifts([])
}

// if (!newGift) {
// 	$('.raspa').innerText = '¡Ya tenés tu don!'
// }
