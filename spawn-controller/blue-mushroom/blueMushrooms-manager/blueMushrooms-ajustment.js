import { redMushroomList } from "../../redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "./blueMushrooms-dispach.js";


export async function checkIfBlueMushroomAreAdjusted() {
    for (let i = 0; i < 1; i++) {
      await adjustBlueMushroomsPositionsRelativeToRedMushroom(blueMushroomList, redMushroomList);
    }

};
 
 
function adjustBlueMushroomsPositionsRelativeToRedMushroom(blueMushroomList, redMushroomList) {
    return new Promise((resolve) => {
        for (let i = 0; i < blueMushroomList.length; i++) {
            for (let j = 0; j < redMushroomList.length; j++) {
                if (blueMushroomList[i].overlapsWith(redMushroomList[j])) {
                    // console.log("overlaps blueMushroom with redMushroom");
                    blueMushroomList[i].placeBlueMushroomAwayFromRedMushroom(redMushroomList[j]);
                }
            }
        }  
        resolve()
    })
}

