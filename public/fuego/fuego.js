const fire = $('.fuego')

let loading = false

function start() {
	if (!loading) {
		loading = true
		fire.src = '../images/fire.gif'
		setTimeout(() => {
			if (localStorage.scratchedGift) {
				window.location = `${root}/menu`
			} else {
				window.location = `${root}/mi-don`
			}
		}, 3000)
	}
}
