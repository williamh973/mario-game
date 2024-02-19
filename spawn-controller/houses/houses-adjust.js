import { platformList84x72 } from "../platforms/platforms-manager/platform-adjustment.js";
import { houseList } from "./houses-dispach.js";



export function adjustHousePositionsRelativeToOtherHouse(randomPlatform) {
  return new Promise((resolve) => {

    for (let i = 0; i < houseList.length; i++) {
          for (let j = i + 1; j < houseList.length; j++) {
  
            if (houseList[i].overlapsWith(houseList[j])) {
              houseList[i].placeHouseOnOtherRandomPlatform(randomPlatform);
            }
  
        }
    }
    resolve();
  })
};


export function adjustHousePositionsRelativeToPlatform84x72(randomPlatform) {
  return new Promise((resolve) => {

  for (let i = 0; i < houseList.length; i++) {
        for (let j = 0; j < platformList84x72.length; j++) {
           
          if (houseList[i].overlapsWith(platformList84x72[j])) {
            // console.log("overlaps house with platform 84x72");
            houseList[i].placeHouseOnOtherRandomPlatform(randomPlatform);
          }

      }
  }
  resolve();
  })
};


export async function ajustAllHouses(house,randomPlatform) {
    // await repositionHouseIfNeeded(house, randomPlatform);
    await adjustHousePositionsRelativeToOtherHouse(randomPlatform);
    await adjustHousePositionsRelativeToPlatform84x72(randomPlatform);
 };


 export async function checkIfAllHousesAreAdjusted(house, randomPlatform) {
    for (let i = 0; i < 5; i++) {
      await ajustAllHouses(house, randomPlatform);
    }

}


// function repositionHouseIfNeeded(house, randomPlatform) {
//   return new Promise((resolve) => {
    
//     if (
//       house.position.x + house.width > 
//       randomPlatform.position.x + randomPlatform.width
//       ) {
//         // console.log("a house need to be repositioned !", house, randomPlatform);
//         house.position.x -= 70
//         // console.log(house.position.x, "house repositionned !"); 
//       }

//       resolve()
//     })
// };