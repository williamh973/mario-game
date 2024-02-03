import { blueMushroomList } from "../../blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { redMushroomList } from "../../redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { platformList494x72, platformList84x72, platformList150x72, platformList202x56 } from "../../platforms/platforms-manager/platform-adjustment.js";

export let goldCoinList = [];

export function adjustGoldCoinsPositionsRelativeToPlatform494x72() {
    return new Promise((resolve) => {

    for (let i = 0; i < goldCoinList.length; i++) {
          for (let j = 0; j < platformList494x72.length; j++) {
  
            if (goldCoinList[i].overlapsWith(platformList494x72[j])) {
                    // console.log("overlaps goldCoinList And platform 494x72!");
                    goldCoinList[i].placeGoldCoinAwayFromPlatform494x72(platformList494x72[j]);
            }

        }
    }
    resolve();
    })
};



export function adjustGoldCoinsPositionsRelativeToPlatform84x72() {
  return new Promise((resolve) => {

  for (let i = 0; i < goldCoinList.length; i++) {
        for (let j = 0; j < platformList84x72.length; j++) {

          if (goldCoinList[i].overlapsWith(platformList84x72[j])) {
                  // console.log("overlaps goldCoinList And platform 84x72!");
                  goldCoinList[i].placeGoldCoinAwayFromPlatform84x72(platformList84x72[j]);
          }

      }
  }
  resolve();
  })
};


export function adjustGoldCoinsPositionsRelativeToPlatform150x72() {
  return new Promise((resolve) => {

  for (let i = 0; i < goldCoinList.length; i++) {
        for (let j = 0; j < platformList150x72.length; j++) {

          if (goldCoinList[i].overlapsWith(platformList150x72[j])) {
                  // console.log("overlaps goldCoinList And platform 150x72!");
                  goldCoinList[i].placeGoldCoinAwayFromPlatform150x72(platformList150x72[j]);
          }

      }
  }
  resolve();
  })
};


export function adjustGoldCoinsPositionsRelativeToPlatform202x56() {
  return new Promise((resolve) => {

  for (let i = 0; i < goldCoinList.length; i++) {
        for (let j = 0; j < platformList202x56.length; j++) {

          if (goldCoinList[i].overlapsWith(platformList202x56[j])) {
                  // console.log("overlaps goldCoinList And platform 202x56!");
                  goldCoinList[i].placeGoldCoinAwayFromPlatform202x56(platformList202x56[j]);
          }

      }
  }
  resolve();
  })
};



export function adjustGoldCoinsPositionsRelativeToGoldCoins() {
  return new Promise((resolve) => {

  for (let i = 0; i < goldCoinList.length; i++) {
        for (let j = i + 1; j < goldCoinList.length; j++) {

          if (goldCoinList[i].overlapsWith(goldCoinList[j])) {
                  // console.log("overlaps goldCoinList And GoldCoins!");
                  goldCoinList[i].placeGoldCoinAwayFromGoldCoins(goldCoinList[j]);
          }

      }
  }
  resolve();
  })
};


export function adjustGoldCoinsPositionsRelativeToRedMushrooms() {
  return new Promise((resolve) => {

  for (let i = 0; i < goldCoinList.length; i++) {
        for (let j = 0; j < redMushroomList.length; j++) {

          if (goldCoinList[i].overlapsWith(redMushroomList[j])) {
                  goldCoinList[i].placeGoldCoinAwayFromRedMushroom(redMushroomList[j]);
          }

      }
  }
  resolve();
  })
};


export function adjustGoldCoinsPositionsRelativeToBlueMushrooms() {
  return new Promise((resolve) => {

  for (let i = 0; i < goldCoinList.length; i++) {
        for (let j = 0; j < blueMushroomList.length; j++) {

          if (goldCoinList[i].overlapsWith(blueMushroomList[j])) {
                  goldCoinList[i].placeGoldCoinAwayFromBlueMushroom(blueMushroomList[j]);
          }

      }
  }
  resolve();
  })
};


export async function ajustAllGoldCoins() {
    await adjustGoldCoinsPositionsRelativeToPlatform494x72();
    await adjustGoldCoinsPositionsRelativeToPlatform84x72();
    await adjustGoldCoinsPositionsRelativeToPlatform150x72();
    await adjustGoldCoinsPositionsRelativeToPlatform202x56();
    await adjustGoldCoinsPositionsRelativeToGoldCoins();
    await adjustGoldCoinsPositionsRelativeToRedMushrooms();
    await adjustGoldCoinsPositionsRelativeToBlueMushrooms();
 };


 export async function checkFiveTimesIfAllGoldCoinsAreAdjusted() {
    for (let i = 0; i < 5; i++) {
      await ajustAllGoldCoins();
    }

}