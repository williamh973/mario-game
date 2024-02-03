import { player } from "../keyboard.js";
import { platformList494x72, platformList84x72, platformList150x72, platformList202x56 } from "../spawn-controller/platforms/platforms-manager/platform-adjustment.js"; 
import { genericObjectList } from "../spawn-controller/generic/sky-and-hills/sky-and-hills.object.js";
import { waterfall, waterfall02 } from "../class/waterfall/waterfall.class.js";
import { goomba01, goomba02, goomba03, goomba04, goomba05 } from "../class/gombas/gombas.class.js";
import { goldCoinList } from "../spawn-controller/coins/coins-manager/coins-adjustment.js";
import { redMushroomList } from "../spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "../spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { particulesBlueMushroomList } from "../spawn-controller/particles/particle-blueMushroom.js";
import { particulesRedMushroomList } from "../spawn-controller/particles/particle-redMushroom.js";
import { particulesCoinList } from "../spawn-controller/particles/particle-coin-loop.js";



export function getCloserToTheObjects() {
    
    platformList494x72.forEach((createPlatform) => {
        createPlatform.position.x -= player.speed
     })

    platformList84x72.forEach((createPlatform) => {
       createPlatform.position.x -= player.speed
    })

    platformList150x72.forEach((createPlatform) => {
        createPlatform.position.x -= player.speed
     })

     platformList202x56.forEach((createPlatform) => {
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
    
    goomba01.position.x -= player.speed
    goomba02.position.x -= player.speed
    goomba03.position.x -= player.speed
    goomba04.position.x -= player.speed
    goomba05.position.x -= player.speed

        waterfall.position.x -= player.speed
        waterfall02.position.x -= player.speed
};

