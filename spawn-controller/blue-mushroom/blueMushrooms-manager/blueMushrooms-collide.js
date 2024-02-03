import { keys, player } from "../../../keyboard.js";
import { loseLife } from "../../../player-actions/player-interactions.js";
import { showParticlesBlueMushroom } from "../../particles/particle-blueMushroom.js";
import { blueMushroomList } from "./blueMushrooms-dispach.js";

export function collideOnTheLeftOrRightBlueMushroom() {
    blueMushroomList.forEach((blueMushroom) => {
        if ((            
            player.position.y + player.height >= blueMushroom.position.y &&
            player.position.y <= blueMushroom.position.y + blueMushroom.height &&
            player.position.x + player.width >= blueMushroom.position.x &&
            player.position.x <= blueMushroom.position.x + blueMushroom.width
        
        ))
        {
            console.log("touché");
            respawnPlayer(blueMushroom);
        }
    })
};



export function collideOnTheTopBlueMushroom() {
    blueMushroomList.forEach((blueMushroom) => {
        if (
            player.position.y + player.height <= blueMushroom.position.y + 5 &&
            player.position.y + player.height + player.velocity.y >= blueMushroom.position.y + 5 &&
            player.position.x + player.width >= blueMushroom.position.x &&
            player.position.x <= blueMushroom.position.x + blueMushroom.width
        ) {
            console.log("touché par le haut");
            player.velocity.y = - 7;

            showParticlesBlueMushroom(blueMushroom);
            loseLife();    
        }
    });
}



function respawnPlayer(blueMushroom) {
    if (player.velocity.x > 0) {
        console.log("côté gauche");
        player.position.x = blueMushroom.position.x - player.width - 50; 
        loseLife();
    } else if (player.velocity.x < 0) {
        console.log("côté droit");
        player.position.x = blueMushroom.position.x + blueMushroom.width + 50;
        loseLife();
    }
}

