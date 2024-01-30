import { canvasParams } from "../../canvas.js";

function createBountySprite() {
    const bountyStand = new Image()
    bountyStand.src = "../../images/bounty2.png"
    return bountyStand
}
let bountyStand = createBountySprite("../../images/bounty2.png");



export class Coin {
    constructor({x, y}) {
        this.position = {  
           x,
           y
        }
        this.width = 40   
        this.height = 40 
        this.isTaken = false
        this.image = createBountySprite(bountyStand)
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.scale = 0.8
        this.framesMax = 24
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 2
    }
    draw() {
        if (!this.isTaken) {
            canvasParams.c.drawImage(
                this.currentSprite,
                this.framesCurrent * (
                this.currentSprite.width / this.framesMax
                    ),
                0,
                this.currentSprite.width / this.framesMax,
                this.currentSprite.height, 
                this.position.x,
                this.position.y,
                (this.currentSprite.width / this.framesMax ) * this.scale,
                this.currentSprite.height * this.scale
                )
        }
    }
    animateFrames() {
        this.framesElapsed++
     
        if (this.framesElapsed % this.framesHold === 0) {
           if (this.framesCurrent < this.framesMax - 1) {
              this.framesCurrent++
           } else {
              this.framesCurrent = 0
           }  
        }
     }
     take() {
        this.isTaken = true;
    }
    update() {
        this.draw()
        this.animateFrames()
    }
    overlapsWith(platform) {
        return (
            this.position.x < platform.position.x + platform.width &&
            this.position.x + this.width > platform.position.x &&
            this.position.y < platform.position.y + platform.height &&
            this.position.y + this.height > platform.position.y
        );
     }
     placeGoldCoinAwayFromPlatform494x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (500)) + 40;
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height;
      }
      placeGoldCoinAwayFromPlatform84x72(referencePlatform) {
        this.position.x = referencePlatform.position.x + referencePlatform.width / 3;
        this.position.y = referencePlatform.position.y -  this.height;
      }
      placeGoldCoinAwayFromPlatform150x72(referencePlatform) {
        this.position.x = referencePlatform.position.x + referencePlatform.width / 3;
        this.position.y = referencePlatform.position.y -  this.height;
      }
      placeGoldCoinAwayFromPlatform202x56(referencePlatform) {
        this.position.x = referencePlatform.position.x + referencePlatform.width / 3;
        this.position.y = referencePlatform.position.y -  this.height;
      }
      placeGoldCoinAwayFromGoldCoins(referencePlatform) {
        this.position.x = referencePlatform.position.x + this.width;
        this.position.y = referencePlatform.position.y;
      }
    };
