import { canvasParams } from "./canvas.js";
import { player } from "./keyboard.js";
import {
  spawnAreaLevelOneScrollOffsetXMoreThan5_900,
  spawnAreaLevelOneScrollOffsetX_0,
} from "./areas/area-level-one/area.js";
import {
  genericObjectList,
  skyList,
} from "./spawn-controller/generic/generic-manager/generic-place.js";
import { takeCoin } from "./spawn-controller/coins/coins-manager/coin-take.js";
import { goldCoinList } from "./spawn-controller/coins/coins-manager/coins-adjustment.js";
import {
  scrollOffsetX,
  objectMovements,
  canvasTrackingOffsetX,
  overTheCanvasLimit,
} from "./objects-movement-handler/movementHandler.js";
import { takeRedMushroom } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-take.js";
import { redMushroomList } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "./spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import {
  collideOnBelowBlueMushroom,
  collideOnTheLeftOrRightBlueMushroom,
  collideOnTheTopBlueMushroom,
} from "./spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-collide.js";
import { platformCollide } from "./spawn-controller/platforms/platforms-manager/platforms-collide.js";
import {
  bigCloudList,
  littleCloudList,
} from "./spawn-controller/clouds/clouds-manager/clouds-dispach.js";
import { bushList120x100 } from "./spawn-controller/bushs/bush-manager/bush-dispach.js";
import { waterfallList } from "./spawn-controller/waterfall/waterfall-manager/waterfall-place.js";
import { bridgeList } from "./spawn-controller/bridges/bridge-manager/bridge-place.js";
import { bridgeCollide } from "./spawn-controller/bridges/bridge-manager/bridge-collide.js";
import { treeList } from "./spawn-controller/trees/tree-manager/tree-dispach.js";
import { goombasList } from "./spawn-controller/gombas/gombas-manager/gombas-dispach.js";
import {
  collideOnBelowGoombas,
  collideOnTheLeftOrRightGoombas,
  collideOnTheTopGoombas,
} from "./spawn-controller/gombas/gombas-manager/goombas-collide.js";
import { fenceList } from "./spawn-controller/fences/fences-dispach.js";
import { houseList } from "./spawn-controller/houses/houses-dispach.js";
import { bombList } from "./spawn-controller/bomb/bomb-spawn.js";
import {
  bombCollideOnBlueMushrooms,
  bombCollideOnPlatforms,
} from "./spawn-controller/bomb/bomb-collide.js";
import { gameOver } from "./game-over.js";
import { drawPlatforms } from "./spawn-controller/platforms/platforms-manager/platforms-draw.js";
import { updateParticles } from "./spawn-controller/particles/particles-manager/particle-update.js";

export const gravity = 0.5;

let isAreaLevelOneAdded = false;
let isAreaLevelTwoAdded = false;

function animate() {
  requestAnimationFrame(animate);
  canvasParams.c.fillStyle = "white";
  canvasParams.c.fillRect(
    0,
    0,
    canvasParams.canvas.width,
    canvasParams.canvas.height,
  );

  if (!isAreaLevelOneAdded && scrollOffsetX === 0) {
    spawnAreaLevelOneScrollOffsetX_0(isAreaLevelOneAdded);
    isAreaLevelOneAdded = true;
  }

  if (!isAreaLevelTwoAdded && scrollOffsetX >= 5900) {
    spawnAreaLevelOneScrollOffsetXMoreThan5_900(isAreaLevelTwoAdded);
    isAreaLevelTwoAdded = true;
  }

  skyList.forEach((sky) => {
    sky.draw();
  });

  genericObjectList.forEach((genericObject) => {
    genericObject.draw();
  });

  littleCloudList.forEach((cloud) => {
    cloud.draw();
    cloud.movementOnLeft();
  });

  bigCloudList.forEach((cloud) => {
    cloud.draw();
    cloud.movementOnLeft();
  });

  houseList.forEach((house) => {
    house.draw();
  });

  drawPlatforms();

  bridgeList.forEach((bridge) => {
    bridge.draw();
  });

  waterfallList.forEach((waterfall) => {
    waterfall.update();
  });

  fenceList.forEach((fence) => {
    fence.draw();
  });

  treeList.forEach((tree) => {
    tree.draw();
  });

  bushList120x100.forEach((bush) => {
    bush.draw();
  });

  goldCoinList.forEach((coin) => {
    coin.update();
  });

  redMushroomList.forEach((redMushroom) => {
    if (!redMushroom.isTaken) {
      redMushroom.update();
    }
  });

  blueMushroomList.forEach((blueMushroom) => {
    blueMushroom.update();
  });

  goombasList.forEach((goombas) => {
    goombas.update();
    goombas.moving();
  });

  bombList.forEach((bomb) => {
    bomb.update();
  });

  updateParticles();

  player.update();

  canvasTrackingOffsetX();
  objectMovements();
  overTheCanvasLimit();

  takeCoin();
  takeRedMushroom();

  platformCollide();
  bridgeCollide();
  collideOnTheLeftOrRightBlueMushroom();
  collideOnTheTopBlueMushroom();
  collideOnBelowBlueMushroom();
  collideOnTheLeftOrRightGoombas();
  collideOnTheTopGoombas();
  collideOnBelowGoombas();
  bombCollideOnPlatforms();
  bombCollideOnBlueMushrooms();

  gameOver();
}
animate();

canvasParams.c.imageSmoothingEnabled = true;
