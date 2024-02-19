import { Particle } from "./particle-class.js";
import { particulesBlueMushroomList } from "./particle-list.js";


export function showParticlesBlueMushroom(blueMushroom) {

    for(let i = 0; i < 50 ; i++) {
        particulesBlueMushroomList.push(new Particle({
            position: {
                x: blueMushroom.position.x + blueMushroom.width / 2, 
                y: blueMushroom.position.y + blueMushroom.height / 2
            },
            velocity: {
                x: ( Math.random() -0.5 ) * 4,
                y: ( Math.random() -0.5 ) * 4
            },
            radius: Math.random() * 1,
            color:'blue'
        }))
    }
};