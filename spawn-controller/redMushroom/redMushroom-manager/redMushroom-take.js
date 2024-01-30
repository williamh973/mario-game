import { player } from "../../../keyboard.js";
import { showParticlesRedMushroom } from "../../particles/particle-redMushroom.js";
import { addLife } from "../../../player-actions/player-interactions.js";
import { redMushroomList } from "./redMushroom-dispach.js";

export function takeRedMushroom() {
    redMushroomList.forEach((redMushroom) => {
        if (
            player.position.y + player.height <= redMushroom.position.y + 60 &&
            player.position.y + player.height + player.velocity.y >= redMushroom.position.y &&
            player.position.x + player.width >= redMushroom.position.x + 25 && 
            player.position.x + player.width <= redMushroom.position.x + redMushroom.width + 25  
        ) {
            redMushroom.position.y = redMushroom.position.y - 500
            showParticlesRedMushroom();
            addLife();
        }
    })
};