import { platformList105x73, platformList158x78, platformList89x180 } from "./platform-adjustment.js";
import { theplateformGreen89x180, theplateformGreenSmall } from "./platform-assets.js";
import { Platform } from "./platforms.class.js";


export function dispachGreenPlatforms105x73() {
   return new Promise((resolve) => {
       for (let i = 0; i < 1; i++) {
            let platform105x73 = new Platform({
                x: 0,
                y: 0,
                image: theplateformGreenSmall,
                scale : 1
              })
              platformList105x73.push(platform105x73);
              placePlatform(platform105x73);    
       }
        resolve();
    })
};


export function dispachGreenPlatforms89x180() {
  return new Promise((resolve) => {
      for (let i = 0; i < 1; i++) {
           let platform89x180 = new Platform({
               x: 10,
               y: 397,
               image: theplateformGreen89x180,
               scale : 1
             })
             platformList89x180.push(platform89x180);  
   }
       resolve();
   })
};



function placePlatform(platform105x73) {
    const platformIndex = platformList158x78.length - 1;
    const platform = platformList158x78[platformIndex];  

    platform105x73.placePlatform105x73OnPlatformList158x78(platform);
};