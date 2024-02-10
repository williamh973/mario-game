import { platformList630x217 } from "../../platforms/platforms-manager/platform-adjustment.js";
import { Bridge, theBridgeLeft, theBridgeRight } from "./bridges.class.js";

export let bridgeList = [];

export function placeBridgeOnPlatform630x217() {
    return new Promise((resolve) => {
        for (let i = 0; i < 1; i++) {
            let bridgeLeft = new Bridge(
                {
                    image : theBridgeLeft
                }
            )
            let bridgeRight = new Bridge(
                {
                    image : theBridgeRight
                }
            )

            bridgeList.push(bridgeLeft, bridgeRight)
            console.log(bridgeList);
            const indexPlatform630x217 = platformList630x217.length - 1;
            const platform630x217 = platformList630x217[indexPlatform630x217];  
            
            bridgeLeft.placeBridgeOnPlatform630x217(platform630x217);
            bridgeRight.placeBridgeOnPlatform630x217(platform630x217);
        }
        resolve();
    })

};