import { Particle } from "./particle-class.js";
import { particulesBombList } from "./particle-list.js";


export function showParticlesBomb(blueMushroom) {

    for(let i = 0; i < 70 ; i++) {
        particulesBombList.push(new Particle({
            position: {
                x: blueMushroom.position.x + blueMushroom.width / 2, 
                y: blueMushroom.position.y + blueMushroom.height / 2
            },
            velocity: {
                x: ( Math.random() -0.5 ) * 5,
                y: ( Math.random() -0.5 ) * 5
            },
            radius: Math.random() * 2,
            color:'blue'
        }))
    }
};