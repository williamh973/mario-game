// import { redMushroomList } from "./redMushrooms-dispach.js";

// function adjustRedMushroomsPositionsRelativeToOtherRedMushroom(redMushroomList) {
//     return new Promise((resolve) => {
//         for (let i = 0; i < redMushroomList.length; i++) {
//             for (let j = i + 1; j < redMushroomList.length; j++) {
//                 if (redMushroomList[i].overlapsWith(redMushroomList[j])) {
//                     console.log("overlaps redMushroom with other redMushroom");
//                     redMushroomList[j].placeRedMushroomAwayFromOtherRedMushroom(redMushroomList[i]);
//                 }
//             }
//         }
//         resolve()
//     })
// };

// export async function checkFiveTimesIfRedMushroomAreAdjusted() {
//     for (let i = 0; i < 5; i++) {
//       await adjustRedMushroomsPositionsRelativeToOtherRedMushroom(redMushroomList);
//     }

// }
