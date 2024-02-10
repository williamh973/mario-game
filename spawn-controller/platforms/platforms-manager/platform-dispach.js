import { Platform, thePlatform494x72, theplateform84x72, theplateform202x56, thePlatform150x72, theplateform500x43, theplateform630x217 } from "../../../class/platforms/platforms.class.js";
import { platformList494x72, platformList150x72, platformList84x72, platformList202x56, platformList500x43, platformList630x217 } from "../../platforms/platforms-manager/platform-adjustment.js";


export function dispachGrassPlatforms494x72() {
    return new Promise((resolve) => {
        
        for (let i = 0; i < 13; i++) {
            let randomFactor = Math.random();
            let randomNumberBetweenX = Math.floor(randomFactor * (100)) + 100 + i * 600; // + i * 50 controle l'étendue
            
            platformList494x72.push(
                new Platform({
                    x: randomNumberBetweenX,
                    y: 505,
                    image: thePlatform494x72
                })
            )
        }
        resolve();
    })
};

export function dispachGrassPlatforms202x56() {
    return new Promise((resolve) => {
        for (let i = 0; i < 5; i++) {
            let randomFactor = Math.random();
            let randomNumberBetweenX = Math.floor(randomFactor * (100)) + 200 + i * 1400;
        
            platformList202x56.push(
            new Platform({
                x: randomNumberBetweenX,
                y: 455,
                image: theplateform202x56
              }),
            )
        }
    resolve();
})

};

export function dispachGrassPlatforms84x72() {
    return new Promise((resolve) => {
  for (let i = 0; i < 39; i++) {
      let randomFactor = Math.random();
      let randomNumberBetweenX = Math.floor(randomFactor * (100)) + 90 + i * 200;
      
      randomFactor = Math.random();
      let randomNumberBetween100And516 = Math.floor(randomFactor * 350) + 100;
  
      platformList84x72.push(
      new Platform({
          x: randomNumberBetweenX,
          y: randomNumberBetween100And516,
          image: theplateform84x72
        }),
        )
    }
    resolve();
})
};

  
export function dispachGrassPlatforms150x72() {
    return new Promise((resolve) => {
    for (let i = 0; i < 13; i++) {
        let randomFactor = Math.random();
        let randomNumberBetweenX = Math.floor(randomFactor * (100)) + 300 + i * 600;
        
        randomFactor = Math.random();
        let randomNumberBetween100And516 = Math.floor(randomFactor * 300) + 70;
    
        platformList150x72.push(
        new Platform({
            x: randomNumberBetweenX,
            y: randomNumberBetween100And516,
            image: thePlatform150x72
          }),
          )
      }
      resolve();
    })
};


export function dispachGrassPlatforms500x43() {
    return new Promise((resolve) => {
        
        for (let i = 0; i < 4; i++) {
            let randomFactor = Math.random();
            let randomNumberBetweenX =  7500;

            randomFactor = Math.random();
            let randomNumberBetweenY = Math.floor(randomFactor * (405)) + 100;
            
            platformList500x43.push(
                new Platform({
                    x: randomNumberBetweenX,
                    y: randomNumberBetweenY,
                    image: theplateform500x43
                })
            )

        }
        resolve();
    })
};


export function dispachGrassPlatform630x217() {
    return new Promise((resolve) => {
        
        for (let i = 0; i < 1; i++) {
            
            platformList630x217.push(
                new Platform({
                    x: 100, 
                    y: 360,
                    image: theplateform630x217
                })
            )
        }
        resolve();
    })
};



export function dispachGrassPlatforms202x56OnPlatform630x217() {
    return new Promise((resolve) => {
        for (let i = 0; i < 2; i++) {
            let platform202x56 = new Platform({
                x: 0,
                y: 0,
                image: theplateform202x56
              })

            platformList202x56.push(platform202x56)
            
            const indexPlatform630x217 = platformList630x217.length - 1;
            const platform630x217 = platformList630x217[indexPlatform630x217];  
            
            platform202x56.placePlatform202x56OnPlatform630x217(platform630x217);
        }
        resolve();
    })

};
