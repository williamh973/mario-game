import { canvasParams } from "./canvas.js";
import { player, keys } from "./keyboard.js";
import { platformList, spawnNewPlatforms } from "./objects/platforms/grass-platforms/grass-platforms-list.object.js"; 
import { genericObjectList } from "./objects/generic/sky-and-hills/sky-and-hills.object.js";
import { MushroomB1, MushroomB2, MushroomB3, MushroomB4, MushroomB5, MushroomB6, MushroomB7, MushroomB8, MushroomB9, MushroomB10, MushroomB11, MushroomB12, MushroomB13, MushroomB14, MushroomB15, MushroomB16 } from "./class/blueMushroom/mushroomB.class.js";
import { MushroomRouge, MushroomR2, MushroomR3 } from "./class/redMushroom/redMushroom.class.js";
import { Bounty1, Bounty2, Bounty3, Bounty4, Bounty5, Bounty6, Bounty7, Bounty8, Bounty9, Bounty10, Bounty11, Bounty12, Bounty13, Bounty14, Bounty15, Bounty16, Bounty17, Bounty18, Bounty19, Bounty20, Bounty21, Bounty22, Bounty23, Bounty24, Bounty25, Bounty26, Bounty27, Bounty28, Bounty29, Bounty30, Bounty31, Bounty32, Bounty33, Bounty34, Bounty35, Bounty36, Bounty37, Bounty38, Bounty39, Bounty40, Bounty41, Bounty42 } from "./class/coins/coins.class.js";
import { DisepearBounty1, DisepearBounty2, DisepearBounty3, DisepearBounty4, DisepearBounty5, DisepearBounty6, DisepearBounty7, DisepearBounty8, DisepearBounty9, DisepearBounty10, DisepearBounty11, DisepearBounty12, DisepearBounty13, DisepearBounty14, DisepearBounty15, DisepearBounty16, DisepearBounty17, DisepearBounty18, DisepearBounty19, DisepearBounty20, DisepearBounty21, DisepearBounty22, DisepearBounty23, DisepearBounty24, DisepearBounty25, DisepearBounty26, DisepearBounty27, DisepearBounty28, DisepearBounty29, DisepearBounty30, DisepearBounty31, DisepearBounty32, DisepearBounty33, DisepearBounty34, DisepearBounty35, DisepearBounty36, DisepearBounty37, DisepearBounty38, DisepearBounty39, DisepearBounty40, DisepearBounty41, DisepearBounty42 } from "./objects/coins/disepear-coin.js";
import { Cloud, theCloud } from "./class/cloud/cloud.class.js";
import { scrollOffsetX, objectMovements, canvasTrackingOffsetX, canvasTrackingOffsetY } from "./objects/objects-movement-handler/movementHandler.js";
import { waterfall, waterfall02 } from "./class/waterfall/waterfall.class.js";
import { goomba01, goomba02, goomba03, goomba04, goomba05 } from "./class/gombas/gombas.class.js";
import { mooveGomba } from "./objects/objects-movement-handler/gombas-movement-handler.js";




// class Particule{
//     constructor({position,velocity,radius,color}) {
//         this.position = position
//         this.velocity = velocity
//         this.radius = radius
//         this.color = color
//         this.opacity = 1
//     }
//     draw(){
//         canvasParams.c.save();
//         canvasParams.c.globalAlpha = this.opacity;                         
//         canvasParams.c.beginPath();
//         canvasParams.c.fillStyle=this.color;
//         canvasParams.c.arc(this.position.x,this.position.y, this.radius,0,Math.PI *2)
//         canvasParams.c.fill()
//         canvasParams.c.closePath()
//         canvasParams.c.restore();
//     }
//     update(){
//         this.position.x += this.velocity.x;
//         this.position.y += this.velocity.y;
//         if(this.opacity > 0){
//             this.opacity -=0.01;
//         }
//         this.draw()
//     }
//  }
//  class ParticuleBounty{
//     constructor({position,velocity,radius,color}) {
//         this.position = position
//         this.velocity = velocity
//         this.radius = radius
//         this.color = color
//         this.opacity = 1
//     }
//     draw(){
//         canvasParams.c.save();
//         canvasParams.c.globalAlpha = this.opacity;                         
//         canvasParams.c.beginPath();
//         canvasParams.c.fillStyle=this.color;
//         canvasParams.c.arc(this.position.x,this.position.y, this.radius,0,Math.PI *2)
//         canvasParams.c.fill()
//         canvasParams.c.closePath()
//         canvasParams.c.restore();
//     }
//     update(){
//         this.position.x += this.velocity.x;
//         this.position.y += this.velocity.y;
//         if(this.opacity > 0){
//             this.opacity -=0.01;
//         }
//         this.draw()
//     }
//  }
// class ParticulePlatformBigS{
//     constructor({position,velocity,radius,color}) {
//         this.position = position
//         this.velocity = velocity
//         this.radius = radius
//         this.color = color
//         this.opacity = 1
//     }
//     draw(){
//         canvasParams.c.save();
//         canvasParams.c.globalAlpha = this.opacity;                         
//         canvasParams.c.beginPath();
//         canvasParams.c.fillStyle=this.color;
//         canvasParams.c.arc(this.position.x,this.position.y, this.radius,0,Math.PI *2)
//         canvasParams.c.fill()
//         canvasParams.c.closePath()
//         canvasParams.c.restore();
//     }
//     update(){
//         this.position.x += this.velocity.x;
//         this.position.y += this.velocity.y;
//         if(this.opacity > 0){
//             this.opacity -=0.01;
//         }
//         this.draw()
//     }
//  }








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

// let mushroomR1 = new MushroomRouge();
// let mushroomR2 = new MushroomR2();
// let mushroomR3 = new MushroomR3();


// let scoreTag = document.getElementById('score');
// let lifeTag = document.getElementById('vie');
// let timerTag = document.getElementById('timer');
// let blackScreen = document.querySelector('.blackScreen');
// let loseTag = document.getElementById('lose');
// let winTag = document.getElementById('win');
// let btnRestart = document.querySelector('#reload');
// let progScreen = document.getElementById('container-prog');
// let progBar = document.querySelector('.progress-bar');
// let vie = 1;
// let stock = 0;
// let time = 300;
// let counter = 0;
// let counterDiseapearBigS = 0;  // counter for the disappearance of metal platforms





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







//  ---------------------- ANIMATE ----------------------------

let platformAdded = false;

function animate() {
    requestAnimationFrame(animate)
    canvasParams.c.fillStyle = ' white '
    canvasParams.c.fillRect(0, 0, canvasParams.canvas.width, canvasParams.canvas.height) 
    
    
    if (!platformAdded && scrollOffsetX >= 6400) {
        spawnNewPlatforms();
        platformAdded = true;
    }
    
    console.log(scrollOffsetX);
    // console.log(platformList);


    genericObjectList.forEach((genericObject) => {
        genericObject.draw()
    })

    platformList.forEach((theplatform) => {
        theplatform.draw()
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
// particulesBountys.forEach((particulesBounty,index)=>{
//     if(particulesBountys.opacity <= 0){
//         particulesBountys.splice(index,1)
//     }else{
//         particulesBounty.update();
//     }
// }) 



canvasTrackingOffsetX();
canvasTrackingOffsetY();
objectMovements()

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
    platformList.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })
 
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



//     //   -------------------------------------------------------




//     // if the player exceeds the height limit of the canvas, he is propelled down
//     if (player.position.y < canvas.height - 576) {
//         player.velocity.y = +10
//     }



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




// bounty1.update()
// // // bounty2.update()
// bounty3.update()
// bounty4.update()
// bounty5.update()
// bounty6.update()
// bounty7.update()
// bounty8.update()
// bounty9.update()
// bounty10.update()
// bounty11.update()
// bounty12.update()
// bounty13.update()
// bounty14.update()
// bounty15.update()
// bounty16.update()
// bounty17.update()
// bounty18.update()
// bounty19.update()
// bounty20.update()
// bounty21.update()
// bounty22.update()
// bounty23.update()
// bounty24.update()
// bounty25.update()
// bounty26.update()
// bounty27.update()
// bounty28.update()
// bounty29.update()
// bounty30.update()
// bounty31.update()
// bounty32.update()
// bounty33.update()
// bounty34.update()
// bounty35.update()
// bounty36.update()
// bounty37.update()
// bounty38.update()
// bounty39.update()
// bounty40.update()
// bounty41.update()
// bounty42.update()


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


// collisionBounty1()
// collisionBounty2()
// collisionBounty3()
// collisionBounty4()
// collisionBounty5()
// collisionBounty6()
// collisionBounty7()
// collisionBounty8() 
// collisionBounty9()
// collisionBounty10()
// collisionBounty11()
// collisionBounty12()
// collisionBounty13()
// collisionBounty14()
// collisionBounty15()
// collisionBounty16()
// collisionBounty17()
// collisionBounty18()
// collisionBounty19()
// collisionBounty20()
// collisionBounty21()
// collisionBounty22()
// collisionBounty23()
// collisionBounty24()
// collisionBounty25()
// collisionBounty26()
// collisionBounty27()
// collisionBounty28()
// collisionBounty29()
// collisionBounty30()
// collisionBounty31()
// collisionBounty32()
// collisionBounty33()
// collisionBounty34()
// collisionBounty35()
// collisionBounty36()
// collisionBounty37()
// collisionBounty38()
// collisionBounty39()
// collisionBounty40()
// collisionBounty41()
// collisionBounty42()

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






// ///////////////////  SCORE   LIFE  &  TIMER   ////////////////////////


// // score
// scoreTag.innerText = "Score : 0";

// //  life
// lifeTag.innerText = "Vie : " + vie;


// // timer
// timerTag.innerText = time;

// function diminuerTemps() {
//     let minutes = parseInt(time / 60, 10)
//     let secondes = parseInt(time % 60, 10)
//     secondes = secondes < 10 ? "0" + secondes : secondes

//       timerTag.innerText = minutes + " : " + secondes;

//       time = time <= 0 ? 0 : time - 1
//   }
//   setInterval(diminuerTemps, 1000)





// function lifeLost() {
//         vie -= 1;
//         lifeTag.innerText = "Vie : " + vie;
// }

// function adLife() {
//     vie += 1;
//     lifeTag.innerText = "Vie : " + vie;
// }

// function adStock() {
//     stock += 7;
//     scoreTag.innerText = "Score : " + stock
    
// }




 









// function collisionBounty1() {
//     if (
//         player.position.y + player.height <= bounty1.position.y + bounty1.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty1.position.y  &&
//         player.position.x + player.width >= bounty1.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty1.position.x + bounty1.width +25   // ajustement des bords coté droit 
// ) {
//     // particle effect
// for(let i = 0; i < 50 ; i++) {
//     particulesBountys.push(new ParticuleBounty({
//         position:{
//             x: player.position.x + player.width/2, 
//             y: player.position.y + player.height/2
//         },
//         velocity:{
//             x: (Math.random()-0.5)*4,
//             y:(Math.random()-0.5)*4
//         },
//         radius: Math.random()*1,
//         color:'yellow'
//     }))
// }

//         DisepearBounty1()
//         adStock()
//     }
// }



// function collisionBounty2() {
//     if (
//         player.position.y + player.height <= bounty2.position.y + bounty2.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty2.position.y  &&
//         player.position.x + player.width >= bounty2.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty2.position.x + bounty2.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//             DisepearBounty2()
//             adStock()
//         }
// }
// function collisionBounty3() {
//     if (
//         player.position.y + player.height <= bounty3.position.y + bounty3.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty3.position.y  &&
//         player.position.x + player.width >= bounty3.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty3.position.x + bounty3.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//             DisepearBounty3()
//             adStock()
//         }

// }
// function collisionBounty4() {
//     if (
//         player.position.y + player.height <= bounty4.position.y + bounty4.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty4.position.y  &&
//         player.position.x + player.width >= bounty4.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty4.position.x + bounty4.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//             DisepearBounty4()
//             adStock()
//         }

// }
// function collisionBounty5() {
//     if (
//         player.position.y + player.height <= bounty5.position.y + bounty5.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty5.position.y  &&
//         player.position.x + player.width >= bounty5.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty5.position.x + bounty5.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//             DisepearBounty5()
//             adStock()
//         }

// }
// function collisionBounty6() {
//     if (
//         player.position.y + player.height <= bounty6.position.y + bounty6.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty6.position.y  &&
//         player.position.x + player.width >= bounty6.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty6.position.x + bounty6.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty6()
//         adStock()
//     }

// }
// function collisionBounty7() {
//     if (
//         player.position.y + player.height <= bounty7.position.y + bounty7.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty7.position.y  &&
//         player.position.x + player.width >= bounty7.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty7.position.x + bounty7.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty7()
//         adStock()
//     }

// }
// function collisionBounty8() {
//     if (
//         player.position.y + player.height <= bounty8.position.y + bounty8.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty8.position.y  &&
//         player.position.x + player.width >= bounty8.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty8.position.x + bounty8.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty8()
//         adStock()
//     }

// }
// function collisionBounty9() {
//     if (
//         player.position.y + player.height <= bounty9.position.y + bounty9.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty9.position.y  &&
//         player.position.x + player.width >= bounty9.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty9.position.x + bounty9.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty9()
//         adStock()
//     }

// }
// function collisionBounty10() {
//     if (
//         player.position.y + player.height <= bounty10.position.y + bounty10.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty10.position.y  &&
//         player.position.x + player.width >= bounty10.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty10.position.x + bounty10.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty10()
//         adStock()
//     }

// }
// function collisionBounty11() {
//     if (
//         player.position.y + player.height <= bounty11.position.y + bounty11.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty11.position.y  &&
//         player.position.x + player.width >= bounty11.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty11.position.x + bounty11.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty11()
//         adStock()
//     }

// }
// function collisionBounty12() {
//     if (
//         player.position.y + player.height <= bounty12.position.y + bounty12.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty12.position.y  &&
//         player.position.x + player.width >= bounty12.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty12.position.x + bounty12.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty12()
//         adStock()
//     }

// }
// function collisionBounty13() {
//     if (
//         player.position.y + player.height <= bounty13.position.y + bounty13.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty13.position.y  &&
//         player.position.x + player.width >= bounty13.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty13.position.x + bounty13.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty13()
//         adStock()
//     }

// }
// function collisionBounty14() {
//     if (
//         player.position.y + player.height <= bounty14.position.y + bounty14.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty14.position.y  &&
//         player.position.x + player.width >= bounty14.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty14.position.x + bounty14.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty14()
//         adStock()
//     }

// }
// function collisionBounty15() {
//     if (
//         player.position.y + player.height <= bounty15.position.y + bounty15.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty15.position.y  &&
//         player.position.x + player.width >= bounty15.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty15.position.x + bounty15.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty15()
//         adStock()
//     }

// }
// function collisionBounty16() {
//     if (
//         player.position.y + player.height <= bounty16.position.y + bounty16.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty16.position.y  &&
//         player.position.x + player.width >= bounty16.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty16.position.x + bounty16.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty16()
//         adStock()
//     }

// }
// function collisionBounty17() {
//     if (
//         player.position.y + player.height <= bounty17.position.y + bounty17.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty17.position.y  &&
//         player.position.x + player.width >= bounty17.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty17.position.x + bounty17.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty17()
//         adStock()
//     }

// }
// function collisionBounty18() {
//     if (
//         player.position.y + player.height <= bounty18.position.y + bounty18.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty18.position.y  &&
//         player.position.x + player.width >= bounty18.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty18.position.x + bounty18.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty18()
//         adStock()
//     }

// }
// function collisionBounty19() {
//     if (
//         player.position.y + player.height <= bounty19.position.y + bounty19.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty19.position.y  &&
//         player.position.x + player.width >= bounty19.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty19.position.x + bounty19.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty19()
//         adStock()
//     }
// }
// function collisionBounty20() {
//         if (
//             player.position.y + player.height <= bounty20.position.y + bounty20.width +25 &&
//             player.position.y + player.height + player.velocity.y >= bounty20.position.y  &&
//             player.position.x + player.width >= bounty20.position.x + 25  &&  // ajustement des bords coté gauche 
//             player.position.x + player.width <= bounty20.position.x + bounty20.width +25   // ajustement des bords coté droit 
//     ) {
//           // particle effect
//           for(let i = 0; i < 50 ; i++) {
//             particulesBountys.push(new ParticuleBounty({
//                 position:{
//                     x: player.position.x + player.width/2, 
//                     y: player.position.y + player.height/2
//                 },
//                 velocity:{
//                     x: (Math.random()-0.5)*4,
//                     y:(Math.random()-0.5)*4
//                 },
//                 radius: Math.random()*1,
//                 color:'yellow'
//             }))
//         }
//             DisepearBounty20()
//             adStock()
//         }
//     }
// function collisionBounty21() {
//             if (
//                 player.position.y + player.height <= bounty21.position.y + bounty21.width +25 &&
//                 player.position.y + player.height + player.velocity.y >= bounty21.position.y  &&
//                 player.position.x + player.width >= bounty21.position.x + 25  &&  // ajustement des bords coté gauche 
//                 player.position.x + player.width <= bounty21.position.x + bounty21.width +25   // ajustement des bords coté droit 
//         ) {
//               // particle effect
//               for(let i = 0; i < 50 ; i++) {
//                 particulesBountys.push(new ParticuleBounty({
//                     position:{
//                         x: player.position.x + player.width/2, 
//                         y: player.position.y + player.height/2
//                     },
//                     velocity:{
//                         x: (Math.random()-0.5)*4,
//                         y:(Math.random()-0.5)*4
//                     },
//                     radius: Math.random()*1,
//                     color:'yellow'
//                 }))
//             }
//                 DisepearBounty21()
//                 adStock()
//             }
        
//     }
//     function collisionBounty22() {
//         if (
//             player.position.y + player.height <= bounty22.position.y + bounty22.width +25 &&
//             player.position.y + player.height + player.velocity.y >= bounty22.position.y  &&
//             player.position.x + player.width >= bounty22.position.x + 25  &&  // ajustement des bords coté gauche 
//             player.position.x + player.width <= bounty22.position.x + bounty22.width +25   // ajustement des bords coté droit 
//     ) {
//           // particle effect
//           for(let i = 0; i < 50 ; i++) {
//             particulesBountys.push(new ParticuleBounty({
//                 position:{
//                     x: player.position.x + player.width/2, 
//                     y: player.position.y + player.height/2
//                 },
//                 velocity:{
//                     x: (Math.random()-0.5)*4,
//                     y:(Math.random()-0.5)*4
//                 },
//                 radius: Math.random()*1,
//                 color:'yellow'
//             }))
//         }
//             DisepearBounty22()
//             adStock()
//         }
    
// }
// function collisionBounty23() {
//     if (
//         player.position.y + player.height <= bounty23.position.y + bounty23.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty23.position.y  &&
//         player.position.x + player.width >= bounty23.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty23.position.x + bounty23.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty23()
//         adStock()
//     }

// }
// function collisionBounty24() {
//     if (
//         player.position.y + player.height <= bounty24.position.y + bounty24.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty24.position.y  &&
//         player.position.x + player.width >= bounty24.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty24.position.x + bounty24.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty24()
//         adStock()
//     }

// }
// function collisionBounty25() {
//     if (
//         player.position.y + player.height <= bounty25.position.y + bounty25.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty25.position.y  &&
//         player.position.x + player.width >= bounty25.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty25.position.x + bounty25.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty25()
//         adStock()
//     }

// }
// function collisionBounty26() {
//     if (
//         player.position.y + player.height <= bounty26.position.y + bounty26.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty26.position.y  &&
//         player.position.x + player.width >= bounty26.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty26.position.x + bounty26.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty26()
//         adStock()
//     }

// }
// function collisionBounty27() {
//     if (
//         player.position.y + player.height <= bounty27.position.y + bounty27.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty27.position.y  &&
//         player.position.x + player.width >= bounty27.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty27.position.x + bounty27.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty27()
//         adStock()
//     }

// }
// function collisionBounty28() {
//     if (
//         player.position.y + player.height <= bounty28.position.y + bounty28.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty28.position.y  &&
//         player.position.x + player.width >= bounty28.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty28.position.x + bounty28.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty28()
//         adStock()
//     }

// }
// function collisionBounty29() {
//     if (
//         player.position.y + player.height <= bounty29.position.y + bounty29.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty29.position.y  &&
//         player.position.x + player.width >= bounty29.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty29.position.x + bounty29.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty29()
//         adStock()
//     }

// }
// function collisionBounty30() {
//     if (
//         player.position.y + player.height <= bounty30.position.y + bounty30.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty30.position.y  &&
//         player.position.x + player.width >= bounty30.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty30.position.x + bounty30.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty30()
//         adStock()
//     }

// }
// function collisionBounty31() {
//     if (
//         player.position.y + player.height <= bounty31.position.y + bounty31.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty31.position.y  &&
//         player.position.x + player.width >= bounty31.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty31.position.x + bounty31.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty31()
//         adStock()
//     }

// }
// function collisionBounty32() {
//     if (
//         player.position.y + player.height <= bounty32.position.y + bounty32.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty32.position.y  &&
//         player.position.x + player.width >= bounty32.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty32.position.x + bounty32.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty32()
//         adStock()
//     }

// }
// function collisionBounty33() {
//     if (
//         player.position.y + player.height <= bounty33.position.y + bounty33.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty33.position.y  &&
//         player.position.x + player.width >= bounty33.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty33.position.x + bounty33.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty33()
//         adStock()
//     }

// }
// function collisionBounty34() {
//     if (
//         player.position.y + player.height <= bounty34.position.y + bounty34.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty34.position.y  &&
//         player.position.x + player.width >= bounty34.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty34.position.x + bounty34.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty34()
//         adStock()
//     }

// }
// function collisionBounty35() {
//     if (
//         player.position.y + player.height <= bounty35.position.y + bounty35.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty35.position.y  &&
//         player.position.x + player.width >= bounty35.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty35.position.x + bounty35.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty35()
//         adStock()
//     }

// }
// function collisionBounty36() {
//     if (
//         player.position.y + player.height <= bounty36.position.y + bounty36.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty36.position.y  &&
//         player.position.x + player.width >= bounty36.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty36.position.x + bounty36.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty36()
//         adStock()
//     }

// }
// function collisionBounty37() {
//     if (
//         player.position.y + player.height <= bounty37.position.y + bounty37.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty37.position.y  &&
//         player.position.x + player.width >= bounty37.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty37.position.x + bounty37.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty37()
//         adStock()
//     }

// }
// function collisionBounty38() {
//     if (
//         player.position.y + player.height <= bounty38.position.y + bounty38.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty38.position.y  &&
//         player.position.x + player.width >= bounty38.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty38.position.x + bounty38.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty38()
//         adStock()
//     }

// }
// function collisionBounty39() {
//     if (
//         player.position.y + player.height <= bounty39.position.y + bounty39.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty39.position.y  &&
//         player.position.x + player.width >= bounty39.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty39.position.x + bounty39.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty39()
//         adStock()
//     }

// }
// function collisionBounty40() {
//     if (
//         player.position.y + player.height <= bounty40.position.y + bounty40.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty40.position.y  &&
//         player.position.x + player.width >= bounty40.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty40.position.x + bounty40.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty40()
//         adStock()
//     }

// }
// function collisionBounty41() {
//     if (
//         player.position.y + player.height <= bounty41.position.y + bounty41.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty41.position.y  &&
//         player.position.x + player.width >= bounty41.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty41.position.x + bounty41.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty41()
//         adStock()
//     }

// }
// function collisionBounty42() {
//     if (
//         player.position.y + player.height <= bounty42.position.y + bounty42.width +25 &&
//         player.position.y + player.height + player.velocity.y >= bounty42.position.y  &&
//         player.position.x + player.width >= bounty42.position.x + 25  &&  // ajustement des bords coté gauche 
//         player.position.x + player.width <= bounty42.position.x + bounty42.width +25   // ajustement des bords coté droit 
// ) {
//       // particle effect
//       for(let i = 0; i < 50 ; i++) {
//         particulesBountys.push(new ParticuleBounty({
//             position:{
//                 x: player.position.x + player.width/2, 
//                 y: player.position.y + player.height/2
//             },
//             velocity:{
//                 x: (Math.random()-0.5)*4,
//                 y:(Math.random()-0.5)*4
//             },
//             radius: Math.random()*1,
//             color:'yellow'
//         }))
//     }
//         DisepearBounty42()
//         adStock()
//     }

// }



canvasParams.c.imageSmoothingEnabled = true