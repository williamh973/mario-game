import { Bush, theBush } from "./bushs.class.js";
import { platformList202x56, platformList494x72 } from "../../platforms/platforms-manager/platform-adjustment.js";


export let bushList120x100 = [];


export async function dispachAllBushes() {
    return new Promise((resolve) => {
        for (let i = 0; i < 8; i++) {
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
    let randomNumber = Math.floor(randomFactor * (200));

    if (randomNumber <= 100) {

        const randomPlatformIndex = Math.floor(Math.random() * platformList494x72.length);
        const randomPlatform = platformList494x72[randomPlatformIndex];  

        bush.placeBushOnRandomPlatform494x72(randomPlatform);
        
        if (
            bush.position.x + bush.width > 
            randomPlatform.position.x + randomPlatform.width
            ) {
                bush.position.x - 150
                console.log(bush.position.x, "bush trop à droite, repositionné !"); 
    }
    } else if (randomNumber > 100 && randomNumber <= 200) {
        
        const randomPlatformIndex = Math.floor(Math.random() * platformList202x56.length);
        const randomPlatform = platformList202x56[randomPlatformIndex];  
        
        bush.placeBushOnRandomPlatform202x56(randomPlatform);
        bush.platform = randomPlatform;
 
        if (
            bush.position.x + bush.width > 
            randomPlatform.position.x + randomPlatform.width
            ) {
                bush.position.x - 100
                console.log(bush.position.x, "bush trop à droite, repositionné !"); 
    }

}
};


