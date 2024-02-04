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
            player.velocity.y = - 7;

            showParticlesBlueMushroom(blueMushroom);
            loseLife();    
        }
    });
};


export function collideOnBelowBlueMushroom() {
    blueMushroomList.forEach((blueMushroom) => {
        if (
            player.position.y + player.height >= blueMushroom.position.y &&
            player.position.y <= blueMushroom.position.y + blueMushroom.height &&
            player.position.x + player.width >= blueMushroom.position.x &&
            player.position.x <= blueMushroom.position.x + blueMushroom.width
        ) {
            player.velocity.y = +7;

            showParticlesBlueMushroom(blueMushroom);
            loseLife();    
        }
    });
};



function respawnPlayer(blueMushroom) {
    if ((keys.ArrowRight.pressed || keys.d.pressed)) {
        player.position.x = blueMushroom.position.x - player.width - 50;
        loseLife();
    } else if ((keys.ArrowLeft.pressed || keys.q.pressed)) {
        player.position.x = blueMushroom.position.x + blueMushroom.width + 50;
        loseLife();
    }
}

