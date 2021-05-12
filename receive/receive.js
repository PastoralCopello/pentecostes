const receivedGift = receivedGiftName()
console.log(receivedGift)

if (receivedGift == myGift.name) {
	// is own gift
	alert(`Te compartieron tu propio don! El don de ${receivedGift}`)
} else if (hasGift(receivedGift)) {
	// have already received gift
	alert(`Ya te compartieron este don antes! Es el don de ${receivedGift}`)
} else {
	// haven't received gift yet
	alert(`Te compartieron el don de ${receivedGift}!`)
	addGift(receivedGift)
}

window.location = `${root}/dones`

function receivedGiftName() {
	const querystring = window.location.search
	const params = new URLSearchParams(querystring)
	const receivedGiftCode = params.get('code')
	console.log(receivedGiftCode)
	return giftNameByCode(receivedGiftCode)
}
