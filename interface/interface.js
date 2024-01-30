export let interfaceVariables = {
    scoreTag : document.getElementById('score'),
    lifeTag : document.getElementById('life'),
    timerTag : document.getElementById('timer'),
    blackScreen : document.querySelector('.blackScreen'),
    loseTag : document.getElementById('lose'),
    winTag : document.getElementById('win'),
    btnRestart : document.querySelector('#reload'),
    progScreen : document.getElementById('container-prog'),
    progBar : document.querySelector('.progress-bar'),
    life : 1,
    score : 0,
    time : 300,
    counter : 0,
    counterDiseapearBigS : 0  // counter for the disappearance of metal platforms
};



interfaceVariables.scoreTag.innerText = "Score" + " : " + interfaceVariables.score;
interfaceVariables.lifeTag.innerText = "Life" + " : " + interfaceVariables.life;
interfaceVariables.timerTag.innerText = "Time" + " : " + interfaceVariables.time;



function timer() {
    let minutes = parseInt(interfaceVariables.time / 60, 10)
    let secondes = parseInt(interfaceVariables.time % 60, 10)
    secondes = secondes < 10 ? "0" + secondes : secondes

    interfaceVariables.timerTag.innerText = minutes + " : " + secondes;

      interfaceVariables.time = interfaceVariables.time <= 0 ? 0 : interfaceVariables.time - 1
  }
  setInterval(timer, 1000)
