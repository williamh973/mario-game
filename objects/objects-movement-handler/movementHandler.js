import { player, keys } from "../../keyboard.js";
import { platformList } from "../../objects/platforms/grass-platforms/grass-platforms-list.object.js"; 
import { genericObjectList } from "../generic/sky-and-hills/sky-and-hills.object.js";
import { waterfall, waterfall02 } from "../../class/waterfall/waterfall.class.js";
import { bounty1, bounty2, bounty3, bounty4, bounty5, bounty6, bounty7, bounty8, bounty9, bounty10, bounty11, bounty12, bounty13, bounty14, bounty15, bounty16, bounty17, bounty18, bounty19, bounty20, bounty21, bounty22, bounty23, bounty24, bounty25, bounty26, bounty27, bounty28, bounty29, bounty30, bounty31, bounty32, bounty33, bounty34, bounty35, bounty36, bounty37, bounty38, bounty39, bounty40, bounty41, bounty42 } from "../../class/coins/coins.class.js";
import { goomba01, goomba02, goomba03, goomba04, goomba05 } from "../../class/gombas/gombas.class.js";

export let scrollOffsetX = 0;
export let scrollOffsetY = 0;


export function objectMovements() {
if (keys.ArrowRight.pressed || keys.d.pressed ) {

    scrollOffsetX += player.speed

    platformList.forEach((createPlatform) => {
        createPlatform.position.x -= player.speed
        });

    genericObjectList.forEach((genericObject) => {
       genericObject.position.x -= player.speed/5  
    });


    bounty1.position.x -= player.speed
    bounty2.position.x -= player.speed
    bounty3.position.x -= player.speed
    bounty4.position.x -= player.speed
    bounty5.position.x -= player.speed
    bounty6.position.x -= player.speed
    bounty7.position.x -= player.speed
    bounty8.position.x -= player.speed
    bounty9.position.x -= player.speed
    bounty10.position.x -= player.speed
    bounty11.position.x -= player.speed
    bounty12.position.x -= player.speed
    bounty13.position.x -= player.speed
    bounty14.position.x -= player.speed
    bounty15.position.x -= player.speed
    bounty16.position.x -= player.speed
    bounty17.position.x -= player.speed
    bounty18.position.x -= player.speed
    bounty19.position.x -= player.speed
    bounty20.position.x -= player.speed
    bounty21.position.x -= player.speed
    bounty22.position.x -= player.speed
    bounty23.position.x -= player.speed
    bounty24.position.x -= player.speed
    bounty25.position.x -= player.speed
    bounty26.position.x -= player.speed
    bounty27.position.x -= player.speed
    bounty28.position.x -= player.speed
    bounty29.position.x -= player.speed
    bounty30.position.x -= player.speed
    bounty31.position.x -= player.speed
    bounty32.position.x -= player.speed
    bounty33.position.x -= player.speed
    bounty34.position.x -= player.speed
    bounty35.position.x -= player.speed
    bounty36.position.x -= player.speed
    bounty37.position.x -= player.speed
    bounty38.position.x -= player.speed
    bounty39.position.x -= player.speed
    bounty40.position.x -= player.speed
    bounty41.position.x -= player.speed
    bounty42.position.x -= player.speed

    
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

                platformList.forEach((createPlatform) => {
                   createPlatform.position.x += player.speed
                })

                genericObjectList.forEach((genericObject) => {
                   genericObject.position.x += player.speed/5 
                })

        bounty1.position.x += player.speed
        bounty2.position.x += player.speed
        bounty3.position.x += player.speed
        bounty4.position.x += player.speed
        bounty5.position.x += player.speed
        bounty6.position.x += player.speed
        bounty7.position.x += player.speed
        bounty8.position.x += player.speed
        bounty9.position.x += player.speed
        bounty10.position.x += player.speed
        bounty11.position.x += player.speed
        bounty12.position.x += player.speed
        bounty13.position.x += player.speed
        bounty14.position.x += player.speed
        bounty15.position.x += player.speed
        bounty16.position.x += player.speed
        bounty17.position.x += player.speed
        bounty18.position.x += player.speed
        bounty19.position.x += player.speed
        bounty20.position.x += player.speed
        bounty21.position.x += player.speed
        bounty22.position.x += player.speed
        bounty23.position.x += player.speed
        bounty24.position.x += player.speed
        bounty25.position.x += player.speed
        bounty26.position.x += player.speed
        bounty27.position.x += player.speed
        bounty28.position.x += player.speed
        bounty29.position.x += player.speed
        bounty30.position.x += player.speed
        bounty31.position.x += player.speed
        bounty32.position.x += player.speed
        bounty33.position.x += player.speed
        bounty34.position.x += player.speed
        bounty35.position.x += player.speed
        bounty36.position.x += player.speed
        bounty37.position.x += player.speed
        bounty38.position.x += player.speed
        bounty39.position.x += player.speed
        bounty40.position.x += player.speed
        bounty41.position.x += player.speed
        bounty42.position.x += player.speed

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

 if
    (
        keys.ArrowUp.pressed || 
        keys.z.pressed 
        ) {
            scrollOffsetY += player.position.y
 }
}