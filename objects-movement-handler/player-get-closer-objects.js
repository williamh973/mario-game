import { player } from "../keyboard.js";
import { platformList494x72, platformList84x72, platformList150x72, platformList202x56, platformList500x43, platformList630x217, platformList158x78, platformList105x73 } from "../spawn-controller/platforms/platforms-manager/platform-adjustment.js"; 
import { genericObjectList } from "../spawn-controller/generic/generic-manager/generic-place.js";
import { goldCoinList } from "../spawn-controller/coins/coins-manager/coins-adjustment.js";
import { redMushroomList } from "../spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "../spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { particulesBlueMushroomList } from "../spawn-controller/particles/particles-manager/particle-blueMushroom.js";
import { particulesRedMushroomList } from "../spawn-controller/particles/particles-manager/particle-redMushroom.js";
import { particulesCoinList } from "../spawn-controller/particles/particles-manager/particle-coin.js";
import { bigCloudList, littleCloudList } from "../spawn-controller/clouds/clouds-manager/clouds-dispach.js";
import { bushList120x100 } from "../spawn-controller/bushs/bush-manager/bush-dispach.js";
import { treeList } from "../spawn-controller/trees/tree-manager/tree-dispach.js";
import { waterfallList } from "../spawn-controller/waterfall/waterfall-manager/waterfall-place.js";
import { bridgeList } from "../spawn-controller/bridges/bridge-manager/bridge-place.js";
import { goombasList } from "../spawn-controller/gombas/gombas-manager/gombas-dispach.js";
import { fenceList } from "../spawn-controller/fences/fences-dispach.js";
import { houseList } from "../spawn-controller/houses/houses-dispach.js";



export function getCloserToTheObjects() {

   houseList.forEach((house) => {
      house.position.x -= player.speed
   })

   fenceList.forEach((fence) => {
      fence.position.x -= player.speed
   })

    treeList.forEach((tree) => {
        tree.position.x -= player.speed
     })

     bushList120x100.forEach((bush) => {
        bush.position.x -= player.speed
     })
    
    littleCloudList.forEach((cloud) => {
        cloud.position.x -= player.speed / 10
     })

     bigCloudList.forEach((cloud) => {
        cloud.position.x -= player.speed / 10
     })

    platformList494x72.forEach((createPlatform) => {
        createPlatform.position.x -= player.speed
     })

    platformList84x72.forEach((createPlatform) => {
       createPlatform.position.x -= player.speed
    })

    platformList150x72.forEach((createPlatform) => {
        createPlatform.position.x -= player.speed
     })

     platformList105x73.forEach((createPlatform) => {
      createPlatform.position.x -= player.speed
     })

     platformList158x78.forEach((createPlatform) => {
      createPlatform.position.x -= player.speed
     })

     platformList202x56.forEach((createPlatform) => {
        createPlatform.position.x -= player.speed
     })

     platformList500x43.forEach((createPlatform) => {
      createPlatform.position.x -= player.speed
     })

     platformList630x217.forEach((createPlatform) => {
      createPlatform.position.x -= player.speed
     })

    genericObjectList.forEach((genericObject) => {
       genericObject.position.x -= player.speed/5  
    });

    goldCoinList.forEach((coin) => {  
       coin.position.x -= player.speed
    });

     redMushroomList.forEach((redMushroomList) => {  
        redMushroomList.position.x -= player.speed
    });

    blueMushroomList.forEach((blueMushroomList) => {  
        blueMushroomList.position.x -= player.speed
    });

    particulesBlueMushroomList.forEach((particule) => {  
        particule.position.x -= player.speed
    });
    
    particulesRedMushroomList.forEach((particule) => {  
        particule.position.x -= player.speed
    });

    particulesCoinList.forEach((particule) => {  
        particule.position.x -= player.speed
    });

    waterfallList.forEach((waterfall) => {  
      waterfall.position.x -= player.speed
    });

    bridgeList.forEach((bridge) => {  
      bridge.position.x -= player.speed
    });

    goombasList.forEach((goombas) => {  
      goombas.position.x -= player.speed
    });
   

};

