const switchBtn = document.querySelector('.btn-switch')
const lightbulb = document.querySelector('.lightbulb')
const title = document.querySelector('h1')

const switchLight = e => {
  if (e.target.classList.value.split(' ').includes('on')) {
    e.target.classList.remove('on')
    document.body.style.backgroundColor = 'red'
    lightbulb.src = lightbulb.src =
      'http://127.0.0.1:5500/lightBulb/images/light-off.png'
  } else {
    switchBtn.classList.add('on')
    lightbulb.src = lightbulb.src =
      'http://127.0.0.1:5500/lightBulb/images/light-on.png'
  }
}

switchBtn.addEventListener('click', switchLight)
