const text = document.getElementById('text')
const container = document.getElementById('container')

const totalTime = 12000
const breatheTime = (totalTime / 6) * 2
const holdTime = breatheTime

function breatheAnimation() {
  text.innerText = 'Breathe In '
  container.className = 'container grow'
  setTimeout(() => {
    text.innerText = 'Hold'
    setTimeout(() => {
      text.innerText = 'Breathe Out'
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}

setInterval(breatheAnimation, totalTime);