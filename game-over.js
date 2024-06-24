import { interfaceVariables } from "./interface/interface.js";
import { player } from "./keyboard.js";

export function gameOver() {
  if (interfaceVariables.time === 0 || interfaceVariables.life < 0) {
    openMenu();
    player.isBlocked();
  }
}

function openMenu() {
  interfaceVariables.blackScreen.style.display = "flex";
  interfaceVariables.loseTag.style.display = "block";
  interfaceVariables.winTag.style.display = "none";
  interfaceVariables.btnRestart.style.display = "block";
}
