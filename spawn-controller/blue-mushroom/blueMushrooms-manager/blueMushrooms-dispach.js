import { BlueMushroom } from "./blue-mushroom.class.js";
import { platformList150x72, platformList202x56, platformList494x72 } from "../../platforms/platforms-manager/platform-adjustment.js";


export let blueMushroomList = [];


export async function dispachAllBlueMushrooms() {
    return new Promise((resolve) => {
        for (let i = 0; i < 20; i++) {
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
        let randomNumber = Math.floor(randomFactor * (300));

        if (randomNumber <= 100) {

                const randomPlatformIndex = Math.floor(Math.random() * platformList494x72.length);
                const randomPlatform = platformList494x72[randomPlatformIndex];  
    
                blueMushroom.placeBlueMushroomOnRandomPlatform494x72(randomPlatform);

                for (let i = 0; i < blueMushroomList.length; i++) {
                    for (let j = i + 1; j < blueMushroomList.length; j++) {
                    
                        if (blueMushroomList[i].overlapsWith(blueMushroomList[j]) ) {

                            const index = blueMushroomList.indexOf(blueMushroom);
                            
                            if (index !== -1) {
                                blueMushroomList.splice(index, 1);
                            }
                            
                        }
                   }
                }

        } else if (randomNumber > 100 && randomNumber <= 200) {
                
                const randomPlatformIndex = Math.floor(Math.random() * platformList150x72.length);
                const randomPlatform = platformList150x72[randomPlatformIndex];
                
                blueMushroom.placeBlueMushroomOnRandomPlatform150x72(randomPlatform);

                for (let i = 0; i < blueMushroomList.length; i++) {
                    for (let j = i + 1; j < blueMushroomList.length; j++) {
                    
                        if (blueMushroomList[i].overlapsWith(blueMushroomList[j]) ) {
                            
                            const index = blueMushroomList.indexOf(blueMushroom);
                            
                            if (index !== -1) {
                                blueMushroomList.splice(index, 1);
                            }
                            
                        }
                   }
                }
          
        } else if (randomNumber > 200 && randomNumber <= 300) {
    
                const randomPlatformIndex = Math.floor(Math.random() * platformList202x56.length);
                const randomPlatform = platformList202x56[randomPlatformIndex];  
                
                blueMushroom.placeBlueMushroomOnRandomPlatform202x56(randomPlatform);

            for (let i = 0; i < blueMushroomList.length; i++) {
                for (let j = i + 1; j < blueMushroomList.length; j++) {
                
                    if (blueMushroomList[i].overlapsWith(blueMushroomList[j]) ) {
                        // console.log("overlaps blueMushroom with other blueMushroom");
                        
                        const index = blueMushroomList.indexOf(blueMushroom);
                        
                        if (index !== -1) {
                            blueMushroomList.splice(index, 1);
                            // console.log("blueMushroom supprimé");
                        }
                        
                    }
               }
            }
        }
        
    };


