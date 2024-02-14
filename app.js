import { canvasParams } from "./canvas.js";
import { player } from "./keyboard.js";
import { spawnAreaLevelOne, spawnAreaLevelTwo } from "./areas/area-level-one/area.js"; 
import { platformList494x72, platformList202x56, platformList84x72, platformList150x72, platformList500x43, platformList630x217, } from "./spawn-controller/platforms/platforms-manager/platform-adjustment.js";
import { genericObjectList } from "./spawn-controller/generic/generic-manager/generic-place.js";
import { takeCoin } from "./spawn-controller/coins/coins-manager/coin-take.js";
import { goldCoinList } from "./spawn-controller/coins/coins-manager/coins-adjustment.js";
import { particulesCoinList } from "./spawn-controller/particles/particles-manager/particle-coin.js";
import { scrollOffsetX, scrollOffsetY, objectMovements, canvasTrackingOffsetX, overTheCanvasLimit } from "./objects-movement-handler/movementHandler.js";
import { takeRedMushroom } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-take.js";
import { particulesRedMushroomList } from "./spawn-controller/particles/particles-manager/particle-redMushroom.js";
import { redMushroomList } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "./spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { collideOnBelowBlueMushroom, collideOnTheLeftOrRightBlueMushroom, collideOnTheTopBlueMushroom } from "./spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-collide.js";
import { particulesBlueMushroomList } from "./spawn-controller/particles/particles-manager/particle-blueMushroom.js";
import { platformCollide } from "./spawn-controller/platforms/platforms-manager/platforms-collide.js";
import { bigCloudList, littleCloudList } from "./spawn-controller/clouds/clouds-manager/clouds-dispach.js";
import { bushList120x100 } from "./spawn-controller/bushs/bush-manager/bush-dispach.js";
import { waterfallList } from "./spawn-controller/waterfall/waterfall-manager/waterfall-place.js";
import { bridgeList } from "./spawn-controller/bridges/bridge-manager/bridge-place.js";
import { bridgeCollide } from "./spawn-controller/bridges/bridge-manager/bridge-collide.js";
import { treeList } from "./spawn-controller/trees/tree-manager/tree-dispach.js";
import { goombasList } from "./spawn-controller/gombas/gombas-manager/gombas-dispach.js";
import { collideOnBelowGoombas, collideOnTheLeftOrRightGoombas, collideOnTheTopGoombas } from "./spawn-controller/gombas/gombas-manager/goombas-collide.js";
import { particulesGoombaList } from "./spawn-controller/particles/particles-manager/particle-goomba.js";

 



// // Launched at the start of the game, when we lose or win
// function init() {


//     // duplicate variables for the init() function
//     theplatform = createPlatform("./images/platform1.png")
//     theSky = createSky("./images/ciel.png");
//     theHills = createHills("./images/paysage.png");
//     thePlatformSmallTall = createPlatformSmallTall("./images/platformSmallTall.png");
//     thePlatformSmall = createPlatformSmall("./images/platformSmall.png");
//     theplateformGreen = createPlateformGreen("./images/plateform-green.png");
//     theplateformGreenSmall = createPlateformGreenSmall("./images/plateform-green02.png")
//     theplateformSteel = createPlateformSteel("./images/plateform-steel02.png")
//     theplateform4 = createPlatformMedium1("./images/plateform4.png")
//     theplateform5 = createPlatformMedium2("./images/plateform5.png")
//     theplateform6 = createPlatformMedium3("./images/plateform6.png")
//     theplateform7 = createPlatformMedium4("./images/plateform7.png")
//     theplateform8 = createPlatformMedium5("./images/plateform8.png")
//     theplateform9 = createPlatformMedium6("./images/plateform9.png")
//     theplateform10 = createPlatformPlate("./images/plateform10.png")
//     theplateform11 = createPlatform11("./images/plateform11.png")
//     theplateform12 = createPlatform12("./images/plateform12.png")
//     theRock = createRock("./images/rocher01.png");
//     theRock02 = createRock02("./images/rocher02.png");
//     thebigRock = createBigrock("./images/rocher03.png");
//     theRock03 = createRock03("./images/rocher4.png")
//     theRock04 = createRock04("./images/rocher5.png")
//     theTree = createTree("./images/arbre01.png");
//     thebigTree = createBigtree("./images/arbre02.png");
//     theMiniTree = createMiniTree("./images/arbre03.png")
//     theCrate = createCrate("./images/caisse.png");
//     thecrateSmall = createCrateSmall("./images/crate_small.png");
//     theSign = createSign("./images/sign.png");
//     theHouse01 = createHouse01("./images/maison_jaune.png");
//     theHouse02 = createHouse02("./images/maison_marron.png");
//     theHouse03 = createHouse03("./images/maison3.png")
//     thePlatform02 = createplatform02("./images/platform2.png");
//     theLeaves = createLeaves01("./images/green-leavesSmall.png");
//     theLeavesRight = createLeaves02("./images/green-leavesSmallRight.png");
//     theBush = createBush("./images/buisson01.png");
//     theBush02 = createBush02("./images/buisson02.png")
//     theFence = createFence("./images/fence-wood.png")
//     theBarrel = createBarrel("./images/Barrel.png")
//     theBarrel02 = createBarrel02("./images/Barrel02.png")
//     theWater = createWater01("./images/water01.png")
//     theWater02 = createWater01("./images/water02.png")
//     theBridgeLeft = createBridgeLeft("./images/bridge-left.png")
//     theBridgeRight = createBridgeRight("./images/bridge-right.png")
//     theFlag = createFlag("./images/flag.png")



//     // plateformBigSteel = new PlatformBigSteel();
//     // plateformBigSteel02 = new PlatformBigSteel02();
//     // plateformBigSteel03 = new PlatformBigSteel03();
//     // plateformBigSteel04 = new PlatformBigSteel04();

//     // waterfall = new Waterfall();
//     // waterfall02 = new Waterfall02();

//     scoreTag = document.getElementById('score');
//     lifeTag = document.getElementById('vie');
//     timerTag = document.getElementById('timer');
//     blackScreen = document.querySelector('.blackScreen');
//     loseTag = document.getElementById('lose');
//     winTag = document.getElementById('win');
//     btnRestart = document.querySelector('#reload');
//     progScreen = document.getElementById('container-prog');
//     progBar = document.querySelector('.progress-bar');
//     vie = 1;
//     stock = 0;
//     time = 300; // 60 * 5 secondes = 300
//     counter = 0;
//     counterDiseapearBigS = 0; // counter for the disappearance of metal platforms
//     compteurGoomba = 0
//     counterKeydown = 0



// // remove the black mask at the initialization of the game when we win or lose
    // blackScreen.style.display = "none";


// }



// appearance of the "Restart" button
// btnRestart.addEventListener('click', restart);

// function restart() {
//     loseTag.style.display = "none";
//     btnRestart.style.display = "none";
//     init()
//     vie = 1;
//     lifeTag.innerText = "Vie : " + vie;
//     stock = 0;
//     scoreTag.innerText = "Score : " + stock;
// }


export const gravity = 0.5;

let isAreaLevelOneAdded = false;
let isAreaLevelTwoAdded = false;

function animate() {
    requestAnimationFrame(animate)
    canvasParams.c.fillStyle = ' white '
    canvasParams.c.fillRect(0, 0, canvasParams.canvas.width, canvasParams.canvas.height) 
    
    if (!isAreaLevelOneAdded && scrollOffsetX === 0) {
        spawnAreaLevelOne(isAreaLevelOneAdded);
        isAreaLevelOneAdded = true;
    }
// console.log(scrollOffsetX); 
    // if (!isAreaLevelTwoAdded && scrollOffsetX >= 1) {
    //     spawnAreaLevelTwo(isAreaLevelTwoAdded);
    //     isAreaLevelTwoAdded = true;
    // }

    
    genericObjectList.forEach((genericObject) => {
        genericObject.draw()
    })
    
    littleCloudList.forEach((cloud) => {
        cloud.draw()
    })
    
    bigCloudList.forEach((cloud) => {
        cloud.draw()
    })
    
    platformList202x56.forEach((platform) => {
        platform.draw()
    })
    
    platformList494x72.forEach((platform) => {
        platform.draw()
    })

    
    platformList150x72.forEach((platform) => {
        platform.draw()
    })
    
    platformList500x43.forEach((platform) => {
        platform.draw()
    })

    platformList84x72.forEach((platform) => {
        platform.draw()
    })

    platformList630x217.forEach((platform) => {
        platform.draw()
    })
    
    bridgeList.forEach((bridge) => {
        bridge.draw()
    })

    waterfallList.forEach((waterfall) => {
        waterfall.update()
    })

    
    treeList.forEach((tree) => {
        tree.draw()
        // tree.drawDebugCollisionSquare()
    })

    // console.log(scrollOffsetX);
    
    bushList120x100.forEach((bush) => {
        bush.draw()
    })



    goldCoinList.forEach((coin) => {
        if (!coin.isTaken) {
            coin.update()
        }
    })

    redMushroomList.forEach((redMushroom) => {
        if (!redMushroom.isTaken) {
            redMushroom.update()
        }
    })
    
    blueMushroomList.forEach((blueMushroom) => {
            blueMushroom.update()
            // blueMushroom.drawDebugCollisionSquare();
    })

    goombasList.forEach((goombas) => {
        goombas.update();
        goombas.moving();
        // goombas.drawDebugCollisionSquare();
    })

    particulesCoinList.forEach((particules, index) => {
        if (particulesCoinList.opacity <= 0) {
            particulesCoinList.splice(index, 1)
        } else {
            particules.update();
        }
    })
    
    particulesRedMushroomList.forEach((particules, index) => {
        if (particulesRedMushroomList.opacity <= 0) {
            particulesRedMushroomList.splice(index, 1)
        } else {
            particules.update();
        }
    })
    
    particulesBlueMushroomList.forEach((particules, index) => {
        if (particulesBlueMushroomList.opacity <= 0) {
            particulesBlueMushroomList.splice(index, 1)
        } else {
            particules.update();
        }
    })

    particulesGoombaList.forEach((particules, index) => {
        if (particulesGoombaList.opacity <= 0) {
            particulesGoombaList.splice(index, 1)
        } else {
            particules.update();
        }
    })
    
    player.update();
    player.drawDebugCollisionSquare();

    
    
    littleCloudList.forEach((cloud) => {
        cloud.position.x -= player.speed / 50
     })

     bigCloudList.forEach((cloud) => {
        cloud.position.x -= player.speed / 50
     })

    // waters.forEach((water) => {
        //     water.draw()
    // // })

    // rocks.forEach((theRock) => {
    //     theRock.draw()
    // })

    // crates.forEach((theCrate) => {
    //     theCrate.draw()
    // })

    // crates.forEach((thecrateSmall) => {
    //     thecrateSmall.draw()
    // })


    // signs.forEach((theSign) => {
    //     theSign.draw()
    // })

    // houses.forEach((theHouse01) => {
    //     theHouse01.draw()
    // })

    // houses.forEach((theHouse02) => {
    //     theHouse02.draw()
    // })

    // houses.forEach((theHouse03) => {
    //     theHouse03.draw()
    // })

    // leaves.forEach((theLeaves) => {
    //     theLeaves.draw()
    // })

    // bushs.forEach((theBush) => {
    //     theBush.draw()
    // })

    // fences.forEach((theFence) => {
    //     theFence.draw()
    // })

    // barrels.forEach((theBarrel) => {
    //     theBarrel.draw()
    // })

    // bridges.forEach((theBridgeLeft) => {
    //     theBridgeLeft.draw()
    // })
  
    // flags.forEach((flag) => {
    //     flag.draw()
    // })


canvasTrackingOffsetX();
objectMovements()
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


//  // condition de victoire
// flags.forEach((theFlag) => {
//     if (
//         player.position.y + player.height <= theFlag.position.y + 120 &&
//         player.position.y + player.height + player.velocity.y >= theFlag.position.y &&
//         player.position.x + player.width >= theFlag.position.x + 23 && 
//         player.position.x + player.width <= theFlag.position.x + theFlag.width + 35 
//     ) {
//         blackScreen.style.display = "flex";
//         winTag.style.display = "block";
//         btnRestart.style.display = "block";
//         player.speed = 0
//         player.position.x = -50
//         player.velocity.x = 0
//         player.velocity.y = 0
//         timerTag.innerText = "0";
//     }
// })


        



// //  if mario falls off the canvas and life is 0, the game is lost and resets.
// function gameOver() {
//     if(vie <= -1) { 
//         blackScreen.style.display = "flex";
//         loseTag.style.display = "block";
//         winTag.style.display = "none";
//         btnRestart.style.display = "block";
//         player.speed = 0
//         player.position.x = -50
//         player.velocity.x = 0
//         player.velocity.y = 0  
// }


// //  if the timer reaches zero, the game is lost and resets.
// if(time === 0) {
//     blackScreen.style.display = "flex";
//     loseTag.style.display = "block";
//     winTag.style.display = "none";
//     btnRestart.style.display = "block";
//     player.speed = 0
//     player.position.x = -50
//     player.velocity.x = 0
//     player.velocity.y = 0
// }
// }
// gameOver()


}
animate()






// // 30s loading screen with initialization

//   let loading = setInterval(() => {
//            // appearance of the opaque black mask with loading bar
//            progScreen.style.display = "none";
//            progBar.style.display = "block";
    
//         const el = document.querySelector('.number');
//         const elValue =  Number(el.getAttribute('data-value'));
//            if (counter !== elValue) {
//                counter++;
//                el.innerHTML = `${counter}` + ` %`;
//            }
//            if( counter === 100) {
//                init()
//                vie = 1;
//                lifeTag.innerText = "Vie : " + vie;
//                time = 300;
//                progScreen.style.display = "none";
//                progBar.style.display = "none";
//            }
// }, 300);

// setTimeout( function() {
// clearInterval(loading)
// }, 30000)



// // disappearance and reappearance of metal platforms. 
// function DisepearSteelPlatform() {

// if(scrollOffset > 14637)
// counterDiseapearBigS++

// if (counterDiseapearBigS >= 300) {
//             counterDiseapearBigS = 0
//         }
//         // Big steel platform 01
//         if( counterDiseapearBigS >= 150) { 
//             plateformBigSteel.position.y = -400 
//         } else{   
//             plateformBigSteel.position.y = 400 
//         }
//          // Big steel platform 02
//          if( counterDiseapearBigS >= 150) { 
//             plateformBigSteel02.position.y = -400 
//         } else{   
//             plateformBigSteel02.position.y = 490 
//         }
//          // Big steel platform 03
//          if( counterDiseapearBigS >= 150) { 
//             plateformBigSteel03.position.y = -400 
//         } else{   
//             plateformBigSteel03.position.y = 315 
//         }
//   // Big steel platform 04
//   if( counterDiseapearBigS >= 150) { 
//     plateformBigSteel04.position.y = -400 
// } else{   
//     plateformBigSteel04.position.y = 470 
// }
//     }


canvasParams.c.imageSmoothingEnabled = true