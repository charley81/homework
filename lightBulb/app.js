const switchBtn = document.querySelector('.btn-switch')
const lightbulb = document.querySelector('.lightbulb')
const title = document.querySelector('h1')
const audio = document.querySelector('#audio')

let showLight = false
switchBtn.addEventListener('click', () => {
  audio.play()
  if (showLight) {
    showLight = false
    lightbulb.src = 'http://127.0.0.1:5500/lightBulb/images/light-off.png'
    document.body.style.backgroundColor = 'var(--color-light)'
    title.style.color = 'var(--color-dark)'
  } else {
    showLight = true
    lightbulb.src = 'http://127.0.0.1:5500/lightBulb/images/light-on.png'
    document.body.style.backgroundColor = 'var(--color-dark)'
    title.style.color = 'var(--color-light)'
  }
})
