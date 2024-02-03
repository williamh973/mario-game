import { ParticleBlueMushroom } from "../../class/particles/particles-blueMushroom.class.js";
import { player } from "../../keyboard.js";


export let particulesBlueMushroomList = [];


export function showParticlesBlueMushroom(blueMushroom) {

    for(let i = 0; i < 50 ; i++) {
        particulesBlueMushroomList.push(new ParticleBlueMushroom({
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