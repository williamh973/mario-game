
export let gameVariables = {
scoreTag : document.getElementById('score'),
lifeTag : document.getElementById('vie'),
timerTag : document.getElementById('timer'),
blackScreen : document.querySelector('.blackScreen'),
loseTag : document.getElementById('lose'),
winTag : document.getElementById('win'),
btnRestart : document.querySelector('#reload'),
progScreen : document.getElementById('container-prog'),
progBar : document.querySelector('.progress-bar'),
vie : 1,
stock : 0,
time : 300,
counter : 0,
counterDiseapearBigS : 0  // counter for the disappearance of metal platforms
};