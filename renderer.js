const moment = require('moment')
moment.locale('zh-cn')

function setTime () {
  document.querySelector('#time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a')
  window.requestAnimationFrame(setTime)
}

window.requestAnimationFrame(function () {
  setTime()
})
