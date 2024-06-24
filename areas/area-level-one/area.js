import {
  dispachGrassPlatforms494x72,
  dispachGrassPlatforms84x72,
  dispachGrassPlatforms202x56,
  dispachGrassPlatforms150x72,
  dispachGrassPlatforms500x43,
  dispachGrassPlatform630x217,
  dispachGrassPlatforms202x56OnPlatform630x217,
  dispachGrassPlatforms158x78,
} from "../../spawn-controller/platforms/platforms-manager/platform-dispach.js";
import { checkIfPlatformsAdjusted } from "../../spawn-controller/platforms/platforms-manager/platform-adjustment.js";
import { dispachAllRedMushroom } from "../../spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { dispachRandomGoldCoins } from "../../spawn-controller/coins/coins-manager/coins-dispach.js";
import { checkFiveTimesIfAllGoldCoinsAreAdjusted } from "../../spawn-controller/coins/coins-manager/coins-adjustment.js";
import { dispachAllBlueMushrooms } from "../../spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { checkIfBlueMushroomAreAdjusted } from "../../spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-ajustment.js";
import {
  dispachBigClouds,
  dispachLittleClouds,
} from "../../spawn-controller/clouds/clouds-manager/clouds-dispach.js";
import { dispachAllBushes } from "../../spawn-controller/bushs/bush-manager/bush-dispach.js";
import { dispachAllTrees } from "../../spawn-controller/trees/tree-manager/tree-dispach.js";
import { spawnGenericObject } from "../../spawn-controller/generic/generic-manager/generic-place.js";
import { placeWaterfallOnPlatform630x217 } from "../../spawn-controller/waterfall/waterfall-manager/waterfall-place.js";
import { checkIfWaterfallsAreAdjusted } from "../../spawn-controller/waterfall/waterfall-manager/waterfall-ajust.js";
import { placeBridgeOnPlatform630x217 } from "../../spawn-controller/bridges/bridge-manager/bridge-place.js";
import { checkIfBridgeAreAdjusted } from "../../spawn-controller/bridges/bridge-manager/bridge-adjust.js";
import { dispachGoombas } from "../../spawn-controller/gombas/gombas-manager/gombas-dispach.js";
import { checkGoombasAreAdjusted } from "../../spawn-controller/gombas/gombas-manager/goombas-ajust.js";
import { dispachFence } from "../../spawn-controller/fences/fences-dispach.js";
import { checkFencesAreAdjusted } from "../../spawn-controller/fences/fences-ajust.js";
import { dispachHouses } from "../../spawn-controller/houses/houses-dispach.js";
import {
  dispachGreenPlatforms105x73,
  dispachGreenPlatforms89x180,
} from "../../spawn-controller/platforms/platforms-manager/platform-green-dispach.js";

export async function spawnAreaLevelOneScrollOffsetX_0(isAreaLevelOneAdded) {
  await spawnGenericObject();

  await dispachLittleClouds();
  await dispachBigClouds();

  await dispachGrassPlatforms494x72();
  await dispachGrassPlatforms84x72();
  await dispachGrassPlatforms150x72();
  await dispachGrassPlatforms202x56();
  await dispachGrassPlatform630x217();
  await dispachGrassPlatforms202x56OnPlatform630x217();
  await dispachGrassPlatforms500x43();
  await dispachGrassPlatforms158x78();
  await dispachGreenPlatforms105x73();
  await dispachGreenPlatforms89x180();

  await checkIfPlatformsAdjusted();

  await placeWaterfallOnPlatform630x217();
  await checkIfWaterfallsAreAdjusted();

  await placeBridgeOnPlatform630x217();
  await checkIfBridgeAreAdjusted();

  await dispachHouses();

  await dispachAllBushes();

  await dispachAllTrees();

  await dispachAllRedMushroom();

  await dispachAllBlueMushrooms();
  await checkIfBlueMushroomAreAdjusted();

  await dispachRandomGoldCoins();
  await checkFiveTimesIfAllGoldCoinsAreAdjusted();

  await dispachGoombas();
  await checkGoombasAreAdjusted();

  await dispachFence();
  await checkFencesAreAdjusted();

  isAreaLevelOneAdded = false;
}

export async function spawnAreaLevelOneScrollOffsetXMoreThan5_900(
  isAreaLevelTwoAdded,
) {
  await spawnGenericObject();
  isAreaLevelTwoAdded = false;
}
