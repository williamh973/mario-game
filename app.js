import { canvasParams } from "./canvas.js";
import { player } from "./keyboard.js";
import { spawnAreaLevelOne } from "./areas/area-level-one/area.js"; 
import { platformList494x72, platformList202x56, platformList84x72, platformList150x72, } from "./spawn-controller/platforms/platforms-manager/platform-adjustment.js";
import { genericObjectList } from "./spawn-controller/generic/sky-and-hills/sky-and-hills.object.js";
import { takeCoin } from "./spawn-controller/coins/coins-manager/coin-take.js";
import { goldCoinList } from "./spawn-controller/coins/coins-manager/coins-adjustment.js";
import { particulesCoinList } from "./spawn-controller/particles/particle-coin-loop.js";
import { scrollOffsetX, scrollOffsetY, objectMovements, canvasTrackingOffsetX, overTheCanvasLimit } from "./objects-movement-handler/movementHandler.js";
import { waterfall, waterfall02 } from "./class/waterfall/waterfall.class.js";
import { goomba01, goomba02, goomba03, goomba04, goomba05 } from "./class/gombas/gombas.class.js";
import { mooveGomba } from "./objects-movement-handler/gombas-movement-handler.js";
import { takeRedMushroom } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-take.js";
import { particulesRedMushroomList } from "./spawn-controller/particles/particle-redMushroom.js";
import { redMushroomList } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "./spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { collideOnBelowBlueMushroom, collideOnTheLeftOrRightBlueMushroom, collideOnTheTopBlueMushroom } from "./spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-collide.js";
import { particulesBlueMushroomList } from "./spawn-controller/particles/particle-blueMushroom.js";
import { platformCollide } from "./spawn-controller/platforms/platforms-manager/platforms-collide.js";
import { bigCloudList, littleCloudList } from "./spawn-controller/clouds/clouds-manager/clouds-dispach.js";


 



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


//     goomba01 = new Goomba();
//     goomba02 = new Goomba02();
//     goomba03 = new Goomba03();
//     goomba04 = new Goomba04();
//     goomba05 = new Goomba05();



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




let isAreaLevelOneAdded = false;


function animate() {
    requestAnimationFrame(animate)
    canvasParams.c.fillStyle = ' white '
    canvasParams.c.fillRect(0, 0, canvasParams.canvas.width, canvasParams.canvas.height) 
    
    if (!isAreaLevelOneAdded && scrollOffsetX === 0) {
        spawnAreaLevelOne(isAreaLevelOneAdded);
        isAreaLevelOneAdded = true;
    }

    
    genericObjectList.forEach((genericObject) => {
        genericObject.draw()
    })
    
    littleCloudList.forEach((cloud) => {
        cloud.draw()
    })
    
    bigCloudList.forEach((cloud) => {
        cloud.draw()
    })
    
    
    platformList150x72.forEach((platform) => {
        platform.draw()
    })
    
    platformList84x72.forEach((platform) => {
        platform.draw()
    })
    
    platformList202x56.forEach((platform) => {
        platform.draw()
    })
    
    platformList494x72.forEach((platform) => {
        platform.draw()
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
            blueMushroom.drawDebugCollisionSquare();
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

    // trees.forEach((theTree) => {
    //     theTree.draw()
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
// /////////////////////  TO GET AWAY FROM OBJECTS  ///////////////////////////////

        

// plateformBigSteel.position.x -= player.speed
// plateformBigSteel02.position.x -= player.speed
// plateformBigSteel03.position.x -= player.speed
// plateformBigSteel04.position.x -= player.speed


// rocks.forEach((createRock) => {
// createRock.position.x -= player.speed
// });


// trees.forEach((createTree) => {
//         createTree.position.x -= player.speed
//     });


// crates.forEach((createCrate) => {
//         createCrate.position.x -= player.speed
//             })


//             signs.forEach((createSign) => {
//                 createSign.position.x -= player.speed
//             })


//             houses.forEach((theHouse01) => {
//                 theHouse01.position.x -= player.speed
//             })


//             leaves.forEach((theLeaves) => {
//                 theLeaves.position.x -= player.speed
//             })


//             bushs.forEach((theBush) => {
//                 theBush.position.x -= player.speed
//             })


//             fences.forEach((theFence) => {
//                 theFence.position.x -= player.speed
//             })


//             barrels.forEach((theBarrel) => {
//                 theBarrel.position.x -= player.speed
//             })


//             waters.forEach((water) => {
//                 water.position.x -= player.speed
//             })


// bridges.forEach((theBridgeLeft) => {
//     theBridgeLeft.position.x -= player.speed
// })


// flags.forEach((flag) => {
//     flag.position.x -= player.speed
//     });



// plateformBigSteel.position.x += player.speed
// plateformBigSteel02.position.x += player.speed
// plateformBigSteel03.position.x += player.speed
// plateformBigSteel04.position.x += player.speed


//             rocks.forEach((createRock) => {
//                 createRock.position.x += player.speed
//             })


//             trees.forEach((createTree) => {
//                 createTree.position.x += player.speed
//             })


//             crates.forEach((createCrate) => {
//                 createCrate.position.x += player.speed
//             })


//             signs.forEach((createSign) => {
//                 createSign.position.x += player.speed
//             })


//             houses.forEach((theHouse01) => {
//                 theHouse01.position.x += player.speed
//             })


//             leaves.forEach((theLeaves) => {
//                 theLeaves.position.x += player.speed
//             })


//             bushs.forEach((theBush) => {
//                 theBush.position.x += player.speed
//             })


//             fences.forEach((theFence) => {
//                 theFence.position.x += player.speed
//             })

//             barrels.forEach((theBarrel) => {
//                 theBarrel.position.x += player.speed
//             })

//             waters.forEach((water) => {
//                 water.position.x += player.speed
//             })

//             // le pont
//             bridges.forEach((theBridgeLeft) => {
//             theBridgeLeft.position.x += player.speed
//             })

//             // flag
//            flags.forEach((flag) => {
//            flag.position.x += player.speed
//            });




 
    takeCoin();
    takeRedMushroom(); 
    platformCollide();
    collideOnTheLeftOrRightBlueMushroom();
    collideOnTheTopBlueMushroom();
    collideOnBelowBlueMushroom();

    // console.log("player.velocity.x", player.velocity.x);
    




//   // To make the player jump on a metal platform
//  function moveOnPlatformBigS01() {
//     if (
//         player.position.y + player.height <= plateformBigSteel.position.y &&
//         player.position.y + player.height + player.velocity.y >= plateformBigSteel.position.y &&
//         player.position.x + player.width >= plateformBigSteel.position.x + 23 &&                         // right side
//         player.position.x + player.width <= plateformBigSteel.position.x + plateformBigSteel.width + 35  // left side
//     ) {
//         player.velocity.y = 0
//     }
//     if (
//         player.position.y + player.height <= plateformBigSteel02.position.y &&
//         player.position.y + player.height + player.velocity.y >= plateformBigSteel02.position.y &&
//         player.position.x + player.width >= plateformBigSteel02.position.x + 23 &&   // right side
//         player.position.x + player.width <= plateformBigSteel02.position.x + plateformBigSteel02.width + 35   // left side
//     ) {
//         player.velocity.y = 0
//     }
//     if (
//         player.position.y + player.height <= plateformBigSteel03.position.y &&
//         player.position.y + player.height + player.velocity.y >= plateformBigSteel03.position.y &&
//         player.position.x + player.width >= plateformBigSteel03.position.x + 23 &&  // right side
//         player.position.x + player.width <= plateformBigSteel03.position.x + plateformBigSteel03.width + 35  // left side
//     ) {
//         player.velocity.y = 0
//     }
//     if (
//         player.position.y + player.height <= plateformBigSteel04.position.y &&
//         player.position.y + player.height + player.velocity.y >= plateformBigSteel04.position.y &&
//         player.position.x + player.width >= plateformBigSteel04.position.x + 23 && // right side
//         player.position.x + player.width <= plateformBigSteel04.position.x + plateformBigSteel04.width + 35  // left side
//     ) {
//         player.velocity.y = 0
//     }
// }


    
   
//     rocks.forEach((rock) => {
//         if (
//             player.position.y + player.height >= rock.position.y + 20 &&
//             player.position.y + player.height + player.velocity.y >= rock.position.y &&
//             player.position.x + player.width >= rock.position.x + 20 &&  // right side
//             player.position.x + player.width <= rock.position.x + rock.width + 35  // left side
//         ) {
//             player.velocity.y = 0
//         }
//     })
   
//     rocks.forEach((rock) => {
//         if (
//             player.position.x + player.width + player.velocity.x <= rock.position.x + rock.width &&
//             player.position.x + player.width + player.velocity.x >= rock.position.x + 27 &&
//             player.position.y + player.height >= rock.position.y + 20 &&
//             player.position.y + player.height + player.velocity.y >= rock.position.y
//         ) {
//             player.velocity.x = -10

//         }
//     })
   
//     rocks.forEach((rock) => {
//         if (
//             player.position.x + player.width + player.velocity.x <= rock.position.x + rock.width + 23 &&
//             player.position.x + player.width + player.velocity.x >= rock.position.x + rock.width &&
//             player.position.y + player.height >= rock.position.y + 20 &&
//             player.position.y + player.height + player.velocity.y >= rock.position.y
//         ) {
//             player.velocity.x = 10

//         }
//     })

// rocks.forEach((thebigRock) => {
//     if (
//         player.position.y + player.height >= thebigRock.position.y + 20 &&
//         player.position.y + player.height + player.velocity.y >= thebigRock.position.y &&
//         player.position.x + player.width >= thebigRock.position.x + 20 && 
//         player.position.x + player.width <= thebigRock.position.x + thebigRock.width + 35 
//     ) {
    
//         player.velocity.y = 0
//     }
// })


//     crates.forEach((crate) => {
//         if (
//             player.position.y + player.height <= crate.position.y &&
//             player.position.y + player.height + player.velocity.y >= crate.position.y &&
//             player.position.x + player.width >= crate.position.x + 20 &&  
//             player.position.x + player.width <= crate.position.x + crate.width + 35 
//         ) {
//             player.velocity.y = 0
//         }
//     })



//  barrels.forEach((theBarrel) => {
//     if (
//         player.position.y + player.height <= theBarrel.position.y &&
//         player.position.y + player.height + player.velocity.y >= theBarrel.position.y &&
//         player.position.x + player.width >= theBarrel.position.x + 20 &&  
//         player.position.x + player.width <= theBarrel.position.x + theBarrel.width + 35   
//     ) {
//         player.velocity.y = 0
//     }
// })


//   // Pour faire sauter le joueur sur les parties du pont
//   bridges.forEach((theBridgeLeft) => {
//     if (
//         player.position.y + player.height <= theBridgeLeft.position.y &&
//         player.position.y + player.height + player.velocity.y >= theBridgeLeft.position.y &&
//         player.position.x + player.width >= theBridgeLeft.position.x + 20 &&  
//         player.position.x + player.width <= theBridgeLeft.position.x + theBridgeLeft.width + 35   
//     ) {
//         player.velocity.y = 0
//     }
// })

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





//     // if mario falls out of the canvas and he has life left, he is repositioned and loses 1 life point.
//     if (player.position.y > canvas.height)  {

//         player.position.x = (0)
//         player.position.y = (0)
//         player.currentSprite = player.sprites.stand.right
//         player.currentCropWidth = player.sprites.stand.cropWidth
//         player.width = player.sprites.stand.width
//         vie -= 0; // 1
//         lifeTag.innerText = "Vie : " + vie;
//     }



        



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


// goomba01.update()
// goomba02.update()
// goomba03.update()
// goomba04.update()
// goomba05.update()


// waterfall.update()
// waterfall02.update()

// plateformBigSteel.update()
// plateformBigSteel02.update()
// plateformBigSteel03.update()
// plateformBigSteel04.update()




// collisionWater()
    
 



// //////////////////  COLLISIONS    ////////////////////////////////////



// // goombas 01
// if (
//     player.position.y + player.height <= goomba01.position.y + goomba01.height   &&
//     player.position.y + player.height + player.velocity.y >= goomba01.position.y + 35 &&
//     player.position.x + player.width >= goomba01.position.x  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= goomba01.position.x + goomba01.width  + 50  // ajustement des bords coté droit 
// ) {
// // particle effect
// for(let i = 0; i < 22 ; i++) {
//     particules.push(new Particule({
//         position:{
//             x: player.position.x + player.width/2, // /2
//             y: player.position.y + player.height/2
//         },
//         velocity:{
//             x: (Math.random()-0.5)*2,
//             y:(Math.random()-0.5)*2
//         },
//         radius: Math.random()*2,
//         color:'red'
//     }))
// }
// // repositioning of mario and loss of a life
// player.position.x = 300 
// lifeLost()
// }

// // goombas 02
// if (
//     player.position.y + player.height <= goomba02.position.y + goomba02.height   &&
//     player.position.y + player.height + player.velocity.y >= goomba02.position.y + 35 &&
//     player.position.x + player.width >= goomba02.position.x  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= goomba02.position.x + goomba02.width  + 50  // ajustement des bords coté droit 
// ) {
// // particle effect
// for(let i = 0; i < 22 ; i++) {
//     particules.push(new Particule({
//         position:{
//             x: player.position.x + player.width/2, // /2
//             y: player.position.y + player.height/2
//         },
//         velocity:{
//             x: (Math.random()-0.5)*2,
//             y:(Math.random()-0.5)*2
//         },
//         radius: Math.random()*2,
//         color:'red'
//     }))
// }
// // repositioning of mario and loss of a life
// player.position.x = 300 
// lifeLost()
// }

// // goombas 03
// if (
//     player.position.y + player.height <= goomba03.position.y + goomba03.height   &&
//     player.position.y + player.height + player.velocity.y >= goomba03.position.y + 35 &&
//     player.position.x + player.width >= goomba03.position.x  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= goomba03.position.x + goomba03.width  + 50  // ajustement des bords coté droit 
// ) {
// // particle effect
// for(let i = 0; i < 22 ; i++) {
//     particules.push(new Particule({
//         position:{
//             x: player.position.x + player.width/2, // /2
//             y: player.position.y + player.height/2
//         },
//         velocity:{
//             x: (Math.random()-0.5)*2,
//             y:(Math.random()-0.5)*2
//         },
//         radius: Math.random()*2,
//         color:'red'
//     }))
// }
// // repositioning of mario and loss of a life
// player.position.x = 300 
// lifeLost()
// }

// // goombas 04
// if (
//     player.position.y + player.height <= goomba04.position.y + goomba04.height   &&
//     player.position.y + player.height + player.velocity.y >= goomba04.position.y + 35 &&
//     player.position.x + player.width >= goomba04.position.x  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= goomba04.position.x + goomba04.width  + 50  // ajustement des bords coté droit 
// ) {
// // particle effect
// for(let i = 0; i < 22 ; i++) {
//     particules.push(new Particule({
//         position:{
//             x: player.position.x + player.width/2, // /2
//             y: player.position.y + player.height/2
//         },
//         velocity:{
//             x: (Math.random()-0.5)*2,
//             y:(Math.random()-0.5)*2
//         },
//         radius: Math.random()*2,
//         color:'red'
//     }))
// }
// // repositioning of mario and loss of a life
// player.position.x = 300 
// lifeLost()
// }

// // goombas 05
// if (
//     player.position.y + player.height <= goomba05.position.y + goomba05.height   &&
//     player.position.y + player.height + player.velocity.y >= goomba05.position.y + 35 &&
//     player.position.x + player.width >= goomba05.position.x  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= goomba05.position.x + goomba05.width  + 50  // ajustement des bords coté droit 
// ) {
// // particle effect
// for(let i = 0; i < 22 ; i++) {
//     particules.push(new Particule({
//         position:{
//             x: player.position.x + player.width/2, // /2
//             y: player.position.y + player.height/2
//         },
//         velocity:{
//             x: (Math.random()-0.5)*2,
//             y:(Math.random()-0.5)*2
//         },
//         radius: Math.random()*2,
//         color:'red'
//     }))
// }
// // repositioning of mario and loss of a life
// player.position.x = 300 
// lifeLost()
// }

// DisepearSteelPlatform()
 
// moveOnPlatformBigS01()  // To make the player jump on a metal platform

// mooveGomba() 

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





// // COLLISION WATER
//     function collisionWater() {
//     waters.forEach((thewater02) => {
//         if (
//             player.position.y + player.height <= thewater02.position.y + thewater02.width + 30 &&
//             player.position.y + player.height + player.velocity.y >= thewater02.position.y  &&
//             player.position.x + player.width >= thewater02.position.x   &&  // ajustement des bords coté gauche 
//             player.position.x + player.width <= thewater02.position.x + thewater02.width +25   // ajustement des bords coté droit 
//         ) {
//             player.currentSprite = player.sprites.drown.right
//             player.currentCropWidth = player.sprites.drown.cropWidth
//             player.width = player.sprites.drown.width
//             player.velocity.y = +10
//         }
//     })



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