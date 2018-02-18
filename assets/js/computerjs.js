/*
SUPPORTED BROWSERS:
  - Chrome 55
  - Firefox 54
  - Safari 10.1
*/

/* 
Only to restart the animation loop every 30 seconds: not needed, but useful
*/
var wrapper = document.querySelector('.mac-wrapper');
setInterval(function () {
  console.log('restart');
  wrapper.classList.remove('start');
  setTimeout(function () {
    wrapper.classList.add('start');
  }, 50);
}, 30000);