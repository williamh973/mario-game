import { player, keys } from "../keyboard.js";
import { canvasParams } from "../canvas.js";
import { loseLife } from "../player-actions/player-interactions.js";
import { getCloserToTheObjects } from "./player-get-closer-objects.js";
import { playerMovesAwayFromObjects } from "./player-moves-away-from-objects.js";

export let scrollOffsetX = 0;
export let scrollOffsetY = 0;

export function objectMovements() {
  if ((keys.ArrowRight.pressed || keys.d.pressed) && player.position.x >= 380) {
    scrollOffsetX += player.speed;
    getCloserToTheObjects();
  } else if ((keys.ArrowLeft.pressed || keys.q.pressed) && scrollOffsetX > 0) {
    scrollOffsetX -= player.speed;

    playerMovesAwayFromObjects();
  }
}

export function canvasTrackingOffsetX() {
  if ((keys.ArrowRight.pressed || keys.d.pressed) && player.position.x < 380) {
    player.velocity.x = player.speed;
  } else if (
    ((keys.ArrowLeft.pressed || keys.q.pressed) && player.position.x > 380) ||
    ((keys.ArrowLeft.pressed || keys.q.pressed) &&
      scrollOffsetX === 0 &&
      player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
  }
}

export function overTheCanvasLimit() {
  if (player.position.y < canvasParams.canvas.height - 590) {
    player.velocity.y = +5;
  } else if (player.position.y >= 522 && scrollOffsetX >= 0) {
    respawnPlayer();
    loseLife();
  }
}

function respawnPlayer() {
  player.position.x = player.position.x - 250;
  player.position.y = player.position.y - 250;
  player.currentSprite = player.sprites.stand.right;
  player.currentCropWidth = player.sprites.stand.cropWidth;
  player.width = player.sprites.stand.width;
}
