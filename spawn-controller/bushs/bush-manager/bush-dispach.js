import { Bush } from "./bushs.class.js";
import { platformList202x56, platformList494x72, platformList500x43 } from "../../platforms/platforms-manager/platform-adjustment.js";
import { theBush } from "./bush-assets.js";
import { checkIfAllBushesAreAdjusted } from "./bush-adjust.js";


export let bushList120x100 = [];


export async function dispachAllBushes() {
    return new Promise((resolve) => {
        for (let i = 0; i < 12; i++) {
            spawnBushes();
        }
        resolve();
    })
};


function spawnBushes() {
    let bush = new Bush({
        image : theBush
    });
    bushList120x100.push(bush);
    dispachBushes(bush);
};





function dispachBushes(bush) {
    let randomFactor = Math.random(); 
    let randomNumber = Math.floor(randomFactor * (300));

    if (randomNumber <= 100) {

        const randomPlatformIndex = Math.floor(Math.random() * platformList494x72.length);
        const randomPlatform = platformList494x72[randomPlatformIndex];  

        bush.placeBushOnRandomPlatform494x72(randomPlatform);

        checkIfAllBushesAreAdjusted(bush, randomPlatform);

    } else if (randomNumber > 100 && randomNumber <= 200) {
        
        const randomPlatformIndex = Math.floor(Math.random() * platformList202x56.length);
        const randomPlatform = platformList202x56[randomPlatformIndex];  
        
        bush.placeBushOnRandomPlatform202x56(randomPlatform);

        checkIfAllBushesAreAdjusted(bush, randomPlatform);

    } else if (randomNumber > 200 && randomNumber <= 300) {
            
        const randomPlatformIndex = Math.floor(Math.random() * platformList500x43.length);
        const randomPlatform = platformList500x43[randomPlatformIndex];  
        
        bush.placeBushOnRandomPlatform202x56(randomPlatform);

        checkIfAllBushesAreAdjusted(bush, randomPlatform);
        
    }
};


