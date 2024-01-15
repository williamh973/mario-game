import { canvasParams } from "../../canvas.js";

function createMushroomBSprite() {
    const MushroombSprite = new Image()
    MushroombSprite.src = "../../images/MushroomBSpriteStand.png"
    return MushroombSprite
}
let mushroombSprite = createMushroomBSprite("../../images/MushroomBSpriteStand.png")



export class MushroomB1 {
    constructor() {
        this.position = {  
           x: 1500,
           y: 459
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
}
export class MushroomB2 {
    constructor() {
        this.position = {  
           x: 1560,
           y: 459
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
}
export class MushroomB3 {
    constructor() {
        this.position = { 
           x: 2896,
           y: 325
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
}
export class MushroomB4 {
    constructor() {
        this.position = { 
           x: 5066,
           y: 459
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
}
export class MushroomB5 {
    constructor() {
        this.position = { 
           x: 9800,
           y: 495
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
}
export class MushroomB6 {
    constructor() {
        this.position = { 
            x: 8180,
            y: 161,
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
}
export class MushroomB7 {
    constructor() {
        this.position = { 
            x: 10650,
            y: 151,
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
}
export class MushroomB8 {
    constructor() {
        this.position = {  
            x: 10710,
            y: 151,
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
}
export class MushroomB9 {
    constructor() {
        this.position = {  
            x: 10770,
            y: 151,
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
}
export class MushroomB10 {
    constructor() {
        this.position = {  
            x: 11250,
            y: 250,
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
}
export class MushroomB11 {
    constructor() {
        this.position = {  
            x: 17995,
            y: 279,
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
}
export class MushroomB12 {
    constructor() {
        this.position = {  
            x: 19100,
            y: 85,
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
}
export class MushroomB13 {
    constructor() {
        this.position = {  
            x: 19220,
            y: 85,
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
}
export class MushroomB14 {
    constructor() {
        this.position = {  
            x: 19100,
            y: 356,
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
}
export class MushroomB15 {
    constructor() {
        this.position = {  
            x: 19200,
            y: 356,
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
}
export class MushroomB16 {
    constructor() {
        this.position = {  
            x: 19400,
            y: 356,
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
}
