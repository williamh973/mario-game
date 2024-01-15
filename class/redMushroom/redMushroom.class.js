import { canvasParams } from "../../canvas.js";


function createMushroomRouge() {
    const MushroomRSprite = new Image()
    MushroomRSprite.src = "../../images/MushroomRougeSprite.png"
    return MushroomRSprite
}
let mushroomRSprite = createMushroomRouge("../../images/MushroomRougeSprite.png");


// Cration du Mushroom rouge
export class MushroomRouge {
    constructor() {
        this.position = {  
            x: 9080,  
            y: 175 
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
}
export class MushroomR2 {
    constructor() {
        this.position = {  
            x: 5390,  
            y: 89 
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
}
export class MushroomR3 {
    constructor() {
        this.position = {  
            x: 19160,   
            y: 90 
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
}

