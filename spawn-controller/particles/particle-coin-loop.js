import { ParticleCoin } from "../../class/particles/particles-coin.class.js";
import { player } from "../../keyboard.js";

export let particulesCoinList = [];

export function showParticlesCoin() {

    for(let i = 0; i < 50 ; i++) {
        particulesCoinList.push(new ParticleCoin({
            position:{
                x: player.position.x + player.width / 2, 
                y: player.position.y + player.height / 2
            },
            velocity:{
                x: ( Math.random() -0.5 ) * 4,
                y: ( Math.random() -0.5 ) * 4
            },
            radius: Math.random() * 1,
            color:'yellow'
        }))
    }
};