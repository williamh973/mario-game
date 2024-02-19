import { interfaceVariables } from "../../../interface/interface.js";
import { platformList494x72, platformList500x43 } from "../../platforms/platforms-manager/platform-adjustment.js";
import { Goomba } from "./gombas-class.js";



export let goombasList = [];


export async function dispachGoombas() {
    return new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            spawnGoombas();
            interfaceVariables.enemies += 1;
            interfaceVariables.enemiesTag.innerText = "Enemies" + " : " + interfaceVariables.enemies;
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
    
    const randomPlatformIndex500x43 = Math.floor(Math.random() * platformList500x43.length);
    const randomPlatform500x43 = platformList500x43[randomPlatformIndex500x43];  

    const randomPlatformIndex494x72 = Math.floor(Math.random() * platformList494x72.length);
    const randomPlatform494x72 = platformList494x72[randomPlatformIndex494x72];  

    let randomFactor = Math.random();
    let randomNumber = Math.floor(randomFactor * (200)); 


    if (randomNumber <= 100) {
        goombas.placeGoombasRandomPlatformList500x43(randomPlatform500x43);
        goombas.onPlatform = randomPlatform500x43;
    } else if (randomNumber > 100 && randomNumber <= 200) {
        goombas.placeGoombasRandomPlatformList494x72(randomPlatform494x72);
        goombas.onPlatform = randomPlatform494x72;
    }

};