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


export async function ajustAllBushes() {
    await adjustBushesPositionsRelativeToOtherBushes();
 };


 export async function checkFiveTimesIfAllBushesAreAdjusted() {
    for (let i = 0; i < 5; i++) {
      await ajustAllBushes();
    }

}