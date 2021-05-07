const receivedGift = receivedGiftName()

if (receivedGift == myGift.name) {
	// is own gift
	alert('Ya te compartieron este don antes!')
} else if (hasGift(receivedGift)) {
	// have already received gift
	alert(`Ya te compartieron este don antes! Es el don de ${receivedGift}`)
} else {
	// haven't received gift yet
	alert(`Te compartieron el don de ${receivedGift}!`)
}

function receivedGiftName() {
	const querystring = window.location.search
	const params = new URLSearchParams(querystring)
	const receivedGiftCode = params.get('code')
	return giftNameByCode(receivedGiftCode)
}
