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
    // alert('Now the window will reload !')
    // window.location.reload()
    scratchCompleted()
    scContainer.classList.remove('scratch-border')
    scInfos.classList.add('visibility-hidden')
    document.querySelector('.answer-buttons').classList.remove('visibility-hidden')
    document.querySelector('.raspa').classList.add('visibility-hidden')
  }
})

// Init
sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
    scInfos.innerHTML = percent + '% / 30%';
    console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});