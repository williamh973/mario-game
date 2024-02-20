import { canvasParams } from "./canvas.js";
import { player } from "./keyboard.js";
import { spawnAreaLevelOneScrollOffsetXMoreThan5_900, spawnAreaLevelOneScrollOffsetX_0 } from "./areas/area-level-one/area.js"; 
import { genericObjectList, skyList } from "./spawn-controller/generic/generic-manager/generic-place.js";
import { takeCoin } from "./spawn-controller/coins/coins-manager/coin-take.js";
import { goldCoinList } from "./spawn-controller/coins/coins-manager/coins-adjustment.js";
import { scrollOffsetX, objectMovements, canvasTrackingOffsetX, overTheCanvasLimit } from "./objects-movement-handler/movementHandler.js";
import { takeRedMushroom } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-take.js";
import { redMushroomList } from "./spawn-controller/redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { blueMushroomList } from "./spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-dispach.js";
import { collideOnBelowBlueMushroom, collideOnTheLeftOrRightBlueMushroom, collideOnTheTopBlueMushroom } from "./spawn-controller/blue-mushroom/blueMushrooms-manager/blueMushrooms-collide.js";
import { platformCollide } from "./spawn-controller/platforms/platforms-manager/platforms-collide.js";
import { bigCloudList, littleCloudList } from "./spawn-controller/clouds/clouds-manager/clouds-dispach.js";
import { bushList120x100 } from "./spawn-controller/bushs/bush-manager/bush-dispach.js";
import { waterfallList } from "./spawn-controller/waterfall/waterfall-manager/waterfall-place.js";
import { bridgeList } from "./spawn-controller/bridges/bridge-manager/bridge-place.js";
import { bridgeCollide } from "./spawn-controller/bridges/bridge-manager/bridge-collide.js";
import { treeList } from "./spawn-controller/trees/tree-manager/tree-dispach.js";
import { goombasList } from "./spawn-controller/gombas/gombas-manager/gombas-dispach.js";
import { collideOnBelowGoombas, collideOnTheLeftOrRightGoombas, collideOnTheTopGoombas } from "./spawn-controller/gombas/gombas-manager/goombas-collide.js";
import { fenceList } from "./spawn-controller/fences/fences-dispach.js";
import { houseList } from "./spawn-controller/houses/houses-dispach.js";
import { bombList } from "./spawn-controller/bomb/bomb-spawn.js";
import { allPlatformList } from "./spawn-controller/platforms/platforms-manager/platforms-list.js";
import { allParticleList } from "./spawn-controller/particles/particles-manager/particle-list.js";
import { bombCollideOnBlueMushrooms, bombCollideOnPlatforms } from "./spawn-controller/bomb/bomb-collide.js";
import { timeUp } from "./game-over.js";
 



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



export const gravity = 0.5;


let isAreaLevelOneAdded = false;
let isAreaLevelTwoAdded = false;



function animate() {
    requestAnimationFrame(animate)
    canvasParams.c.fillStyle = 'white'
    canvasParams.c.fillRect(0, 0, canvasParams.canvas.width, canvasParams.canvas.height) 

// console.log(scrollOffsetX); 
// console.log(scrollOffsetX); 5900

    if (!isAreaLevelOneAdded && scrollOffsetX === 0) {
        spawnAreaLevelOneScrollOffsetX_0(isAreaLevelOneAdded);
        isAreaLevelOneAdded = true;
    }

    if (!isAreaLevelTwoAdded && scrollOffsetX >= 5900) {
        spawnAreaLevelOneScrollOffsetXMoreThan5_900(isAreaLevelTwoAdded);
        isAreaLevelTwoAdded = true;
    }

    skyList.forEach((sky) => {
        sky.draw()
    })
    
    genericObjectList.forEach((genericObject) => {
        genericObject.draw()
    })
    
    littleCloudList.forEach((cloud) => {
        cloud.draw()
    })
    
    bigCloudList.forEach((cloud) => {
        cloud.draw()
    })

    for (let i = 0; i < allPlatformList.length; i++) {
        const platformList = allPlatformList[i];
    
        for (let j = 0; j < platformList.length; j++) {
            const platform = platformList[j];
            
            platform.draw()
        }
    }


    houseList.forEach((house) => {
        house.draw()
        // house.drawDebugCollisionSquare()
    })

    bridgeList.forEach((bridge) => {
        bridge.draw()
    })

    waterfallList.forEach((waterfall) => {
        waterfall.update()
    })

    fenceList.forEach((fence) => {
        fence.draw()
    })
    
    treeList.forEach((tree) => {
        tree.draw()
    })
    
    bushList120x100.forEach((bush) => {
        bush.draw()
        // bush.drawDebugCollisionSquare()
    })

    goldCoinList.forEach((coin) => {
            coin.update()
            // coin.drawDebugCollisionSquare()
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


    for (let i = 0; i < allParticleList.length; i++) {
        const particleList = allParticleList[i];
    
        for (let j = 0; j < particleList.length; j++) {
            const particle = particleList[j];

                if (particle.opacity <= 0) {
                    particleList.splice(j, 1);
                } else {
                    particle.update()
                }
        }
    };
  
    
    player.update();
    // player.drawDebugCollisionSquare();
    
    
    littleCloudList.forEach((cloud) => {
        cloud.position.x -= player.speed / 50
    })
    
    bigCloudList.forEach((cloud) => {
        cloud.position.x -= player.speed / 50
    })
    
    bombList.forEach((bomb) => {
       bomb.update()
    //    bomb.drawDebugCollisionSquare()
    })
    
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
bombCollideOnPlatforms();
bombCollideOnBlueMushrooms()


// gameOver()
timeUp();

}
animate()

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
//     }
// }




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


canvasParams.c.imageSmoothingEnabled = true