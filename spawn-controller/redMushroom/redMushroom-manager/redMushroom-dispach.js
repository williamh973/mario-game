import { RedMushroom } from "../../../class/redMushroom/redMushroom.class.js";
import { platformList150x72, platformList202x56, platformList494x72, platformList84x72 } from "../../platforms/platforms-manager/platform-adjustment.js";

export let redMushroomList = [];

console.log(platformList150x72, platformList202x56, platformList494x72, platformList84x72);

export function dispachRandomRedMushroom() {
    return new Promise((resolve) => {
        for (let i = 0; i < 1; i++) {
            
            let redMushroom = new RedMushroom({
                x: 0,
                y: 0,
            })

            redMushroomList.push(redMushroom)
        }
        
        let randomFactor = Math.random(); 
        let randomNumber = Math.floor(randomFactor * (400));
    
        if (randomNumber <= 100) {
            
            for (let i = 0; i < redMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList494x72.length);
                const randomPlatform = platformList494x72[randomPlatformIndex];
                console.log("randomPlatform", randomPlatform);    
                
                redMushroomList[i].placeRedMushroomOnRandomPlatform494x72(randomPlatform);
                console.log("placeRedMushroomOnRandomPlatform494x72");
            }
        } else if (randomNumber > 100 && randomNumber <= 200) {

            for (let i = 0; i < redMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList150x72.length);
                const randomPlatform = platformList150x72[randomPlatformIndex];
                console.log("randomPlatform", randomPlatform);    
                
                redMushroomList[i].placeRedMushroomOnRandomPlatform150x72(randomPlatform);
                console.log("placeRedMushroomOnRandomPlatform150x72");
            }

        } else if (randomNumber > 200 && randomNumber <= 300) {

            for (let i = 0; i < redMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList202x56.length);
                const randomPlatform = platformList202x56[randomPlatformIndex];
                console.log("randomPlatform", randomPlatform);    
                
                redMushroomList[i].placeRedMushroomOnRandomPlatform202x56(randomPlatform);
                console.log("placeRedMushroomOnRandomPlatform202x56");
            }

        } else if (randomNumber > 300 && randomNumber <= 400) {

            for (let i = 0; i < redMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList84x72.length);
                console.log("randomPlatformIndex", randomPlatformIndex);
                const randomPlatform = platformList84x72[randomPlatformIndex];
                console.log("randomPlatform", randomPlatform);    
                
                redMushroomList[i].placeRedMushroomOnRandomPlatform84x72(randomPlatform);
                console.log("placeRedMushroomOnRandomPlatform84x72");
            }

        }
        resolve();
        console.log(redMushroomList);
    })
    
};
