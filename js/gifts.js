class Gift {
	constructor(name, description, color, codes) {
		this.name = name
		this.color = color
		this.description = description
		this.codes = codes
	}

	hasCode(code) {
		return this.codes.includes(code)
	}

	li() {
		const li = document.createElement('li')
		li.classList.add('li-dones')
		li.innerText = this.name
		li.style.background = this.color
		return li
	}

	randomCode() {
		return this.codes[Math.floor(Math.random() * 4)]
	}
}

const consejo = new Gift(
	'Consejo',
	'Orienta nuestros pensamientos, nuestros sentimientos y nuestras intenciones según el corazón de Dios.',
	'#009688',
	['ve', 'ad', 'ng', 'te']
) // teal
const entendimiento = new Gift(
	'Entendimiento',
	'Nos hace crecer día a día en la comprensión de lo que Jesús dijo y realizó. Comprender sus enseñanzas, su Evangelio y su palabra.',
	'#E64A19',
	['xc', 'ga', 'eq', 'wn']
) // orange
const sabiduria = new Gift(
	'Sabiduría',
	'Es el regalo de ver las cosas como el mismo Jesús las ve. Ser sabios para decidir.',
	'#D32F2F',
	['ea', 'gf', 'da', 'jh']
) // red
const fortaleza = new Gift(
	'Fortaleza',
	'Fuerza que viene de Dios para obrar y animarse a hacer grandes cosas.',
	'#673AB7',
	['mn', 'cd', 'rt', 'kb']
) // deep purple
const ciencia = new Gift(
	'Ciencia',
	'Es entender las cosas que nos suceden en la forma en cómo Dios las entiende.',
	'#00BCD4',
	['bg', 'as', 'za', 'vg']
) // cyan
const piedad = new Gift(
	'Piedad',
	'Refleja la pertenencia a Dios y el vínculo con Él, el mismo llena de sentido la vida y mantiene firme frente a la adversidad.',
	'#E91E63',
	['yu', 'qw', 'nb', 'lk']
) // pink
const temorDeDios = new Gift(
	'Temor de Dios',
	'Es reconocernos pequeños, humildes y abandonarnos en la bondad de Dios Padre que nos ama.',
	'#8BC34A',
	['us', 'vr', 'we', 'fa']
) // green

const gifts = [
	consejo,
	entendimiento,
	sabiduria,
	fortaleza,
	ciencia,
	piedad,
	temorDeDios,
]

function randomGift() {
	return gifts[Math.floor(Math.random() * gifts.length)]
}

function giftByName(name) {
	return gifts.find((gift) => gift.name == name)
}

function giftNameByCode(code) {
	return gifts.find((gift) => gift.hasCode(code)).name
}

function receivedGifts() {
	return JSON.parse(localStorage.receivedGifts)
}

function saveReceivedGifts(receivedGifts) {
	localStorage.receivedGifts = JSON.stringify(receivedGifts)
}

function hasGift(giftName) {
	return receivedGifts().includes(giftName)
}

function addGift(giftName) {
	saveReceivedGifts(receivedGifts().concat([giftName]))
}
