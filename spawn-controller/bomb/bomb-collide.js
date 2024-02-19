import { allPlatformList } from "../platforms/platforms-manager/platforms-list.js";
import { bomb } from "./bomb-spawn.js";



export function bombCollideOnPlatforms() {
    for (const platform of allPlatformList) {
        for (const currentPlatform of platform) {
            if (bomb.bombOnPlatform(currentPlatform)) {
                bomb.velocity.y = -5;
                return;
            }
        }
    }
}; 