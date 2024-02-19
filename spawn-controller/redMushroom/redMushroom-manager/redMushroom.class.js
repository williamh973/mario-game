import { canvasParams } from "../../../canvas.js";


function createMushroomRouge() {
    const MushroomRSprite = new Image()
    MushroomRSprite.src = "../../images/MushroomRougeSprite.png"
    return MushroomRSprite
}
let mushroomRSprite = createMushroomRouge("../../images/MushroomRougeSprite.png");



 
export class RedMushroom {
    constructor() {
        this.position = {  
            x : 0,  
            y : 0 
        }
        this.width = 60   
        this.height = 60 
        this.image = createMushroomRouge(mushroomRSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createMushroomRouge(mushroomRSprite),
                left: createMushroomRouge(mushroomRSprite),
                cropWidth: 60,
                width: 60
            },
            run: {
                right: createMushroomRouge(mushroomRSprite),
                left: createMushroomRouge(mushroomRSprite),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 60
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            70,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    take() {
        this.isTaken = true;
    }
    update() {
        this.frames++ 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0
        else if (this.frames > 15 &&
            (this.currentSprite === this.sprites.run.right ||
                this.currentSprite === this.sprites.run.left)
        )
            this.frames = 0
        this.draw()
    }
    overlapsWith(platform) {
        return (
            this.position.x < platform.position.x + platform.width &&
            this.position.x + this.width > platform.position.x &&
            this.position.y < platform.position.y + platform.height &&
            this.position.y + this.height > platform.position.y
        );
     }
     placeRedMushroomOnRandomPlatform494x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width / 1.5));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 10;
    }
    placeRedMushroomOnRandomPlatform150x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width / 3));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 10;
    }
    placeRedMushroomOnRandomPlatform202x56(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width / 2));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 10;
    }
    placeRedMushroomOnRandomPlatform84x72(referencePlatform) {
        this.position.x = referencePlatform.position.x + this.width / 5;
        this.position.y = referencePlatform.position.y - this.height + 10;
    }
   
    placeRedMushroomOnRandomPlatform158x78(referencePlatform) {
        this.position.x = referencePlatform.position.x;
        this.position.y = referencePlatform.position.y - this.height + 10;
    }

    placeRedMushroomOnRandomPlatform105x73(referencePlatform) {
        this.position.x = referencePlatform.position.x;
        this.position.y = referencePlatform.position.y - this.height + 10;
    }
}

