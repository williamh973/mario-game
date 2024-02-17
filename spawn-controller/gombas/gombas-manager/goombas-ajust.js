import { goombasList } from "./gombas-dispach.js";

 

function adjustGoombaPositionsRelativeToOtherGoomba(goombasList) {
    return new Promise((resolve) => {
        for (let i = 0; i < goombasList.length; i++) {
            for (let j = i + 1; j < goombasList.length; j++) {
                if (goombasList[i].overlapsWith(goombasList[j])) {
                    // console.log("overlaps goomba with other goomba");
                    goombasList[j].placeGoombaAwayFromOtherGoomba(goombasList[i]);
                }
            }
        }  
        resolve()
    })
};



export async function checkGoombasAreAdjusted() {
    for (let i = 0; i < 2; i++) {
      await adjustGoombaPositionsRelativeToOtherGoomba(goombasList);
    }

}