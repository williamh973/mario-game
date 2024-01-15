import { canvasParams } from "../../canvas.js";

function createBountySprite() {
    const bountyStand = new Image()
    bountyStand.src = "../../images/bounty2.png"
    return bountyStand
}
let bountyStand = createBountySprite("../../images/bounty2.png");



export class Bounty1 {
    constructor() {
        this.position = {  
           x: 280,
           y: 470
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty2 {
    constructor() {
        this.position = {  
           x: 1050,
           y: 450
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
 export class Bounty3 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 1050,
           y: 350
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty4 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 1050,
           y: 400
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty5 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 2850, 
            y: 335,      
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty6 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 2960,  // position de la 1ere plateforme sur l'axe X
            y: 335,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty7 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 4980,  // position de la 1ere plateforme sur l'axe X
            y: 300,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty8 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 5780,  // position de la 1ere plateforme sur l'axe X
            y: 300,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty9 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 6800,  // position de la 1ere plateforme sur l'axe X
            y: 290,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty10 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 7800,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty11 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 7860,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty12 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 7920,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty13 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 7971,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty14 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 8022,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty15 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 8435,  // position de la 1ere plateforme sur l'axe X
            y: 167, 
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty16 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 8835,  // position de la 1ere plateforme sur l'axe X
            y: 100,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty17 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 11528,  // position de la 1ere plateforme sur l'axe X
            y: 464,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty18 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 12038,  // position de la 1ere plateforme sur l'axe X
            y: 354,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty19 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 12168,  // position de la 1ere plateforme sur l'axe X
            y: 154,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty20 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 12528,  // position de la 1ere plateforme sur l'axe X
            y: 464,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty21 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 14294,  // position de la 1ere plateforme sur l'axe X
            y: 485, 
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty22 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 15405,  // position de la 1ere plateforme sur l'axe X
            y: 440, 
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty23 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 17254,  // position de la 1ere plateforme sur l'axe X
            y: 380, 
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty24 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 17254,  // position de la 1ere plateforme sur l'axe X
            y: 320, 
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty25 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 17254,  // position de la 1ere plateforme sur l'axe X
            y: 260, 
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty26 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 18003,
            y: 227,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty27 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 19165,
            y: 356,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty28 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 19260,
            y: 356,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty29 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 19465,
            y: 356,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty30 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 19719,
            y: 305,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty31 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 19620,
            y: 235,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty32 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 18840,
            y: 60,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty33 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 19840, //   x: 20365,
            y: 405, //  y: 160,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty34 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 20118,
            y: 488,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty35 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 20265,
            y: 205,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty36 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 20305,
            y: 165,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty37 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 20365,
            y: 125,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty38 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 20425,
            y: 165,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty39 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 20465,
            y: 205,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty40 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 20726,
            y: 385,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty41 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 20917,
            y: 117,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}
export class Bounty42 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 21230,
            y: 485,
        }
        this.width = 40   
        this.height = 40 
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        canvasParams.c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}



export let bounty1 = new Bounty1();
export let bounty2 = new Bounty2();
export let bounty3 = new Bounty3();
export let bounty4 = new Bounty4();
export let bounty5 = new Bounty5();
export let bounty6 = new Bounty6();
export let bounty7 = new Bounty7();
export let bounty8 = new Bounty8();
export let bounty9 = new Bounty9();
export let bounty10 = new Bounty10();
export let bounty11 = new Bounty11();
export let bounty12 = new Bounty12();
export let bounty13 = new Bounty13();
export let bounty14 = new Bounty14();
export let bounty15 = new Bounty15();
export let bounty16 = new Bounty16();
export let bounty17 = new Bounty17();
export let bounty18 = new Bounty18();
export let bounty19 = new Bounty19();
export let bounty20 = new Bounty20();
export let bounty21 = new Bounty21();
export let bounty22 = new Bounty22();
export let bounty23 = new Bounty23();
export let bounty24 = new Bounty24();
export let bounty25 = new Bounty25();
export let bounty26 = new Bounty26();
export let bounty27 = new Bounty27();
export let bounty28 = new Bounty28();
export let bounty29 = new Bounty29();
export let bounty30 = new Bounty30();
export let bounty31 = new Bounty31();
export let bounty32 = new Bounty32();
export let bounty33 = new Bounty33();
export let bounty34 = new Bounty34();
export let bounty35 = new Bounty35();
export let bounty36 = new Bounty36();
export let bounty37 = new Bounty37();
export let bounty38 = new Bounty38();
export let bounty39 = new Bounty39();
export let bounty40 = new Bounty40();
export let bounty41 = new Bounty41();
export let bounty42 = new Bounty42();