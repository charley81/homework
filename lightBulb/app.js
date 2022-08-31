const switchBtn = document.querySelector('.btn-switch')
const lightbulb = document.querySelector('.lightbulb')
const title = document.querySelector('h1')

let showLight = false
switchBtn.addEventListener('click', () => {
  if (showLight) {
    lightbulb.classList.remove('active')
    showLight = false
    lightbulb.src = 'http://127.0.0.1:5500/lightBulb/images/light-off.png'
    document.body.style.backgroundColor = 'var(--color-light)'
    title.style.color = 'var(--color-dark)'
  } else {
    showLight = true
    lightbulb.classList.add('active')
    lightbulb.src = 'http://127.0.0.1:5500/lightBulb/images/light-on.png'
    document.body.style.backgroundColor = 'var(--color-dark)'
    title.style.color = 'var(--color-light)'
  }
})
