import { player } from "../../../keyboard.js";
import { Particle } from "./particle-class.js";
import { particulesRedMushroomList } from "./particle-list.js";


export function showParticlesRedMushroom() {

    for(let i = 0; i < 50 ; i++) {
        particulesRedMushroomList.push(new Particle({
            position:{
                x: player.position.x + player.width / 2, 
                y: player.position.y + player.height / 2
            },
            velocity:{
                x: ( Math.random() -0.5 ) * 4,
                y: ( Math.random() -0.5 ) * 4
            },
            radius: Math.random() * 1,
            color:'white'
        }))
    }
};