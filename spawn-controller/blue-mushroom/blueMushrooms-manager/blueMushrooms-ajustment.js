import { redMushroomList } from "../../redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "./blueMushrooms-dispach.js";

 

function adjustBlueMushroomsPositionsRelativeToOtherBlueMushroom(blueMushroomList) {
    return new Promise((resolve) => {
        for (let i = 0; i < blueMushroomList.length; i++) {
            for (let j = i + 1; j < blueMushroomList.length; j++) {
                if (blueMushroomList[i].overlapsWith(blueMushroomList[j])) {
                    console.log("overlaps blueMushroom with other blueMushroom");
                    blueMushroomList[i].placeBlueMushroomAwayFromOtherBlueMushroom(blueMushroomList[j]);
                }
            }
        }  
        resolve()
    })
};


function adjustBlueMushroomsPositionsRelativeToRedMushroom(blueMushroomList, redMushroomList) {
    return new Promise((resolve) => {
        for (let i = 0; i < blueMushroomList.length; i++) {
            for (let j = 0; j < redMushroomList.length; j++) {
                if (blueMushroomList[i].overlapsWith(redMushroomList[j])) {
                    console.log("overlaps blueMushroom with redMushroom");
                    blueMushroomList[i].placeBlueMushroomAwayFromRedMushroom(redMushroomList[j]);
                }
            }
        }  
        resolve()
    })
}



export async function checkFiveTimesIfBlueMushroomAreAdjusted() {
    for (let i = 0; i < 5; i++) {
      await adjustBlueMushroomsPositionsRelativeToOtherBlueMushroom(blueMushroomList);
      await adjustBlueMushroomsPositionsRelativeToRedMushroom(blueMushroomList, redMushroomList);
    }

}