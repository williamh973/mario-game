import { Particle } from "./particle-class.js";


export let particulesGoombaList = [];


export function showParticlesGoomba(goomba) {

    for(let i = 0; i < 7 ; i++) {
        particulesGoombaList.push(new Particle({
            position: {
                x: goomba.position.x + goomba.width / 2, 
                y: goomba.position.y + goomba.height / 2
            },
            velocity: {
                x: ( Math.random() -0.5 ) * 4,
                y: ( Math.random() -0.5 ) * 4
            },
            radius: Math.random() * 3,
            color:'purple'
        }))
    }
};