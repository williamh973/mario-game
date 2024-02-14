import { platformList500x43 } from "../../platforms/platforms-manager/platform-adjustment.js";
import { Goomba } from "./gombas-class.js";



export let goombasList = [];


export async function dispachGoombas() {
    return new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            spawnGoombas();
        }
        resolve();
    })
};

function spawnGoombas() {
    let goombas = new Goomba();
    goombasList.push(goombas);
    placeGoombas(goombas);
};


function placeGoombas(goombas) {
    
    const randomPlatformIndex = Math.floor(Math.random() * platformList500x43.length);
    const randomPlatform = platformList500x43[randomPlatformIndex];  
    
    goombas.placeGombasnRandomplatformList500x43(randomPlatform);
    goombas.onPlatform = randomPlatform;

};