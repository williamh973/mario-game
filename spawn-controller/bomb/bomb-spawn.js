import { interfaceVariables } from "../../interface/interface.js";
import { isRightDirection, player } from "../../keyboard.js";
import { allPlatformList } from "../platforms/platforms-manager/platforms-list.js";
import { Bomb } from "./bomb.class.js";

export let bombList = [];

export let bombPosition = { x: 0, y: 0 };
export let bomb = new Bomb(bombPosition);

export function spawnBomb() {
    if (interfaceVariables.bombs > 0) {
        bombPosition = { x: player.position.x, y: player.position.y };
        bomb = new Bomb(bombPosition);
        console.log(bomb.position);
        if (!isRightDirection) {
            bomb.reverseDirection();
        }
        bombList.push(bomb);
        
        interfaceVariables.bombs -= 1;
        interfaceVariables.bombsTag.innerText = "Bombs: " + interfaceVariables.bombs;
    }
};

