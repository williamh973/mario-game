import { RedMushroom } from "./redMushroom.class.js";
import { platformList150x72, platformList202x56, platformList494x72, platformList84x72 } from "../../platforms/platforms-manager/platform-adjustment.js";

export let redMushroomList = [];


export async function dispachAllRedMushroom() {
    return new Promise((resolve) => {
        for (let i = 0; i < 2; i++) {
            spawnRedMushroom();
        }
        resolve();
    })
};
        

function spawnRedMushroom() {
    let redMushroom = new RedMushroom();
    redMushroomList.push(redMushroom);
    dispachRedMushroom(redMushroom);
};
            

function dispachRedMushroom(redMushroom) {
        let randomFactor = Math.random(); 
        let randomNumber = Math.floor(randomFactor * (400));
    
        if (randomNumber <= 100) {
            
            for (let i = 0; i < redMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList494x72.length);
                const randomPlatform = platformList494x72[randomPlatformIndex];  
    
                redMushroom.placeRedMushroomOnRandomPlatform494x72(randomPlatform);

            }
        } else if (randomNumber > 100 && randomNumber <= 200) {

            for (let i = 0; i < redMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList150x72.length);
                const randomPlatform = platformList150x72[randomPlatformIndex];
                
                redMushroom.placeRedMushroomOnRandomPlatform150x72(randomPlatform);

            }

        } else if (randomNumber > 200 && randomNumber <= 300) {

            for (let i = 0; i < redMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList202x56.length);
                const randomPlatform = platformList202x56[randomPlatformIndex];  
                
                redMushroom.placeRedMushroomOnRandomPlatform202x56(randomPlatform);
            }

        } else if (randomNumber > 300 && randomNumber <= 400) {

            for (let i = 0; i < redMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList84x72.length);
                const randomPlatform = platformList84x72[randomPlatformIndex]; 
                
                redMushroom.placeRedMushroomOnRandomPlatform84x72(randomPlatform);
            }

        }
    
};
