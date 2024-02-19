export let interfaceVariables = {
    scoreTag : document.getElementById('score'),
    userNameTag : document.getElementById('user-name'),
    enemiesTag : document.getElementById('enemies'),
    bombsTag : document.getElementById('bombs'),
    lifeTag : document.getElementById('life'),
    timerTag : document.getElementById('timer'),
    blackScreen : document.querySelector('.blackScreen'),
    loseTag : document.getElementById('lose'),
    winTag : document.getElementById('win'),
    btnRestart : document.querySelector('#reload'),
    progScreen : document.getElementById('container-prog'),
    progBar : document.querySelector('.progress-bar'),
    score : 0,
    userName : "mario",
    enemies : 0,
    bombs : 10,
    life : 2,
    time : 300,
    counter : 0,
    counterDiseapearBigS : 0  // counter for the disappearance of metal platforms
};


function displayInfos() {
   interfaceVariables.scoreTag.innerText = "Score" + " : " + interfaceVariables.score;
   interfaceVariables.lifeTag.innerText = "Life" + " : " + interfaceVariables.life;
   interfaceVariables.timerTag.innerText = "Time" + " : " + interfaceVariables.time;
   interfaceVariables.userNameTag.innerText = interfaceVariables.userName;
   interfaceVariables.enemiesTag.innerText = "Enemies" + " : " + interfaceVariables.enemies;
   interfaceVariables.bombsTag.innerText = "Bombs" + " : " + interfaceVariables.bombs;
};
displayInfos();

 function timer() {
    let minutes = parseInt(interfaceVariables.time / 60, 10)
    let secondes = parseInt(interfaceVariables.time % 60, 10)
    secondes = secondes < 10 ? "0" + secondes : secondes

    interfaceVariables.timerTag.innerText = "Time  " + minutes + " : " + secondes;
    interfaceVariables.time = interfaceVariables.time <= 0 ? 0 : interfaceVariables.time - 1
  };
  setInterval(timer, 1000);



