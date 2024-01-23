import { Platform, thePlatform494x72, theplateform84x72, theplateform202x56, thePlatform150x72 } from "../../../class/platforms/platforms.class.js";
import { platformList494x72, platformList150x72, platformList84x72, platformList202x56 } from "../grass-platforms/grass-platforms-list.object.js";


export function dispachGrassPlatforms494x72() {
  for (let i = 0; i < 20; i++) {
      let randomFactor = Math.random();
      let randomNumberBetweenX = Math.floor(randomFactor * (100)) + 100 + i * 350; // + i * 50 controle l'étendue
      
      platformList494x72.push(
          new Platform({
          x: randomNumberBetweenX,
          y: 505,
          image: thePlatform494x72
          })
      )
    };
};

export function dispachGrassPlatforms202x56() {
    for (let i = 0; i < 5; i++) {
        let randomFactor = Math.random();
        let randomNumberBetweenX = Math.floor(randomFactor * (100)) + 200 + i * 1400;
    
        platformList202x56.push(
        new Platform({
            x: randomNumberBetweenX,
            y: 448.5,
            image: theplateform202x56
          }),
        );
    };

};

export function dispachGrassPlatforms84x72() {
  for (let i = 0; i < 35; i++) {
      let randomFactor = Math.random();
      let randomNumberBetweenX = Math.floor(randomFactor * (100)) + 90 + i * 170;
      
      randomFactor = Math.random();
      let randomNumberBetween100And516 = Math.floor(randomFactor * 350) + 100;
  
      platformList84x72.push(
      new Platform({
          x: randomNumberBetweenX,
          y: randomNumberBetween100And516,
          image: theplateform84x72
        }),
        );
    };
};

  
export function dispachGrassPlatforms150x72() {
    for (let i = 0; i < 10; i++) {
        let randomFactor = Math.random();
        let randomNumberBetweenX = Math.floor(randomFactor * (100)) + 300 + i * 700;
        
        randomFactor = Math.random();
        let randomNumberBetween100And516 = Math.floor(randomFactor * 300) + 70;
    
        platformList150x72.push(
        new Platform({
            x: randomNumberBetweenX,
            y: randomNumberBetween100And516,
            image: thePlatform150x72
          }),
          );
      };
};







