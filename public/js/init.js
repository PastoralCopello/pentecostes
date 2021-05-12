let myGift = null
let lastVersion = '0.1'

if (localStorage.version) {
	if (localStorage.version != lastVersion) {
		localStorage.clear()
		localStorage.version = lastVersion
	}
} else {
	localStorage.clear()
	localStorage.version = lastVersion
}

if (localStorage.myGift) {
	const giftName = localStorage.myGift
	myGift = giftByName(giftName)
} else {
	myGift = randomGift()
	localStorage.myGift = myGift.name
}

document.documentElement.style.setProperty('--midon-color', myGift.color)

if (!localStorage.receivedGifts) {
	saveReceivedGifts([myGift.name])
}
