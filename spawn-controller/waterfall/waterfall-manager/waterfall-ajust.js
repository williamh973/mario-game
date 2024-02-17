import { waterfallList } from "./waterfall-place.js";


function adjustWaterfallPositionsRelativeToOtherWaterfall() {
    return new Promise((resolve) => {
        for (let i = 0; i < waterfallList.length; i++) {
            for (let j = i + 1; j < waterfallList.length; j++) {
                if (waterfallList[i].overlapsWith(waterfallList[j])) {
                    // console.log("overlaps waterfall with other waterfall");
                    waterfallList[j].placeWaterfallAwayFromOtherWaterfall(waterfallList[i]);
                }
            }
        }  
        resolve()
    })
};



export async function checkIfWaterfallsAreAdjusted() {
    for (let i = 0; i < 1; i++) {
      await adjustWaterfallPositionsRelativeToOtherWaterfall(waterfallList);
    }

}