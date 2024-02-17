import { houseList } from "../../houses/houses-dispach.js";
import { bushList120x100 } from "./bush-dispach.js";



export function adjustBushesPositionsRelativeToOtherBushes() {
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


export function adjustBushesPositionsRelativeToHouses(randomPlatform) {
  return new Promise((resolve) => {

  for (let i = 0; i < bushList120x100.length; i++) {
        for (let j = 0; j < houseList.length; j++) {
           
          if (bushList120x100[i].overlapsWith(houseList[j])) {
            console.log("overlaps bush with house");
            bushList120x100[i].repositionBushOnOtherPlatform(randomPlatform);
          }

      }
  }
  resolve();
  })
};


export async function ajustAllBushes(bush,randomPlatform) {
    await repositionBushesIfNeeded(bush, randomPlatform);
    await adjustBushesPositionsRelativeToOtherBushes();
    await adjustBushesPositionsRelativeToHouses(randomPlatform);
 };


 export async function checkIfAllBushesAreAdjusted(bush, randomPlatform) {
    for (let i = 0; i < 2; i++) {
      await ajustAllBushes(bush, randomPlatform);
    }

}


function repositionBushesIfNeeded(bush, randomPlatform) {
  return new Promise((resolve) => {
    
    if (
      bush.position.x + bush.width > 
      randomPlatform.position.x + randomPlatform.width
      ) {
        // console.log("a bush need to be repositioned !", bush, randomPlatform);
        bush.position.x -= 70
        // console.log(bush.position.x, "bush repositionned !"); 
      }

      resolve()
    })
};