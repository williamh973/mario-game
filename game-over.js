import { interfaceVariables } from "./interface/interface.js";
import { player } from "./keyboard.js";


export function timeUp() {
    if(interfaceVariables.time === 0) {
        interfaceVariables.blackScreen.style.display = "flex";
        interfaceVariables.loseTag.style.display = "block";
        interfaceVariables.winTag.style.display = "none";
        interfaceVariables.btnRestart.style.display = "block";
        player.isBlocked();
    }
};
