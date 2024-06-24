import { interfaceVariables } from "../../../interface/interface.js";
import { keys, player } from "../../../keyboard.js";
import { loseLife } from "../../../player-actions/player-interactions.js";
import { showParticlesGoomba } from "../../particles/particles-manager/particle-goomba.js";
import { goombasList } from "./gombas-dispach.js";

export function collideOnTheLeftOrRightGoombas() {
  goombasList.forEach((goomba) => {
    if (
      player.position.y + player.height >= goomba.position.y &&
      player.position.y <= goomba.position.y + goomba.height &&
      player.position.x + player.width >= goomba.position.x &&
      player.position.x <= goomba.position.x + goomba.width
    ) {
      respawnPlayer(goomba);
    }
  });
}

export function collideOnTheTopGoombas() {
  goombasList.forEach((goomba) => {
    if (
      player.position.y + player.height <= goomba.position.y + 1 &&
      player.position.y + player.height + player.velocity.y >=
        goomba.position.y &&
      player.position.x + player.width >= goomba.position.x &&
      player.position.x <= goomba.position.x + goomba.width
    ) {
      player.velocity.y = -7;
      showParticlesGoomba(goomba);
      goomba.shooted();

      interfaceVariables.enemies -= 1;
      interfaceVariables.enemiesTag.innerText =
        "Enemies" + " : " + interfaceVariables.enemies;
    }
  });
}

export function collideOnBelowGoombas() {
  goombasList.forEach((goomba) => {
    if (
      player.position.y + player.height >= goomba.position.y &&
      player.position.y <= goomba.position.y + goomba.height &&
      player.position.x + player.width >= goomba.position.x &&
      player.position.x <= goomba.position.x + goomba.width
    ) {
      player.velocity.y = +7;

      showParticlesGoomba(goomba);
      loseLife();
    }
  });
}

function respawnPlayer(goomba) {
  if (keys.ArrowRight.pressed || keys.d.pressed) {
    player.position.x = goomba.position.x - player.width - 50;
    loseLife();
  } else if (keys.ArrowLeft.pressed || keys.q.pressed) {
    player.position.x = goomba.position.x + goomba.width + 50;
    loseLife();
  }
}
