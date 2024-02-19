import { houseList } from "../../houses/houses-dispach.js";
import { bushList120x100 } from "./bush-dispach.js";


export async function checkIfAllBushesAreAdjusted(bush, randomPlatform) {
  for (let i = 0; i < 7; i++) {
    await ajustAllBushes(bush, randomPlatform);
  }
  
}

async function ajustAllBushes(bush,randomPlatform) {
  await adjustBushesPositionsRelativeToOtherBushes();
  await adjustBushesPositionsRelativeToHouses(randomPlatform);
  await repositionBushesIfNeeded(bush, randomPlatform);
 };


function adjustBushesPositionsRelativeToOtherBushes() {
  return new Promise((resolve) => {
    
    for (let i = 0; i < bushList120x100.length; i++) {
      for (let j = i + 1; j < bushList120x100.length; j++) {
        
        if (bushList120x100[i].overlapsWith(bushList120x100[j])) {
          bushList120x100[i].placeBushAwayFromOtherBush(bushList120x100[j]);
        }

      }
    }
    resolve();
  })
};


function adjustBushesPositionsRelativeToHouses(randomPlatform) {
  return new Promise((resolve) => {

    for (let i = 0; i < bushList120x100.length; i++) {
      for (let j = 0; j < houseList.length; j++) {
        
        if (bushList120x100[i].overlapsWith(houseList[j])) {
            bushList120x100[i].repositionBushOnOtherPlatform(randomPlatform);
          }
          
        }
      }
      resolve();
    })
  };
  
  
  
  

function repositionBushesIfNeeded(bush, randomPlatform) {
  return new Promise((resolve) => {
    
    let randomFactorX = Math.random(); 
    let randomNumberX = Math.floor(randomFactorX * (100) + 20);

    if (
      bush.position.x + bush.width > 
      randomPlatform.position.x + randomPlatform.width
      ) {
        bush.position.x = randomPlatform.position.x + randomNumberX
      }

      resolve()
    })
};