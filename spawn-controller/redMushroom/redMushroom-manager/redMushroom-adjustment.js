


// export function adjustRedMushroomPositionsRelativeToPlatform494x72() {
//     return new Promise((resolve) => {

//     for (let i = 0; i < redMushroomList.length; i++) {
//           for (let j = 0; j < platformList494x72.length; j++) {
  
//             if (redMushroomList[i].overlapsWith(platformList494x72[j])) {
//                     console.log("overlaps redMushroomList And platform 494x72!");
//                     redMushroomList[i].placeRedMushroomAwayFromPlatform494x72(platformList494x72[j]);
//             }

//         }
//     }
//     resolve();
//     })
// };



// export function adjustRedMushroomPositionsRelativeToPlatform84x72() {
//   return new Promise((resolve) => {

//   for (let i = 0; i < redMushroomList.length; i++) {
//         for (let j = 0; j < platformList84x72.length; j++) {

//           if (redMushroomList[i].overlapsWith(platformList84x72[j])) {
//                   console.log("overlaps redMushroomList And platform 84x72!");
//                   redMushroomList[i].placeRedMushroomAwayFromPlatform84x72(platformList84x72[j]);
//           }

//       }
//   }
//   resolve();
//   })
// };


// export function adjustRedMushroomPositionsRelativeToPlatform150x72() {
//   return new Promise((resolve) => {

//   for (let i = 0; i < redMushroomList.length; i++) {
//         for (let j = 0; j < platformList150x72.length; j++) {

//           if (redMushroomList[i].overlapsWith(platformList150x72[j])) {
//                   console.log("overlaps redMushroomList And platform 150x72!");
//                   redMushroomList[i].placeRedMushroomAwayFromPlatform150x72(platformList150x72[j]);
//           }

//       }
//   }
//   resolve();
//   })
// };


// export function adjustRedMushroomPositionsRelativeToPlatform202x56() {
//   return new Promise((resolve) => {

//   for (let i = 0; i < redMushroomList.length; i++) {
//         for (let j = 0; j < platformList202x56.length; j++) {

//           if (redMushroomList[i].overlapsWith(platformList202x56[j])) {
//                   console.log("overlaps redMushroomList And platform 202x56!");
//                   redMushroomList[i].placeRedMushroomAwayFromPlatform202x56(platformList202x56[j]);
//           }

//       }
//   }
//   resolve();
//   })
// };



export async function ajustAllRedMushroom() {
    // await adjustRedMushroomPositionsRelativeToPlatform494x72();
    // await adjustRedMushroomPositionsRelativeToPlatform84x72();
    // await adjustRedMushroomPositionsRelativeToPlatform150x72();
    // await adjustRedMushroomPositionsRelativeToPlatform202x56();
 };


 export async function checkFiveTimesIfAllRedMushroomsAreAdjusted() {
      await ajustAllRedMushroom();
    }
