import { BlueMushroom } from "../../../class/blueMushroom/blue-mushroom.class.js";
import { platformList150x72, platformList202x56, platformList494x72, platformList84x72 } from "../../platforms/platforms-manager/platform-adjustment.js";

export let blueMushroomList = [];


export async function dispachAllBlueMushrooms() {
    return new Promise((resolve) => {
        for (let i = 0; i < 6; i++) {
            spawnBlueMushroom();
        }
        resolve();
    })
};


function spawnBlueMushroom() {
    let blueMushroom = new BlueMushroom();
    blueMushroomList.push(blueMushroom);
    dispachBlueMushroom(blueMushroom);
};


function dispachBlueMushroom(blueMushroom) {
        let randomFactor = Math.random(); 
        let randomNumber = Math.floor(randomFactor * (400));

        if (randomNumber <= 100) {

            for (let i = 0; i < blueMushroomList.length; i++) {

                const randomPlatformIndex = Math.floor(Math.random() * platformList494x72.length);
                const randomPlatform = platformList494x72[randomPlatformIndex];  
    
                blueMushroom.placeBlueMushroomOnRandomPlatform494x72(randomPlatform);
            }

        } else if (randomNumber > 100 && randomNumber <= 200) {

            for (let i = 0; i < blueMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList150x72.length);
                const randomPlatform = platformList150x72[randomPlatformIndex];
                
                blueMushroom.placeBlueMushroomOnRandomPlatform150x72(randomPlatform);
            }

        } else if (randomNumber > 200 && randomNumber <= 300) {

            for (let i = 0; i < blueMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList202x56.length);
                const randomPlatform = platformList202x56[randomPlatformIndex];  
                
                blueMushroom.placeBlueMushroomOnRandomPlatform202x56(randomPlatform);
            }

        } else if (randomNumber > 300 && randomNumber <= 400) {

            for (let i = 0; i < blueMushroomList.length; i++) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList84x72.length);
                const randomPlatform = platformList84x72[randomPlatformIndex]; 
                
                blueMushroom.placeBlueMushroomOnRandomPlatform84x72(randomPlatform);
            }
        }
    
};

