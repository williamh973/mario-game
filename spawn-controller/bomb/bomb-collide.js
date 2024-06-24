import { substractEnemy } from "../../player-actions/player-interactions.js";
import { blueMushroomList } from "../blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { showParticlesBomb } from "../particles/particles-manager/particle-bomb.js";
import { allPlatformList } from "../platforms/platforms-manager/platforms-list.js";
import { bomb, bombList } from "./bomb-spawn.js";

export function bombCollideOnPlatforms() {
  for (const platform of allPlatformList) {
    for (const currentPlatform of platform) {
      if (bomb.collide(currentPlatform)) {
        bomb.velocity.y = -5;
        return;
      }
    }
  }
}

export function bombCollideOnBlueMushrooms() {
  for (let i = 0; i < blueMushroomList.length; i++) {
    const blueMushroom = blueMushroomList[i];
    for (let j = 0; j < bombList.length; j++) {
      const bomb = bombList[j];
      if (bomb.collide(blueMushroom)) {
        bombList.splice(j, 1);
        blueMushroomList.splice(i, 1);
        showParticlesBomb(blueMushroom);
        substractEnemy();
        return;
      }
    }
  }
}
