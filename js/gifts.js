class Gift {
	constructor(name, color) {
		this.name = name
		this.color = color
	}
}

const consejo = new Gift('Consejo', '#009688') // teal
const entendimiento = new Gift('Entendimiento', '#E64A19') // orange
const sabiduria = new Gift('Sabiduría', '#D32F2F') // red
const fortaleza = new Gift('Fortaleza', '#673AB7') // deep purple
const ciencia = new Gift('Ciencia', '#00BCD4') // cyan
const piedad = new Gift('Piedad', '#E91E63') // pink
const temorDeDios = new Gift('Temor de Dios', '#8BC34A') // green

const colors = [
	consejo,
	entendimiento,
	sabiduria,
	fortaleza,
	ciencia,
	piedad,
	temorDeDios,
]

function randomGift() {
	return colors[Math.floor(Math.random() * colors.length)]
}
