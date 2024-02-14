import { goldCoinList } from "../../../spawn-controller/coins/coins-manager/coins-adjustment.js";
import { player } from "../../../keyboard.js";
import { showParticlesCoin } from "../../particles/particles-manager/particle-coin.js";
import { addScore } from "../../../player-actions/player-interactions.js";

export function takeCoin() {
    goldCoinList.forEach((coin) => {
        if (
            player.position.y + player.height <= coin.position.y + 60 &&
            player.position.y + player.height + player.velocity.y >= coin.position.y &&
            player.position.x + player.width >= coin.position.x + 25 && 
            player.position.x + player.width <= coin.position.x + coin.width + 25  
        ) {
            coin.position.y = coin.position.y - 500
            showParticlesCoin();
            addScore();
        }
    })
};