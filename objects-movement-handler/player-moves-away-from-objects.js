import { player } from "../keyboard.js";
import { platformList494x72, platformList84x72, platformList150x72, platformList202x56, platformList500x43, platformList630x217 } from "../spawn-controller/platforms/platforms-manager/platform-adjustment.js"; 
import { genericObjectList } from "../spawn-controller/generic/sky-and-hills/sky-and-hills.object.js";
import { goomba01, goomba02, goomba03, goomba04, goomba05 } from "../class/gombas/gombas.class.js";
import { goldCoinList } from "../spawn-controller/coins/coins-manager/coins-adjustment.js";
import { redMushroomList } from "../spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "../spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { particulesBlueMushroomList } from "../spawn-controller/particles/particle-blueMushroom.js";
import { particulesRedMushroomList } from "../spawn-controller/particles/particle-redMushroom.js";
import { particulesCoinList } from "../spawn-controller/particles/particle-coin-loop.js";
import { bigCloudList, littleCloudList } from "../spawn-controller/clouds/clouds-manager/clouds-dispach.js";
import { bushList120x100 } from "../spawn-controller/bushs/bush-manager/bush-dispach.js";
import { treeList } from "../spawn-controller/trees/tree-manager/tree-dispach.js";
import { waterfallList } from "../spawn-controller/waterfall/waterfall-manager/waterfall-place.js";
import { bridgeList } from "../spawn-controller/bridges/bridge-manager/bridge-place.js";




export function playerMovesAwayFromObjects() {

    treeList.forEach((tree) => {
        tree.position.x += player.speed
     })

    bushList120x100.forEach((bush) => {
        bush.position.x += player.speed
     })

    littleCloudList.forEach((cloud) => {
        cloud.position.x += player.speed /10
     })

     bigCloudList.forEach((cloud) => {
        cloud.position.x += player.speed /10
     })

    platformList494x72.forEach((createPlatform) => {
        createPlatform.position.x += player.speed
     })

    platformList84x72.forEach((createPlatform) => {
       createPlatform.position.x += player.speed
    })

    platformList150x72.forEach((createPlatform) => {
        createPlatform.position.x += player.speed
     })
     
     platformList202x56.forEach((createPlatform) => {
        createPlatform.position.x += player.speed
     })

     platformList500x43.forEach((createPlatform) => {
        createPlatform.position.x += player.speed
     })

     platformList630x217.forEach((createPlatform) => {
        createPlatform.position.x += player.speed
    })
       
    genericObjectList.forEach((genericObject) => {
       genericObject.position.x += player.speed/5 
    })

    goldCoinList.forEach((coin) => {  
        coin.position.x += player.speed
     });

    redMushroomList.forEach((redMushroomList) => {  
        redMushroomList.position.x += player.speed
    });

    blueMushroomList.forEach((blueMushroomList) => {  
        blueMushroomList.position.x += player.speed
    });

    particulesCoinList.forEach((particule) => {  
        particule.position.x += player.speed
    });

    particulesBlueMushroomList.forEach((particule) => {  
        particule.position.x += player.speed
    });
    
    particulesRedMushroomList.forEach((particule) => {  
        particule.position.x += player.speed
    });

    waterfallList.forEach((waterfall) => {  
        waterfall.position.x += player.speed
    });

    bridgeList.forEach((bridge) => {  
        bridge.position.x += player.speed
      });

goomba01.position.x += player.speed
goomba02.position.x += player.speed
goomba03.position.x += player.speed
goomba04.position.x += player.speed
goomba05.position.x += player.speed

}