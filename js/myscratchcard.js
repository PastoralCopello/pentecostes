const scContainer = document.getElementById('js--sc--container')
const scInfos = document.querySelector('.sc__infos');
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.SPRAY,
  // containerWidth: scContainer.offsetWidth,
  containerWidth: 500,
  containerHeight: 300,
  brushSrc: '',
  imageForwardSrc: 'https://masth0.github.io/ScratchCard/images/scratchcard.jpg',
  imageBackgroundSrc: '',
  htmlBackground: `<div class="inner_html"><h3 class="nameLabel">${gift.name}</h3></div>`,
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    scratchCompleted()
    scContainer.classList.remove('scratch-border')
    scInfos.classList.add('visibility-hidden')
    document.querySelector('.answer-buttons').classList.remove('visibility-hidden')
    document.querySelector('.raspa').classList.add('visibility-hidden')
  }
})

const scCanvas = document.querySelector('.sc__canvas')

// Init
sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    const percent = sc.getPercent().toFixed(0);
    const percentToShow = Math.min(percent, 25)
    scInfos.innerHTML = percentToShow * 4 + '% / 100%';
    console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});