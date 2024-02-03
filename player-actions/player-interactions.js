import { interfaceVariables } from "../interface/interface.js";


export function substractLife() {
    interfaceVariables.life -= 1;
    interfaceVariables.lifeTag.innerText = "Life" + " : " + interfaceVariables.life;
}

export function addLife() {
    interfaceVariables.life += 1;
    interfaceVariables.lifeTag.innerText = "Life" + " : " + interfaceVariables.life;
}

export function addScore() {
    interfaceVariables.score += 7;
    interfaceVariables.scoreTag.innerText = "Score" + " : " + interfaceVariables.score;
}

export function loseLife() {
    interfaceVariables.life -= 1;
    interfaceVariables.lifeTag.innerText = "Life" + " : " + interfaceVariables.life;
}







