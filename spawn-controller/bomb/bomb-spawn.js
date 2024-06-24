import { interfaceVariables } from "../../interface/interface.js";
import { isRightDirection, player } from "../../keyboard.js";
import { substractBomb } from "../../player-actions/player-interactions.js";
import { Bomb } from "./bomb.class.js";

export let bombList = [];

export let bombPosition = { x: 0, y: 0 };
export let bomb = new Bomb(bombPosition);

export function spawnBomb() {
  if (interfaceVariables.bombs > 0) {
    bombPosition = { x: player.position.x, y: player.position.y };
    bomb = new Bomb(bombPosition);

    if (!isRightDirection) {
      bomb.reverseDirection();
    }
    bombList.push(bomb);

    substractBomb();
  }
}
