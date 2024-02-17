import { platformList500x43 } from "../platforms/platforms-manager/platform-adjustment.js";
import { Fence } from "./fences.class.js";


export let fenceList = [];


export async function dispachFence() {
    return new Promise((resolve) => {
        for (let i = 0; i < 7; i++) {
            spawnFence();
        }
        resolve();
    })
};

function spawnFence() {
    let fence = new Fence();
    fenceList.push(fence);
    placeFence(fence, fenceList.length - 1);
};


function placeFence(fence, index) {
    
    const randomPlatformIndex = Math.floor(Math.random() * platformList500x43.length);
    const randomPlatform = platformList500x43[randomPlatformIndex];  
    
    fence.placeFenceOnRandomPlatformList500x43(randomPlatform);
    fence.onPlatform = randomPlatform;

    for (let i = 0; i < fenceList.length; i++) {
        for (let j = i + 1; j < fenceList.length; j++) {
            if (fenceList[i].overlapsWith(fenceList[j])) {
                // console.log("overlaps fence with other fence");
                
                fence.placeFenceOnRandomPlatformList500x43(randomPlatform);
                fence.onPlatform = randomPlatform;
                // console.log("fence repositionned");

                for (let i = 0; i < fenceList.length; i++) {
                    for (let j = i + 1; j < fenceList.length; j++) {
                        if (fenceList[i].overlapsWith(fenceList[j])) {
                            // console.log("overlaps fence with other fence after reposition");
                            fenceList.splice(index, 1);
                            // console.log("This fence has been deleted");
                        }
                    }
                }
            }
        }
    }
};