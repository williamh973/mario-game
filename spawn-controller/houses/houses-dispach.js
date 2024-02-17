import { platformList202x56, platformList494x72, platformList500x43 } from "../platforms/platforms-manager/platform-adjustment.js";
import { checkIfAllHousesAreAdjusted } from "./houses-adjust.js";
import { theHouse01, theHouse02, theHouse03 } from "./houses-assets.js";
import { House } from "./houses.class.js";


export let houseList = [];


export async function dispachHouses() {
    return new Promise((resolve) => {
        for (let i = 0; i < 1; i++) {
            spawnYellowHouses();
            spawnBrownHouses();
            spawnGreenHouses();
        }
        resolve();
    })
};


function spawnYellowHouses() {
    let house = new House({
        image : theHouse01
    });
    houseList.push(house);
    placeHouses(house);
};

function spawnBrownHouses() {
    let house = new House({
        image : theHouse02
    });
    houseList.push(house);
    placeHouses(house);
};

function spawnGreenHouses() {
    let house = new House({
        image : theHouse03
    });
    houseList.push(house);
    placeHouses(house);
};


function placeHouses(house) {
    let randomFactor = Math.random(); 
    let randomNumber = Math.floor(randomFactor * (200));

    if (randomNumber <= 100) {

        const randomPlatformIndex = Math.floor(Math.random() * platformList494x72.length);
        const randomPlatform = platformList494x72[randomPlatformIndex];  

        house.placeHouseOnRandomPlatform494x72(randomPlatform);

        checkIfAllHousesAreAdjusted(house, randomPlatform);
        
    } else if (randomNumber > 100 && randomNumber <= 200) {
        
        const randomPlatformIndex = Math.floor(Math.random() * platformList500x43.length);
        const randomPlatform = platformList500x43[randomPlatformIndex];  
        
        house.placeHouseOnRandomPlatform500x43(randomPlatform);

        checkIfAllHousesAreAdjusted(house, randomPlatform);
    } 

};


