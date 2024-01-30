import { canvasParams } from "./canvas.js";
import { player } from "./keyboard.js";
import { spawnAreaLevelOne } from "./areas/area-level-one/area.js"; 
import { platformList494x72, platformList202x56, platformList84x72, platformList150x72, } from "./spawn-controller/platforms/platforms-manager/platform-adjustment.js";
import { genericObjectList } from "./spawn-controller/generic/sky-and-hills/sky-and-hills.object.js";
import { takeCoin } from "./spawn-controller/coins/coins-manager/coin-take.js";
import { goldCoinList } from "./spawn-controller/coins/coins-manager/coins-adjustment.js";
import { particulesCoinList } from "./spawn-controller/particles/particle-coin-loop.js";
import { Cloud, theCloud } from "./class/cloud/cloud.class.js";
import { scrollOffsetX, scrollOffsetY, objectMovements, canvasTrackingOffsetX, canvasTrackingOffsetY, overTheCanvasLimit } from "./objects-movement-handler/movementHandler.js";
import { waterfall, waterfall02 } from "./class/waterfall/waterfall.class.js";
import { goomba01, goomba02, goomba03, goomba04, goomba05 } from "./class/gombas/gombas.class.js";
import { mooveGomba } from "./objects-movement-handler/gombas-movement-handler.js";
import { takeRedMushroom } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-take.js";
import { particulesRedMushroomList } from "./spawn-controller/particles/particle-redMushroom.js";
import { redMushroomList } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";









// let mushroomB1 = new MushroomB1();
// let mushroomB2 = new MushroomB2();
// let mushroomB3 = new MushroomB3();
// let mushroomB4 = new MushroomB4();
// let mushroomB5 = new MushroomB5();
// let mushroomB6 = new MushroomB6();
// let mushroomB7 = new MushroomB7();
// let mushroomB8 = new MushroomB8();
// let mushroomB9 = new MushroomB9();
// let mushroomB10 = new MushroomB10();
// let mushroomB11 = new MushroomB11();
// let mushroomB12 = new MushroomB12();
// let mushroomB13 = new MushroomB13();
// let mushroomB14 = new MushroomB14();
// let mushroomB15 = new MushroomB15();
// let mushroomB16 = new MushroomB16();







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


//     mushroomB1 = new MushroomB1();
//     mushroomB2 = new MushroomB2();
//     mushroomB3 = new MushroomB3();
//     mushroomB4 = new MushroomB4();
//     mushroomB5 = new MushroomB5();
//     mushroomB6 = new MushroomB6();
//     mushroomB7 = new MushroomB7();
//     mushroomB8 = new MushroomB8();
//     mushroomB9 = new MushroomB9();
//     mushroomB10 = new MushroomB10();
//     mushroomB11 = new MushroomB11();
//     mushroomB12 = new MushroomB12();
//     mushroomB13 = new MushroomB13();
//     mushroomB14 = new MushroomB14();
//     mushroomB15 = new MushroomB15();
//     mushroomB16 = new MushroomB16();

//     mushroomR1 = new MushroomRouge();
//     mushroomR2 = new MushroomR2();
//     mushroomR3 = new MushroomR3();

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

    
    
    // console.log(scrollOffsetX);
    // console.log(platformList84x72);
    
    
    genericObjectList.forEach((genericObject) => {
        genericObject.draw()
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

    // clouds.forEach((theCloud) => {
    //     theCloud.draw()
    // })



// particle on the player when colliding with a Mushroom B
//     particules.forEach((particule,index)=>{
//         if(particule.opacity <= 0){
//             particules.splice(index,1)
//         }else{
//             particule.update();
//         }
//     }) 

// // particle on the player when colliding with a gold coin



canvasTrackingOffsetX();
canvasTrackingOffsetY();
objectMovements()
overTheCanvasLimit();
// /////////////////////  TO GET AWAY FROM OBJECTS  ///////////////////////////////

        

// mushroomB1.position.x -= player.speed
// mushroomB2.position.x -= player.speed
// mushroomB3.position.x -= player.speed
// mushroomB4.position.x -= player.speed
// mushroomB5.position.x -= player.speed
// mushroomB6.position.x -= player.speed
// mushroomB7.position.x -= player.speed
// mushroomB8.position.x -= player.speed
// mushroomB9.position.x -= player.speed
// mushroomB10.position.x -= player.speed
// mushroomB11.position.x -= player.speed
// mushroomB12.position.x -= player.speed
// mushroomB13.position.x -= player.speed
// mushroomB14.position.x -= player.speed
// mushroomB15.position.x -= player.speed
// mushroomB16.position.x -= player.speed


// mushroomR1.position.x -= player.speed
// mushroomR2.position.x -= player.speed    
// mushroomR3.position.x -= player.speed 

// plateformBigSteel.position.x -= player.speed
// plateformBigSteel02.position.x -= player.speed
// plateformBigSteel03.position.x -= player.speed
// plateformBigSteel04.position.x -= player.speed



// clouds.forEach((theCloud) => {
//     theCloud.position.x -= player.speed/100  //
// })

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



//             particulesBountys.forEach((particulesBounty) => {
//                 particulesBounty.position.x -= player.speed
//             })







// ///////////////////  TO GET CLOSE TO OBJECTS  ///////////////////////////////


  



//             mushroomB1.position.x += player.speed
//             mushroomB2.position.x += player.speed
//             mushroomB3.position.x += player.speed
//             mushroomB4.position.x += player.speed
//             mushroomB5.position.x += player.speed
//             mushroomB6.position.x += player.speed
//             mushroomB7.position.x += player.speed
//             mushroomB8.position.x += player.speed
//             mushroomB9.position.x += player.speed
//             mushroomB10.position.x += player.speed
//             mushroomB11.position.x += player.speed
//             mushroomB12.position.x += player.speed
//             mushroomB13.position.x += player.speed
//             mushroomB14.position.x += player.speed
//             mushroomB15.position.x += player.speed
//             mushroomB16.position.x += player.speed
           

//             mushroomR1.position.x += player.speed
//             mushroomR2.position.x += player.speed
//             mushroomR3.position.x += player.speed 



// plateformBigSteel.position.x += player.speed
// plateformBigSteel02.position.x += player.speed
// plateformBigSteel03.position.x += player.speed
// plateformBigSteel04.position.x += player.speed



//             clouds.forEach((theCloud) => {
//                 theCloud.position.x += player.speed/50 
//             })

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

//             particulesBountys.forEach((particulesBounty) => {
//                 particulesBounty.position.x += player.speed
//             })

//         }

//     }






//     // To make the player jump on a platform
    platformList494x72.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })

    platformList202x56.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })

    platformList84x72.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })

    platformList150x72.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 && 
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35         ) {
            player.velocity.y = 0
        }
    })
 
    takeCoin();
    takeRedMushroom();
 
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


// mushroomB1.update()
// mushroomB2.update()
// mushroomB3.update()
// mushroomB4.update()
// mushroomB5.update()
// mushroomB6.update()
// mushroomB7.update()
// mushroomB8.update()
// mushroomB9.update()
// mushroomB10.update()
// mushroomB11.update()
// mushroomB12.update()
// mushroomB13.update()
// mushroomB14.update()
// mushroomB15.update()
// mushroomB16.update()


// goomba01.update()
// goomba02.update()
// goomba03.update()
// goomba04.update()
// goomba05.update()


// mushroomR1.update()
// mushroomR2.update()
// mushroomR3.update()


// waterfall.update()
// waterfall02.update()

// plateformBigSteel.update()
// plateformBigSteel02.update()
// plateformBigSteel03.update()
// plateformBigSteel04.update()


player.update()


// collisionWater()
    
 



// //////////////////  COLLISIONS    ////////////////////////////////////

// // MushroomB1
// if (
//     player.position.y + player.height <= mushroomB1.position.y + mushroomB1.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB1.position.y + 30  &&
//     player.position.x + player.width >= mushroomB1.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB1.position.x + mushroomB1.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }


// // MushroomB2
// if (
//     player.position.y + player.height <= mushroomB2.position.y + mushroomB2.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB2.position.y + 30  &&
//     player.position.x + player.width >= mushroomB2.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB2.position.x + mushroomB2.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }


// // MushroomB3
// if (
//     player.position.y + player.height <= mushroomB3.position.y + mushroomB3.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB3.position.y + 30  &&
//     player.position.x + player.width >= mushroomB3.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB3.position.x + mushroomB3.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }


// // MushroomB4
// if (
//     player.position.y + player.height <= mushroomB4.position.y + mushroomB4.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB4.position.y + 30  &&
//     player.position.x + player.width >= mushroomB4.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB4.position.x + mushroomB4.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }


// // MushroomB5
// if (
//     player.position.y + player.height <= mushroomB5.position.y + mushroomB5.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB5.position.y + 30  &&
//     player.position.x + player.width >= mushroomB5.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB5.position.x + mushroomB5.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }

// // MushroomB6
// if (
//     player.position.y + player.height <= mushroomB6.position.y + mushroomB6.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB6.position.y + 30  &&
//     player.position.x + player.width >= mushroomB6.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB6.position.x + mushroomB6.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }

// // MushroomB7
// if (
//     player.position.y + player.height <= mushroomB7.position.y + mushroomB7.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB7.position.y + 30  &&
//     player.position.x + player.width >= mushroomB7.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB7.position.x + mushroomB7.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }



// // MushroomB8
// if (
//     player.position.y + player.height <= mushroomB8.position.y + mushroomB8.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB8.position.y + 30  &&
//     player.position.x + player.width >= mushroomB8.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB8.position.x + mushroomB8.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }


// // MushroomB9
// if (
//     player.position.y + player.height <= mushroomB9.position.y + mushroomB9.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB9.position.y + 30  &&
//     player.position.x + player.width >= mushroomB9.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB9.position.x + mushroomB9.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }



// // MushroomB10
// if (
//     player.position.y + player.height <= mushroomB10.position.y + mushroomB10.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB10.position.y + 30  &&
//     player.position.x + player.width >= mushroomB10.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB10.position.x + mushroomB10.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }


// // MushroomB11
// if (
//     player.position.y + player.height <= mushroomB11.position.y + mushroomB11.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB11.position.y + 30  &&
//     player.position.x + player.width >= mushroomB11.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB11.position.x + mushroomB11.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }

// // MushroomB12
// if (
//     player.position.y + player.height <= mushroomB12.position.y + mushroomB12.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB12.position.y + 30  &&
//     player.position.x + player.width >= mushroomB12.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB12.position.x + mushroomB12.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }

// // MushroomB13
// if (
//     player.position.y + player.height <= mushroomB13.position.y + mushroomB13.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB13.position.y + 30  &&
//     player.position.x + player.width >= mushroomB13.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB13.position.x + mushroomB13.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }

// // MushroomB14
// if (
//     player.position.y + player.height <= mushroomB14.position.y + mushroomB14.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB14.position.y + 30  &&
//     player.position.x + player.width >= mushroomB14.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB14.position.x + mushroomB14.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }

// // MushroomB15
// if (
//     player.position.y + player.height <= mushroomB1.position.y + mushroomB1.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB1.position.y + 30  &&
//     player.position.x + player.width >= mushroomB1.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB1.position.x + mushroomB1.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }

// // MushroomB16
// if (
//     player.position.y + player.height <= mushroomB16.position.y + mushroomB16.width &&
//     player.position.y + player.height + player.velocity.y >= mushroomB16.position.y + 30  &&
//     player.position.x + player.width >= mushroomB16.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomB16.position.x + mushroomB16.width +25   // ajustement des bords coté droit 
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
// player.position.x = (300)
// lifeLost()
// }








// // MushroomR1
//     if (
//             player.position.y + player.height <= mushroomR1.position.y + mushroomR1.width +25 &&
//             player.position.y + player.height + player.velocity.y >= mushroomR1.position.y  &&
//             player.position.x + player.width >= mushroomR1.position.x + 25  &&  // ajustement des bords coté gauche 
//             player.position.x + player.width <= mushroomR1.position.x + mushroomR1.width +25   // ajustement des bords coté droit 
//     ) {
//         DisepearMushroomR()
//         adLife()
//             // particle effect
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
//         color:'white'
//     }))
// }
// }


// // MushroomR2
// if (
//     player.position.y + player.height <= mushroomR2.position.y + mushroomR2.width +25 &&
//             player.position.y + player.height + player.velocity.y >= mushroomR2.position.y  &&
//             player.position.x + player.width >= mushroomR2.position.x + 25  &&  // ajustement des bords coté gauche 
//             player.position.x + player.width <= mushroomR2.position.x + mushroomR2.width +25   // ajustement des bords coté droit 
// ) {
// DisepearMushroomR2()
// adLife()
//     // particle effect
// for(let i = 0; i < 22 ; i++) {
// particules.push(new Particule({
// position:{
//     x: player.position.x + player.width/2, // /2
//     y: player.position.y + player.height/2
// },
// velocity:{
//     x: (Math.random()-0.5)*2,
//     y:(Math.random()-0.5)*2
// },
// radius: Math.random()*2,
// color:'white'
// }))
// }
// }

// // MushroomR3
// if (
//     player.position.y + player.height <= mushroomR3.position.y + mushroomR3.width +25 &&
//     player.position.y + player.height + player.velocity.y >= mushroomR3.position.y  &&
//     player.position.x + player.width >= mushroomR3.position.x + 25  &&  // ajustement des bords coté gauche 
//     player.position.x + player.width <= mushroomR3.position.x + mushroomR3.width +25   // ajustement des bords coté droit 
// ) {
// DisepearMushroomR3()
// adLife()
//     // particle effect
// for(let i = 0; i < 22 ; i++) {
// particules.push(new Particule({
// position:{
//     x: player.position.x + player.width/2, // /2
//     y: player.position.y + player.height/2
// },
// velocity:{
//     x: (Math.random()-0.5)*2,
//     y:(Math.random()-0.5)*2
// },
// radius: Math.random()*2,
// color:'white'
// }))
// }
// }



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
// }




// ///////////////  Disparition d'objet  ///////////////


// function DisepearMushroomR() {
//     mushroomR1.position.x = (-400)
//     mushroomR1.position.y = (-400)
// }


// function DisepearMushroomR2() {
//     mushroomR2.position.x = (-400)
//     mushroomR2.position.y = (-400)
// }
// function DisepearMushroomR3() {
//     mushroomR3.position.x = (-400)
//     mushroomR3.position.y = (-400)
// }






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