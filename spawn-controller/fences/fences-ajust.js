import { fenceList } from "./fences-dispach.js";

function adjustFencePositionsRelativeToOtherFence(fenceList, index) {
  return new Promise((resolve) => {
    // for (let i = 0; i < fenceList.length; i++) {
    //     for (let j = i + 1; j < fenceList.length; j++) {
    //         if (fenceList[i].overlapsWith(fenceList[j])) {
    //             console.log("overlaps fence with other fence");
    //             fenceList.splice(index, 1);
    //             console.log(index);
    //             console.log("this fence has deleted");
    //         }
    //     }
    // }
    resolve();
  });
}

export async function checkFencesAreAdjusted() {
  for (let i = 0; i < 2; i++) {
    await adjustFencePositionsRelativeToOtherFence(fenceList);
  }
}
