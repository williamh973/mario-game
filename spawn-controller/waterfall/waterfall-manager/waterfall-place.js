import { platformList630x217 } from "../../platforms/platforms-manager/platform-adjustment.js";
import { Waterfall } from "./waterfall.class.js";

export let waterfallList = [];

export function placeWaterfallOnPlatform630x217() {
  return new Promise((resolve) => {
    for (let i = 0; i < 2; i++) {
      let waterfall = new Waterfall();

      waterfallList.push(waterfall);

      const indexPlatform630x217 = platformList630x217.length - 1;
      const platform630x217 = platformList630x217[indexPlatform630x217];

      waterfall.placeWaterfallOnPlatform630x217(platform630x217);
    }
    resolve();
  });
}
