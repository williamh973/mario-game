import { player, keys } from "../keyboard.js";
import { Platform } from "../../class/platforms/platforms.class.js";
import { canvasParams } from "../canvas.js";
import { platformList494x72, platformList84x72, platformList150x72, platformList202x56 } from "../spawn-controller/platforms/platforms-manager/platform-adjustment.js"; 
import { genericObjectList } from "../spawn-controller/generic/sky-and-hills/sky-and-hills.object.js";
import { waterfall, waterfall02 } from "../class/waterfall/waterfall.class.js";
// import { coin } from "../spawn-controller/coins/coins-manager/coins-dispach.js";
import { goomba01, goomba02, goomba03, goomba04, goomba05 } from "../class/gombas/gombas.class.js";
import { goldCoinList } from "../spawn-controller/coins/coins-manager/coins-adjustment.js";

export let scrollOffsetX = 0;
export let scrollOffsetY = 0;


export function objectMovements() {
if (
    (
      keys.ArrowRight.pressed || 
      keys.d.pressed 
      ) &&
      player.position.x >= 400
    ) {

    scrollOffsetX += player.speed

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

    
    
    goomba01.position.x -= player.speed
    goomba02.position.x -= player.speed
    goomba03.position.x -= player.speed
    goomba04.position.x -= player.speed
    goomba05.position.x -= player.speed

        waterfall.position.x -= player.speed
        waterfall02.position.x -= player.speed
    
    } else if (
        (
            keys.ArrowLeft.pressed ||
            keys.q.pressed 
            ) && 
            scrollOffsetX > 0  
            ) {
                scrollOffsetX -= player.speed

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


                genericObjectList.forEach((genericObject) => {
                   genericObject.position.x += player.speed/5 
                })

                goldCoinList.forEach((coin) => {  
                    coin.position.x += player.speed
                 });

    
        goomba01.position.x += player.speed
        goomba02.position.x += player.speed
        goomba03.position.x += player.speed
        goomba04.position.x += player.speed
        goomba05.position.x += player.speed

        waterfall.position.x += player.speed
        waterfall02.position.x += player.speed

        };
    };



    export function canvasTrackingOffsetX() {
        if (
            (
                keys.ArrowRight.pressed || 
                keys.d.pressed
                )  &&
                player.position.x < 400
                ) {  
                    player.velocity.x = player.speed
                } else if (
                    (
                        (
                            keys.ArrowLeft.pressed || 
                            keys.q.pressed 
                            )  && 
                            player.position.x > 400
                            ) || 
                            (
                                (
                                    keys.ArrowLeft.pressed || 
                                    keys.q.pressed 
                                    ) && 
                                    scrollOffsetX === 0 && 
                                    player.position.x > 0
                                    )
                                    ) {
                                        player.velocity.x =- player.speed

                                    } else {
                                        player.velocity.x = 0

    }
}


export function canvasTrackingOffsetY() {

// console.log(player.position.y);
}

export function overTheCanvasLimit() {
    if (player.position.y < canvasParams.canvas.height - 655) {
        player.velocity.y = +5
    } else if ( 
        player.position.y >= 522 
        ) {
        player.position.x = player.position.x - 250
        player.position.y = player.position.y - 250
        player.currentSprite = player.sprites.stand.right
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    }
}
