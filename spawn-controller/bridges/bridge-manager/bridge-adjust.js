import { bridgeList } from "./bridge-place.js";

function adjustBridgePositionsRelativeToOtherBridge() {
  return new Promise((resolve) => {
    for (let i = 0; i < bridgeList.length; i++) {
      for (let j = i + 1; j < bridgeList.length; j++) {
        if (bridgeList[i].overlapsWith(bridgeList[j])) {
          // console.log("overlaps bridge with other bridge");
          bridgeList[j].placeBridgeAwayFromOtherBridge(bridgeList[i]);
        }
      }
    }
    resolve();
  });
}

export async function checkIfBridgeAreAdjusted() {
  for (let i = 0; i < 1; i++) {
    await adjustBridgePositionsRelativeToOtherBridge(bridgeList);
  }
}
