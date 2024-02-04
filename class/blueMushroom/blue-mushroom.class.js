import { canvasParams } from "../../canvas.js";

function createMushroomBSprite() {
    const MushroombSprite = new Image()
    MushroombSprite.src = "../../images/MushroomBSpriteStand.png"
    return MushroombSprite
}
let mushroombSprite = createMushroomBSprite("../../images/MushroomBSpriteStand.png")

 

export class BlueMushroom {
    constructor() {
        this.position = {  
           x : 0,
           y : 0
        }
        this.width = 60   
        this.height = 60 
        this.image = createMushroomBSprite(mushroombSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createMushroomBSprite(mushroombSprite),
                left: createMushroomBSprite(mushroombSprite),
                cropWidth: 61,
                width: 60
            },
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()
    }
    overlapsWith(otherObject) {
        return (
            this.position.x < otherObject.position.x + otherObject.width &&
            this.position.x + this.width > otherObject.position.x &&
            this.position.y < otherObject.position.y + otherObject.height &&
            this.position.y + this.height > otherObject.position.y
        );
     }
    placeBlueMushroomOnRandomPlatform494x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (434)) + 10;
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 5;
    }
    placeBlueMushroomOnRandomPlatform150x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (90)) + 10;
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 5;
    }
    placeBlueMushroomOnRandomPlatform202x56(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (142)) + 10;
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 5;
    }
    placeBlueMushroomOnRandomPlatform84x72(referencePlatform) {
        this.position.x = referencePlatform.position.x + this.width / 5;
        this.position.y = referencePlatform.position.y - this.height + 5;
    }
    placeBlueMushroomAwayFromOtherBlueMushroom(referenceBlueMushroom) {
        this.position.x = referenceBlueMushroom.position.x + this.width;
    }
    placeBlueMushroomAwayFromRedMushroom(referenceRedMushroom) {
        this.position.x = referenceRedMushroom.position.x + this.width;
    }
    drawDebugCollisionSquare() {
        const ctx = canvasParams.c;
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;

        ctx.rect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

        ctx.stroke();
        ctx.closePath();
    }
};
