import { platformList494x72, platformList500x43 } from "../platforms/platforms-manager/platform-adjustment.js";
import { checkIfAllHousesAreAdjusted } from "./houses-adjust.js";
import { theHouse02, theHouse03 } from "./houses-assets.js";
import { House } from "./houses.class.js";


export let houseList = [];


export async function dispachHouses() {
    return new Promise((resolve) => {
        for (let i = 0; i < 1; i++) {
            spawnGreenHouses();
        }
        resolve();
    })
};

function spawnGreenHouses() {
    let house = new House({
        image : theHouse03
    });
    houseList.push(house);
    placeGreenHouses(house);
};

function placeGreenHouses(house) {
    const randomPlatformIndex = Math.floor(Math.random() * platformList500x43.length);
    const randomPlatform = platformList500x43[randomPlatformIndex];  
    
    house.placeHouseOnRandomPlatform500x43(randomPlatform);

    checkIfAllHousesAreAdjusted(house, randomPlatform);

};


