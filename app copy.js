import { canvasParams } from "./canvas.js";


const gravity = 0.5

 

 
// sprites player 
function createSpriteSRight() {
    const spriteStandRight = new Image()
    spriteStandRight.src = "./images/SpriteStandRight.png"
    return spriteStandRight
}
let marioStandRight = createSpriteSRight("./images/SpriteStandRight.png")

function createSpriteSLeft() {
    const spriteStandLeft = new Image()
    spriteStandLeft.src = "./images/SpriteStandLeft.png"
    return spriteStandLeft
}
let marioStandLeft = createSpriteSRight("./images/SpriteStandLeft.png")


function createSpriteRunRight() {
    const spriteRunRight = new Image()
    spriteRunRight.src = "./images/SpriteRunRight.png"
    return spriteRunRight
}
let marioRunRight = createSpriteRunRight("./images/SpriteRunRight.png")


function createSpriteRunLeft() {
    const spriteRunLeft = new Image()
    spriteRunLeft.src = "./images/SpriteRunLeft.png"
    return spriteRunLeft
}
let marioRunLeft = createSpriteRunLeft("./images/SpriteRunLeft.png")


function createSpriteDrown() {
    const marioDrowns = new Image()
    marioDrowns.src = "./images/SpriteDrown.png"
    return marioDrowns
}
let marioDrowns = createSpriteDrown("./images/SpriteDrown.png")





// sprites blue Mushrooms
function createMushroomBSprite() {
    const MushroombSprite = new Image()
    MushroombSprite.src = "./images/MushroomBSpriteStand.png"
    return MushroombSprite
}
let mushroombSprite = createMushroomBSprite("./images/MushroomBSpriteStand.png")




// sprites red Mushrooms
function createMushroomRouge() {
    const MushroomRSprite = new Image()
    MushroomRSprite.src = "./images/MushroomRougeSprite.png"
    return MushroomRSprite
}
let mushroomRSprite = createMushroomRouge("./images/MushroomRougeSprite.png")


// sprite gold coin
function createBountySprite() {
    const bountyStand = new Image()
    bountyStand.src = "./images/bounty2.png"
    return bountyStand
}
let bountyStand = createBountySprite("./images/bounty2.png")



function createPlateformBigSteel() {
    const plateformBigS = new Image()
    plateformBigS.src = "./images/plateform-steel01.png"
    return plateformBigS
}
let plateformBigS = createPlateformBigSteel("./images/plateform-steel01.png")


function createPlateformLittleSteel() {
    const plateformLittleS = new Image()
    plateformLittleS.src = "./images/plateform-steel02.png"
    return plateformLittleS
}
let plateformLittleS = createPlateformLittleSteel("./images/plateform-steel02.png")



function createWatefall() {
    const waterfallStand = new Image()
    waterfallStand.src = "./images/waterfallSprite.png"
    return waterfallStand
}

let waterfallStand = createWatefall("./images/waterfallSprite.png")



function createClouds() {
    const cloud = new Image()
    cloud.src = "./images/clouds.png"
    return cloud
}

let theCloud = createClouds("./images/clouds.png");



// //////////////////  CLASS  /////////////////////////////////

class Cloud {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
};


class Particule{
    constructor({position,velocity,radius,color}) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 1
    }
    draw(){
        canvasParams.c.save();
        canvasParams.c.globalAlpha = this.opacity;                         
        canvasParams.c.beginPath();
        canvasParams.c.fillStyle=this.color;
        canvasParams.c.arc(this.position.x,this.position.y, this.radius,0,Math.PI *2)
        canvasParams.c.fill()
        canvasParams.c.closePath()
        canvasParams.c.restore();
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.opacity > 0){
            this.opacity -=0.01;
        }
        this.draw()
    }
 }
 class ParticuleBounty{
    constructor({position,velocity,radius,color}) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 1
    }
    draw(){
        canvasParams.c.save();
        canvasParams.c.globalAlpha = this.opacity;                         
        canvasParams.c.beginPath();
        canvasParams.c.fillStyle=this.color;
        canvasParams.c.arc(this.position.x,this.position.y, this.radius,0,Math.PI *2)
        canvasParams.c.fill()
        canvasParams.c.closePath()
        canvasParams.c.restore();
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.opacity > 0){
            this.opacity -=0.01;
        }
        this.draw()
    }
 }
class ParticulePlatformBigS{
    constructor({position,velocity,radius,color}) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 1
    }
    draw(){
        canvasParams.c.save();
        canvasParams.c.globalAlpha = this.opacity;                         
        canvasParams.c.beginPath();
        canvasParams.c.fillStyle=this.color;
        canvasParams.c.arc(this.position.x,this.position.y, this.radius,0,Math.PI *2)
        canvasParams.c.fill()
        canvasParams.c.closePath()
        canvasParams.c.restore();
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.opacity > 0){
            this.opacity -=0.01;
        }
        this.draw()
    }
 }

class MushroomB1 {
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
class MushroomB2 {
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
class MushroomB3 {
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
class MushroomB4 {
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
class MushroomB5 {
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
class MushroomB6 {
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
class MushroomB7 {
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
class MushroomB8 {
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
class MushroomB9 {
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
class MushroomB10 {
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
class MushroomB11 {
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
class MushroomB12 {
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
class MushroomB13 {
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
class MushroomB14 {
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
class MushroomB15 {
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
class MushroomB16 {
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



// brown mushrooms 
class Goomba {
    constructor() {
        this.position = {
            x: 5780,
            y: 460
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
}
   draw() {
canvasParams.c.drawImage(
   this.image,
   this.framesCurrent * (this.image.width / this.framesMax),
   0,
   this.image.width / this.framesMax,
   this.image.height, 
   this.position.x,
   this.position.y,
   (this.image.width / this.framesMax ) * this.scale,
   this.image.height * this.scale
   )
}
animateFrames() {
   this.framesElapsed++

   if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1 )
     {
         this.framesCurrent++
      } else {
         this.framesCurrent = 0
      }  
   }
}
update() {
   this.draw()
   this.animateFrames()
}
}
class Goomba02 {
    constructor() {
        this.position = {
            x: 9480,
            y: 413
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
}
   draw() {
canvasParams.c.drawImage(
   this.image,
   this.framesCurrent * (this.image.width / this.framesMax),
   0,
   this.image.width / this.framesMax,
   this.image.height, 
   this.position.x,
   this.position.y,
   (this.image.width / this.framesMax ) * this.scale,
   this.image.height * this.scale
   )
}
animateFrames() {
   this.framesElapsed++

   if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1 )
     {
         this.framesCurrent++
      } else {
         this.framesCurrent = 0
      }  
   }
}
update() {
   this.draw()
   this.animateFrames()
}
}
class Goomba03 {
    constructor() {
        this.position = {
            x: 11900,
            y: 460
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
}
   draw() {
canvasParams.c.drawImage(
   this.image,
   this.framesCurrent * (this.image.width / this.framesMax),
   0,
   this.image.width / this.framesMax,
   this.image.height, 
   this.position.x,
   this.position.y,
   (this.image.width / this.framesMax ) * this.scale,
   this.image.height * this.scale
   )
}
animateFrames() {
   this.framesElapsed++

   if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1 )
     {
         this.framesCurrent++
      } else {
         this.framesCurrent = 0
      }  
   }
}
update() {
   this.draw()
   this.animateFrames()
}
}
class Goomba04 {
    constructor() {
        this.position = {
            x: 13620,  
            y: 296
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
}
   draw() {
canvasParams.c.drawImage(
   this.image,
   this.framesCurrent * (this.image.width / this.framesMax),
   0,
   this.image.width / this.framesMax,
   this.image.height, 
   this.position.x,
   this.position.y,
   (this.image.width / this.framesMax ) * this.scale,
   this.image.height * this.scale
   )
}
animateFrames() {
   this.framesElapsed++

   if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1 )
     {
         this.framesCurrent++
      } else {
         this.framesCurrent = 0
      }  
   }
}
update() {
   this.draw()
   this.animateFrames()
}
}
class Goomba05 {
    constructor() {
        this.position = {
            x: 20010,  
            y: 400
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
}
   draw() {
canvasParams.c.drawImage(
   this.image,
   this.framesCurrent * (this.image.width / this.framesMax),
   0,
   this.image.width / this.framesMax,
   this.image.height, 
   this.position.x,
   this.position.y,
   (this.image.width / this.framesMax ) * this.scale,
   this.image.height * this.scale
   )
}
animateFrames() {
   this.framesElapsed++

   if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1 )
     {
         this.framesCurrent++
      } else {
         this.framesCurrent = 0
      }  
   }
}
update() {
   this.draw()
   this.animateFrames()
}
}



// Cration du Mushroom rouge
class MushroomRouge {
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
class MushroomR2 {
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
class MushroomR3 {
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



// Gold coin
class Bounty1 {
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
class Bounty2 {
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
 class Bounty3 {
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
class Bounty4 {
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
class Bounty5 {
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
class Bounty6 {
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
class Bounty7 {
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
class Bounty8 {
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
class Bounty9 {
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
class Bounty10 {
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
class Bounty11 {
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
class Bounty12 {
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
class Bounty13 {
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
class Bounty14 {
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
class Bounty15 {
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
class Bounty16 {
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
class Bounty17 {
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
class Bounty18 {
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
class Bounty19 {
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
class Bounty20 {
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
class Bounty21 {
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
class Bounty22 {
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
class Bounty23 {
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
class Bounty24 {
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
class Bounty25 {
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
class Bounty26 {
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
class Bounty27 {
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
class Bounty28 {
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
class Bounty29 {
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
class Bounty30 {
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
class Bounty31 {
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
class Bounty32 {
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
class Bounty33 {
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
class Bounty34 {
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
class Bounty35 {
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
class Bounty36 {
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
class Bounty37 {
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
class Bounty38 {
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
class Bounty39 {
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
class Bounty40 {
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
class Bounty41 {
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
class Bounty42 {
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



class Waterfall {
    constructor() {
        this.position = {
            x: 20267,
            y: 310
        },
        this.width = 95
        this.height = 179
        this.image = new Image()
        this.image.src = 'images/waterfallSprite.png'
        this.scale = 1.5
        this.framesMax = 8
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 8
}
   draw() {
canvasParams.c.drawImage(
   this.image,
   this.framesCurrent * (this.image.width / this.framesMax),
   0,
   this.image.width / this.framesMax,
   this.image.height, 
   this.position.x,
   this.position.y,
   (this.image.width / this.framesMax ) * this.scale,
   this.image.height * this.scale
   )
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
update() {
   this.draw()
   this.animateFrames()
}
}
class Waterfall02 {
    constructor() {
        this.position = {
            x: 20363,
            y: 310
        },
        this.width = 95
        this.height = 179
        this.image = new Image()
        this.image.src = 'images/waterfallSprite.png'
        this.scale = 1.5
        this.framesMax = 8
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 8
}
   draw() {
canvasParams.c.drawImage(
   this.image,
   this.framesCurrent * (this.image.width / this.framesMax),
   0,
   this.image.width / this.framesMax,
   this.image.height, 
   this.position.x,
   this.position.y,
   (this.image.width / this.framesMax ) * this.scale,
   this.image.height * this.scale
   )
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
update() {
   this.draw()
   this.animateFrames()
}
}


class Player {
    constructor() {
        this.speed = 7  
        this.position = {  
            x: 400, 
            y: 400 
        }
        this.velocity = {  
            x: 1, 
            y: 1   
        }
        this.width = 55  
        this.height = 55  
        this.image = createSpriteSRight(marioStandRight)
        this.frames = 0
        this.sprites = {
            stand: {
                 right: createSpriteSRight(marioStandRight),
                 left: createSpriteSLeft(marioStandLeft),
                 cropWidth: 40,
                 width: 55
            },
            run: {
                 right: createSpriteRunRight(marioRunRight),
                 left: createSpriteRunLeft(marioRunLeft),
                 cropWidth: 40,
                 width: 55
            },
            drown: {
                right : createSpriteDrown(marioDrowns),
                cropWidth: 70,
                width: 70
            },
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
            42,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        if (
            this.frames > 24 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0
        else if (this.frames > 24 &&
            (this.currentSprite === this.sprites.run.right ||
                this.currentSprite === this.sprites.run.left)
        )
            this.frames = 0
         else if (this.frames > 12 &&
            this.currentSprite === this.sprites.drown.right
            )
            this.frames = 0
        this.draw()
        this.position.y += this.velocity.y,  
            this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
    }
}



class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        //    canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

// mountains and sky background
class GenericObject {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}




class Rock {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Tree {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Crate {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Sign {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class House {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Leave {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Bush {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Fence {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Barrel {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Water {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Bridge {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Flag {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }

        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        //    canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}


class PlatformBigSteel {
    constructor() {
        this.position = {
            x: 15920,
            y: 0,  // the position there is managed in the DisepearSteelPlatform() function
        }

        this.image = createPlateformBigSteel(plateformBigS)
        this.width = 89,
        this.height = 320
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw() 
        }
}

class PlatformBigSteel02 {
    constructor() {
        this.position = {
            x: 17230,
            y: 0  // the position there is managed in the DisepearSteelPlatform() function
        }

        this.image = createPlateformBigSteel(plateformBigS)
        this.width = 89,
        this.height = 320
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw() 
        }
}


class PlatformBigSteel03 {
    constructor() {
        this.position = {
            x: 18280,
            y: 0  // the position there is managed in the DisepearSteelPlatform() function
        }

        this.image = createPlateformBigSteel(plateformBigS)
        this.width = 89,
        this.height = 320
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw() 
        }
}


class PlatformBigSteel04 {
    constructor() {
        this.position = {
            x: 18680,
            y: 0  // the position there is managed in the DisepearSteelPlatform() function
        }

        this.image = createPlateformBigSteel(plateformBigS)
        this.width = 89,
        this.height = 320
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw() 
        }
}












// initialization of the STATIC images of the game, each placed in their respective function.

function createPlatform() {
    const platform = new Image()
    platform.src = "./images/platform1.png"
    return platform
}

function createPlatformSmallTall() {
    const platformSmallTall = new Image()
    platformSmallTall.src = "./images/platformSmallTall.png"
    return platformSmallTall
}

function createPlatformSmall() {
    const platformSmall = new Image()
    platformSmall.src = "./images/platformSmall.png"
    return platformSmall
}

function createplatform02() {
    const platform02 = new Image()
    platform02.src = "./images/platform2.png"
    return platform02
}

function createPlateformGreen() {
    const plateformGreen = new Image()
    plateformGreen.src = "./images/plateform-green.png"
    return plateformGreen
}

function createPlateformGreenSmall() {
    const plateformGreenS = new Image()
    plateformGreenS.src = "./images/plateform-green02.png"
    return plateformGreenS
}

function createPlateformSteel() {
    const plateformSteel = new Image()
    plateformSteel.src = "./images/plateform-steel02.png"
    return plateformSteel
}

function createPlatformMedium1() {
    const platformMedium1 = new Image()
    platformMedium1.src = "./images/platform4.png"
    return platformMedium1
}

function createPlatformMedium2() {
    const platformMedium2 = new Image()
    platformMedium2.src = "./images/platform5.png"
    return platformMedium2
}

function createPlatformMedium3() {
    const platformMedium3 = new Image()
    platformMedium3.src = "./images/platform6.png"
    return platformMedium3
}

function createPlatformMedium4() {
    const platformMedium4 = new Image()
    platformMedium4.src = "./images/platform7.png"
    return platformMedium4
}

function createPlatformMedium5() {
    const platformMedium5 = new Image()
    platformMedium5.src = "./images/platform8.png"
    return platformMedium5
}

function createPlatformMedium6() {
    const platformMedium6 = new Image()
    platformMedium6.src = "./images/platform9.png"
    return platformMedium6
}

function createPlatformPlate() {
    const platformPlate = new Image()
    platformPlate.src = "./images/platform10.png"
    return platformPlate
}

function createPlatform11() {
    const platform11 = new Image()
    platform11.src = "./images/platform11.png"
    return platform11
}

function createPlatform12() {
    const platform12 = new Image()
    platform12.src = "./images/platform12.png"
    return platform12
}


function createSky() {
    const sky = new Image()
    sky.src = "./images/ciel.png"
    return sky
}



function createHills() {
    const hills = new Image()
    hills.src = "./images/paysage.png"
    return hills
}

function createRock() {
    const rock = new Image()
    rock.src = "./images/rocher01.png"
    return rock
}
function createBigrock() {
    const bigRock = new Image()
    bigRock.src = "./images/rocher03.png"
    return bigRock
}
function createRock02() {
    const rock02 = new Image()
    rock02.src = "./images/rocher02.png"
    return rock02
}
function createRock03() {
    const rock04 = new Image()
    rock04.src = "./images/rocher4.png"
    return rock04
}
function createRock04() {
    const rock05 = new Image()
    rock05.src = "./images/rocher5.png"
    return rock05
}

function createTree() {
    const tree = new Image()
    tree.src = "./images/arbre01.png"
    return tree
}
function createBigtree() {
    const bigTree = new Image()
    bigTree.src = "./images/arbre02.png"
    return bigTree
}
function createMiniTree() {
    const miniTree = new Image()
    miniTree.src = "./images/arbre03.png"
    return miniTree
}

function createCrate() {
    const crate = new Image()
    crate.src = "./images/caisse.png"
    return crate
}
function createCrateSmall() {
    const crateSmall = new Image()
    crateSmall.src = "./images/crate_small.png"
    return crateSmall
}
function createSign() {
    const Sign = new Image()
    Sign.src = "./images/sign.png"
    return Sign
}
function createHouse01() {
    const House = new Image()
    House.src = "./images/maison_jaune.png"
    return House
}
function createHouse02() {
    const House02 = new Image()
    House02.src = "./images/maison_marron.png"
    return House02
}
function createHouse03() {
    const House03 = new Image()
    House03.src = "./images/maison3.png"
    return House03
}

function createLeaves01() {
    const leaves01 = new Image()
    leaves01.src = "./images/green-leavesSmall.png"
    return leaves01
}
function createLeaves02() {
    const leaves02 = new Image()
    leaves02.src = "./images/green-leavesSmallRight.png"
    return leaves02
}


function createBush() {
    const bush = new Image()
    bush.src = "./images/buisson01.png"
    return bush
}
function createBush02() {
    const bush02 = new Image()
    bush02.src = "./images/buisson02.png"
    return bush02
}


function createFence() {
    const fence = new Image()
    fence.src = "./images/fence-wood.png"
    return fence
}


function createBarrel() {
    const Barrel = new Image()
    Barrel.src = "./images/Barrel.png"
    return Barrel
}
function createBarrel02() {
    const Barrel02 = new Image()
    Barrel02.src = "./images/Barrel02.png"
    return Barrel02
}

function createWater01() {
    const water01 = new Image()
    water01.src = "./images/water01.png"
    return water01
}

function createWater02() {
    const water02 = new Image()
    water02.src = "./images/water02.png"
    return water02
}


function createBridgeLeft() {
    const bridgeLeft = new Image()
   bridgeLeft.src = "./images/bridge-left.png"
    return bridgeLeft
}
function createBridgeRight() {
    const bridgeRight = new Image()
   bridgeRight.src = "./images/bridge-right.png"
    return bridgeRight
}


function createFlag() {
    const createFlag = new Image()
    createFlag.src = "./images/flag.png"
    return createFlag
}









let theplatform = createPlatform("./images/platform1.png")
let theSky = createSky("./images/ciel.png")
let theHills = createHills("./images/paysage.png")
let thePlatformSmallTall = createPlatformSmallTall("./images/platformSmallTall.png")
let thePlatformSmall = createPlatformSmall("./images/platformSmall.png")
let theplateformGreen = createPlateformGreen("./images/plateform-green.png")
let theplateformGreenSmall = createPlateformGreenSmall("./images/plateform-green02.png")
let theplateformSteel = createPlateformSteel("./images/plateform-steel02.png")
let theplateform4 = createPlatformMedium1("./images/plateform4.png")
let theplateform5 = createPlatformMedium2("./images/plateform5.png")
let theplateform6 = createPlatformMedium3("./images/plateform6.png")
let theplateform7 = createPlatformMedium4("./images/plateform7.png")
let theplateform8 = createPlatformMedium5("./images/plateform8.png")
let theplateform9 = createPlatformMedium6("./images/plateform9.png")
let theplateform10 = createPlatformPlate("./images/plateform10.png")
let theplateform11 = createPlatform11("./images/plateform11.png")
let theplateform12 = createPlatform12("./images/plateform12.png")
let theRock = createRock("./images/rocher01.png")
let theRock02 = createRock02("./images/rocher02.png")
let thebigRock = createBigrock("./images/rocher03.png")
let theRock03 = createRock03("./images/rocher4.png")
let theRock04 = createRock04("./images/rocher5.png")
let theTree = createTree("./images/arbre01.png")
let thebigTree = createBigtree("./images/arbre02.png")
let theMiniTree = createMiniTree("./images/arbre03.png")
let theCrate = createCrate("./images/caisse.png")
let thecrateSmall = createCrateSmall("./images/crate_small.png")
let theSign = createSign("./images/sign.png")
let theHouse01 = createHouse01("./images/maison_jaune.png")
let theHouse02 = createHouse02("./images/maison_marron.png")
let theHouse03 = createHouse03("./images/maison3.png")
let thePlatform02 = createplatform02("./images/platform2.png")
let theLeaves = createLeaves01("./images/green-leavesSmall.png")
let theLeavesRight = createLeaves02("./images/green-leavesSmallRight.png")
let theBush = createBush("./images/buisson01.png")
let theBush02 = createBush02("./images/buisson02.png")
let theFence = createFence("./images/fence-wood.png")
let theBarrel = createBarrel("./images/Barrel.png")
let theBarrel02 = createBarrel02("./images/Barrel02.png")
let theWater = createWater01("./images/water01.png")
let theWater02 = createWater01("./images/water02.png")
let theBridgeLeft = createBridgeLeft("./images/bridge-left.png")
let theBridgeRight = createBridgeRight("./images/bridge-right.png")
let theFlag = createFlag("./images/flag.png")

let player = new Player();

let mushroomB1 = new MushroomB1();
let mushroomB2 = new MushroomB2();
let mushroomB3 = new MushroomB3();
let mushroomB4 = new MushroomB4();
let mushroomB5 = new MushroomB5();
let mushroomB6 = new MushroomB6();
let mushroomB7 = new MushroomB7();
let mushroomB8 = new MushroomB8();
let mushroomB9 = new MushroomB9();
let mushroomB10 = new MushroomB10();
let mushroomB11 = new MushroomB11();
let mushroomB12 = new MushroomB12();
let mushroomB13 = new MushroomB13();
let mushroomB14 = new MushroomB14();
let mushroomB15 = new MushroomB15();
let mushroomB16 = new MushroomB16();

let mushroomR1 = new MushroomRouge();
let mushroomR2 = new MushroomR2();
let mushroomR3 = new MushroomR3();

let goomba01 = new Goomba();
let goomba02 = new Goomba02();
let goomba03 = new Goomba03();
let goomba04 = new Goomba04();
let goomba05 = new Goomba05();

let bounty1 = new Bounty1();
let bounty2 = new Bounty2();
let bounty3 = new Bounty3();
let bounty4 = new Bounty4();
let bounty5 = new Bounty5();
let bounty6 = new Bounty6();
let bounty7 = new Bounty7();
let bounty8 = new Bounty8();
let bounty9 = new Bounty9();
let bounty10 = new Bounty10();
let bounty11 = new Bounty11();
let bounty12 = new Bounty12();
let bounty13 = new Bounty13();
let bounty14 = new Bounty14();
let bounty15 = new Bounty15();
let bounty16 = new Bounty16();
let bounty17 = new Bounty17();
let bounty18 = new Bounty18();
let bounty19 = new Bounty19();
let bounty20 = new Bounty20();
let bounty21 = new Bounty21();
let bounty22 = new Bounty22();
let bounty23 = new Bounty23();
let bounty24 = new Bounty24();
let bounty25 = new Bounty25();
let bounty26 = new Bounty26();
let bounty27 = new Bounty27();
let bounty28 = new Bounty28();
let bounty29 = new Bounty29();
let bounty30 = new Bounty30();
let bounty31 = new Bounty31();
let bounty32 = new Bounty32();
let bounty33 = new Bounty33();
let bounty34 = new Bounty34();
let bounty35 = new Bounty35();
let bounty36 = new Bounty36();
let bounty37 = new Bounty37();
let bounty38 = new Bounty38();
let bounty39 = new Bounty39();
let bounty40 = new Bounty40();
let bounty41 = new Bounty41();
let bounty42 = new Bounty42();

let plateformBigSteel = new PlatformBigSteel();
let plateformBigSteel02 = new PlatformBigSteel02();
let plateformBigSteel03 = new PlatformBigSteel03();
let plateformBigSteel04 = new PlatformBigSteel04();

let waterfall = new Waterfall();
let waterfall02 = new Waterfall02();

let scoreTag = document.getElementById('score');
let lifeTag = document.getElementById('vie');
let timerTag = document.getElementById('timer');
let blackScreen = document.querySelector('.blackScreen');
let loseTag = document.getElementById('lose');
let winTag = document.getElementById('win');
let btnRestart = document.querySelector('#reload');
let progScreen = document.getElementById('container-prog');
let progBar = document.querySelector('.progress-bar');
let vie = 1;
let stock = 0;
let time = 300;
let counter = 0;
let counterDiseapearBigS = 0;  // counter for the disappearance of metal platforms
let compteurGoomba = 0
let counterKeydown = 0

let keys = {
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
    ArrowUp: { pressed: false },
    q: { pressed: false },
    d: { pressed: false },
    z: { pressed: false }
}




let platforms = []
let genericObjects = []
let rocks = []
let trees = []
let crates = []
let signs = []
let houses = []
let leaves = []
let particules = []
let particulesBountys = []
let particulesPlatformBigS = []
let particulesMages = []
let bushs = []
let fences = []
let barrels = []
let waters = []
let bridges = []
let flags = []
let clouds = []


// Variables that indicate what stage the player is in the game, on the x-axis and as a value.
// At the start of the game, the value is 0.
let scrollOffset = 0
let scrollVertical = 0




// Launched at the start of the game, when we lose or win
function init() {


    // duplicate variables for the init() function
    theplatform = createPlatform("./images/platform1.png")
    theSky = createSky("./images/ciel.png");
    theHills = createHills("./images/paysage.png");
    thePlatformSmallTall = createPlatformSmallTall("./images/platformSmallTall.png");
    thePlatformSmall = createPlatformSmall("./images/platformSmall.png");
    theplateformGreen = createPlateformGreen("./images/plateform-green.png");
    theplateformGreenSmall = createPlateformGreenSmall("./images/plateform-green02.png")
    theplateformSteel = createPlateformSteel("./images/plateform-steel02.png")
    theplateform4 = createPlatformMedium1("./images/plateform4.png")
    theplateform5 = createPlatformMedium2("./images/plateform5.png")
    theplateform6 = createPlatformMedium3("./images/plateform6.png")
    theplateform7 = createPlatformMedium4("./images/plateform7.png")
    theplateform8 = createPlatformMedium5("./images/plateform8.png")
    theplateform9 = createPlatformMedium6("./images/plateform9.png")
    theplateform10 = createPlatformPlate("./images/plateform10.png")
    theplateform11 = createPlatform11("./images/plateform11.png")
    theplateform12 = createPlatform12("./images/plateform12.png")
    theRock = createRock("./images/rocher01.png");
    theRock02 = createRock02("./images/rocher02.png");
    thebigRock = createBigrock("./images/rocher03.png");
    theRock03 = createRock03("./images/rocher4.png")
    theRock04 = createRock04("./images/rocher5.png")
    theTree = createTree("./images/arbre01.png");
    thebigTree = createBigtree("./images/arbre02.png");
    theMiniTree = createMiniTree("./images/arbre03.png")
    theCrate = createCrate("./images/caisse.png");
    thecrateSmall = createCrateSmall("./images/crate_small.png");
    theSign = createSign("./images/sign.png");
    theHouse01 = createHouse01("./images/maison_jaune.png");
    theHouse02 = createHouse02("./images/maison_marron.png");
    theHouse03 = createHouse03("./images/maison3.png")
    thePlatform02 = createplatform02("./images/platform2.png");
    theLeaves = createLeaves01("./images/green-leavesSmall.png");
    theLeavesRight = createLeaves02("./images/green-leavesSmallRight.png");
    theBush = createBush("./images/buisson01.png");
    theBush02 = createBush02("./images/buisson02.png")
    theFence = createFence("./images/fence-wood.png")
    theBarrel = createBarrel("./images/Barrel.png")
    theBarrel02 = createBarrel02("./images/Barrel02.png")
    theWater = createWater01("./images/water01.png")
    theWater02 = createWater01("./images/water02.png")
    theBridgeLeft = createBridgeLeft("./images/bridge-left.png")
    theBridgeRight = createBridgeRight("./images/bridge-right.png")
    theFlag = createFlag("./images/flag.png")

    player = new Player();

    mushroomB1 = new MushroomB1();
    mushroomB2 = new MushroomB2();
    mushroomB3 = new MushroomB3();
    mushroomB4 = new MushroomB4();
    mushroomB5 = new MushroomB5();
    mushroomB6 = new MushroomB6();
    mushroomB7 = new MushroomB7();
    mushroomB8 = new MushroomB8();
    mushroomB9 = new MushroomB9();
    mushroomB10 = new MushroomB10();
    mushroomB11 = new MushroomB11();
    mushroomB12 = new MushroomB12();
    mushroomB13 = new MushroomB13();
    mushroomB14 = new MushroomB14();
    mushroomB15 = new MushroomB15();
    mushroomB16 = new MushroomB16();

    mushroomR1 = new MushroomRouge();
    mushroomR2 = new MushroomR2();
    mushroomR3 = new MushroomR3();

    goomba01 = new Goomba();
    goomba02 = new Goomba02();
    goomba03 = new Goomba03();
    goomba04 = new Goomba04();
    goomba05 = new Goomba05();

    bounty1 = new Bounty1();
    bounty2 = new Bounty2();
    bounty3 = new Bounty3();
    bounty4 = new Bounty4();
    bounty5 = new Bounty5();
    bounty6 = new Bounty6();
    bounty7 = new Bounty7();
    bounty8 = new Bounty8();
    bounty9 = new Bounty9();
    bounty10 = new Bounty10();
    bounty11 = new Bounty11();
    bounty12 = new Bounty12();
    bounty13 = new Bounty13();
    bounty14 = new Bounty14();
    bounty15 = new Bounty15();
    bounty16 = new Bounty16();
    bounty17 = new Bounty17();
    bounty18 = new Bounty18();
    bounty19 = new Bounty19();
    bounty20 = new Bounty20();
    bounty21 = new Bounty21();
    bounty22 = new Bounty22();
    bounty23 = new Bounty23();
    bounty24 = new Bounty24();
    bounty25 = new Bounty25();
    bounty26 = new Bounty26();
    bounty27 = new Bounty27();
    bounty28 = new Bounty28();
    bounty29 = new Bounty29();
    bounty30 = new Bounty30();
    bounty31 = new Bounty31();
    bounty32 = new Bounty32();
    bounty33 = new Bounty33();
    bounty34 = new Bounty34();
    bounty35 = new Bounty35();
    bounty36 = new Bounty36();
    bounty37 = new Bounty37();
    bounty38 = new Bounty38();
    bounty39 = new Bounty39();
    bounty40 = new Bounty40();
    bounty41 = new Bounty41();
    bounty42 = new Bounty42();

    plateformBigSteel = new PlatformBigSteel();
    plateformBigSteel02 = new PlatformBigSteel02();
    plateformBigSteel03 = new PlatformBigSteel03();
    plateformBigSteel04 = new PlatformBigSteel04();

    waterfall = new Waterfall();
    waterfall02 = new Waterfall02();

    scoreTag = document.getElementById('score');
    lifeTag = document.getElementById('vie');
    timerTag = document.getElementById('timer');
    blackScreen = document.querySelector('.blackScreen');
    loseTag = document.getElementById('lose');
    winTag = document.getElementById('win');
    btnRestart = document.querySelector('#reload');
    progScreen = document.getElementById('container-prog');
    progBar = document.querySelector('.progress-bar');
    vie = 1;
    stock = 0;
    time = 300; // 60 * 5 secondes = 300
    counter = 0;
    counterDiseapearBigS = 0; // counter for the disappearance of metal platforms
    compteurGoomba = 0
    counterKeydown = 0



// remove the black mask at the initialization of the game when we win or lose
    blackScreen.style.display = "none";




    waters = [
        new Water ({
            x: 900,
            y: 546,
            image:  theWater02
        }),
    
        new Water ({
            x: 1500,
            y: 546,
            image:  theWater02
        }),
    
        new Water ({
            x: 6120,
            y: 546,
            image:  theWater02
        }),
        new Water ({
            x: 6600,
            y: 546,
            image:  theWater02
        }),
    
    
         new Water ({
            x: 12590,
            y: 546,
            image:  theWater
        }),
        new Water ({
            x: 13190,
            y: 546,
            image:  theWater
        }),
        new Water ({
            x: 13700,
            y: 546,
            image:  theWater
        }),
        new Water ({
            x: 14100,
            y: 546,
            image:  theWater02
        }),

        new Water ({
            x: 15080,
            y: 546,
            image:  theWater
        }),

        new Water ({
            x: 15644,
            y: 546,
            image:  theWater
        }),

        new Water ({
            x: 16168,
            y: 546,
            image:  theWater
        }),
        new Water ({
            x: 16348,
            y: 546,
            image:  theWater02
        }),
        new Water ({
            x: 20160,
            y: 546,
            image:  theWater02
        }),
    
    ]
    
    platforms = [
        // plateforme 1
        new Platform({
            x: -1,  // position de la 1ere plateforme sur l'axe X
            y: 515,  // position de la 1ere plateforme sur l'axe Y
            image: theplatform
        }),
        // plateforme 2
        new Platform({
            x: theplatform.width - 3,
            y: 515,
            image: theplatform
        }),
    
        // Vide //
    
        // plateforme 3
        new Platform({
            x: theplatform.width * 2 + 200, //  on copie et colle la plateforme qui a -3 et on rajoute la place qu'elle occupe dans le tableau
            y: 515,
            image: theplatform
        }),
    
        // Vide //
    
        // plateforme 4
        new Platform({
            x: theplatform.width * 3 + 400, //  
            y: 515,
            image: theplatform
        }),
        // plateforme 5
        new Platform({
            x: theplatform.width * 4 + 300, //  
            y: 515,
            image: theplatform
        }),
        // Moyenne plateforme en hauteur 1
        new Platform({
            x: thePlatformSmallTall.width * 5 + 2100,
            y: 380,
            image: thePlatformSmallTall
        }),
    
        // Vide //
    
        // plateforme 6
        new Platform({
            x: theplatform.width * 6 + 400, //  
            y: 515,
            image: theplatform
        }),
    
        // Vide //
    
        // plateforme 7
        new Platform({
            x: theplatform.width * 7 + 700, //  
            y: 515,
            image: theplatform
        }),
        // plateforme 8
        new Platform({
            x: theplatform.width * 8 + 700, //  
            y: 515,
            image: theplatform
        }),
        // plateforme 9
        new Platform({
            x: theplatform.width * 9 + 700, //  
            y: 515,
            image: theplatform
        }),
    
        // Vide //
    
        // plateforme 10
        new Platform({
            x: theplatform.width * 10 + 700, //  
            y: 515,
            image: theplatform
        }),
    
        // Vide //
    
        // petite plateforme au sol 1
        new Platform({
            x: thePlatformSmall.width * 82, //  
            y: 515,
            image: thePlatformSmall
        }),
    
        // Vide //
    
        // petite plateforme au sol 2
        new Platform({
            x: thePlatformSmall.width * 87, //  
            y: 515,
            image: thePlatformSmall
        }),
    
        // Vide //
    
        // petite plateforme au sol 3
        new Platform({
            x: thePlatformSmall.width * 92, //  
            y: 515,
            image: thePlatformSmall
        }),
    
        // Vide //
    
        // petite plateforme en hauteur 1
        new Platform({
            x: thePlatformSmall.width * 94, //  
            y: 400,
            image: thePlatformSmall
        }),
    
        // Vide //
    
    
    // petite plateforme en hauteur 2
    new Platform({
    x: 7200,
    y: 280,
    image: thePlatformSmall
    }),
    
    // Vide //
    
    // petite plateforme en hauteur 3
    new Platform({
    x: 7100,
    y: 220,
    image: thePlatformSmall
    }),
    
    // Vide //
    
    // petite plateforme en hauteur 4
    new Platform({
    x: 6900,
    y: 160,
    image: thePlatformSmall
    }),
    
    // Vide //
    
    // petite plateforme en hauteur 5
    new Platform({
    x: 6700,
    y: 180,
    image: thePlatformSmall
    }),
    
    // Vide //
    
    // petite plateforme en hauteur 6
    new Platform({
    x: 6500,
    y: 140,
    image: thePlatformSmall
    }),
    
    // Vide //
    
    // petite plateforme en hauteur 7
    new Platform({
    x: 6270,
    y: 150,
    image: thePlatformSmall
    }),
    
    // Vide //
    
    // petite plateforme en hauteur 8
     new Platform({
        x: 6062,
        y: 140,
        image: thePlatformSmall
    }),
    
    // Vide //
    
    // petite plateforme en hauteur 9
    new Platform({
    x: 5932,
    y: 160,
    image: thePlatformSmall
    }),
    
    // petite plateforme en hauteur 10
    new Platform({
    x: 5662,
    y: 140,
    image: thePlatformSmall
    }),
    
    // petite plateforme en hauteur 11
    new Platform({
    x: 5382,
    y: 140,
    image: thePlatformSmall
    }),
    
    
    // sur-plateforme 1
    new Platform({
    x: 7750,
    y: 398,
    image: thePlatform02
    }),
    
       // plateforme 11
        new Platform({
            x: 7710,
            y: 470,
            image: theplatform
        }),
    
        // Vide //
    
        // plateforme 12
        new Platform({
            x: theplatform.width * 16 + 300,
            y: 470,
            image: theplatform
        }),
        // plateforme 13
        new Platform({
            x: theplatform.width * 17 + 300,
            y: 470,
            image: theplatform
        }),
        // plateforme 14
        new Platform({
            x: theplatform.width * 18 + 300,
            y: 470,
            image: theplatform
        }),
    
        // vide //
    
        // Moyenne plateforme en hauteur 2
        new Platform({
            x: thePlatformSmallTall.width * 65,
            y: 550,
            image: thePlatformSmallTall
        }),
    
        // vide //
    
        // petite plateforme en hauteur 2
        new Platform({
            x: thePlatformSmall.width * 127,
            y: 403,
            image: thePlatformSmall
        }),
    
        // vide //
    
        // petite plateforme en hauteur 3
        new Platform({
            x: thePlatformSmall.width * 129,
            y: 330,
            image: thePlatformSmall
        }),
    
        // vide //
    
        // petite plateforme en hauteur 4
        new Platform({
            x: thePlatformSmall.width * 126,
            y: 240,
            image: thePlatformSmall
        }),
    
        // vide //
    
        // petite plateforme en hauteur 5
        new Platform({
            x: thePlatformSmall.width * 124,
            y: 200,
            image: thePlatformSmall
        }),
    
        // vide //
    
        // plateforme 15
        new Platform({
            x: theplatform.width * 17 + 490,
            y: 220,
            image: theplatform
        }),
    
        // vide //
    
        // petite plateforme en hauteur 6
        new Platform({
            x: thePlatformSmall.width * 131,
            y: 240,
            image: thePlatformSmall
        }),
    
        // vide //
    
        // plateforme 16
        new Platform({
            x: theplatform.width * 21,
            y: 210,
            image: theplatform
        }),
    
        // Moyenne plateforme en hauteur 3
        new Platform({
            x: thePlatformSmallTall.width * 74.7,
            y: 310,
            image: thePlatformSmallTall
        }),
    
        // plateforme 19
        new Platform({
            x: theplatform.width * 23.5,
            y: 515,
            image: theplatform
        }),
    
        // vide //
    
        // plateforme 20
        new Platform({
            x: theplatform.width * 24.5,
            y: 515,
            image: theplatform
        }),
    
    
    
        // sur-plateforme
        new Platform({
            x: thePlatform02.width * 24,
            y: 437,
            image: thePlatform02
        }),
    
    
    //    GREEN Small platform 1
        new Platform({
            x: 12100,
            y: 365,
            image: theplateformGreenSmall
        }),
    
    
    //    GREEN BIG platform 1
    new Platform({
    x: 12330,
    y: 257,
    image: theplateformGreen
    }),
    
        // plateforme 21
        new Platform({
            x: theplatform.width * 25.5,
            y: 150,
            image: theplatform
        }),
        // plateforme 22
        new Platform({
            x: theplatform.width * 26 + 375,
            y: 350,
            image: theplatform
        }),
    
        // vide //
    
        // petite plateforme en hauteur 7
        new Platform({
            x: thePlatformSmall.width * 177,
            y: 220,
            image: thePlatformSmall
        }),
    
        // vide //
    
         // petite plateforme en hauteur 8
         new Platform({
            x: thePlatformSmall.width * 175,
            y: 530,
            image: thePlatformSmall
        }),
    
         // vide //
    
        // petite plateforme en hauteur 9
        new Platform({
            x: thePlatformSmall.width * 183,
            y: 530,
            image: thePlatformSmall
        }),
    
        // vide //
    
        // plateforme 22
        new Platform({
            x: theplatform.width * 30 - 164,
            y: 515,
            image: theplatform
        }),
    
       // vide //

  //    GREEN BIG platform 2
  new Platform({
    x: 15380,
    y: 490,
    image: theplateformGreen
    }),

  // vide //

  //    GREEN BIG platform 2
  new Platform({
    x: 15650,
    y: 450,
    image: theplateformGreen
    }),

       // vide //

  //    GREEN BIG platform 4
  new Platform({
    x: 16190,
    y: 510,
    image: theplateformGreen
    }),

      // vide //

  //    GREEN BIG platform 5
  new Platform({
    x: 16460,
    y: 490,
    image: theplateformGreen
    }),

      // vide //

  //    GREEN BIG platform 6
  new Platform({
    x: 16700,
    y: 460,
    image: theplateformGreen
    }),
   
     // vide //

     //    GREEN BIG platform 7
  new Platform({
    x: 16950,
    y: 460,
    image: theplateformGreen
    }),

     // vide //

     // petite plateforme en hauteur 10
     new Platform({
        x: 17500,
        y: 410,
        image: thePlatformSmall
    }),

      // vide //

// Moyenne plateforme en hauteur 4
new Platform({
    x: 17500,
    y: 190,
    image: thePlatformSmall
}),

 // vide //

  //    petite platform en hauteur 3
  new Platform({
    x: 17650,
    y: 290,
    image: thePlatformSmall
    }),

     // vide //

     // Moyenne plateforme en hauteur 5
     new Platform({
        x: 17950,
        y: 340,
        image: thePlatformSmallTall
    }),

      // vide //

      // platform 23
      new Platform({
        x: 19020,
        y: 410,
        image: theplatform
    }),

// petite plateforme en hauteur
new Platform({
    x: 19600,
    y: 285,
    image: thePlatformSmall
}),
// petite plateforme en hauteur
new Platform({
    x: 19600,
    y: 145,
    image: thePlatformSmall
}),
// petite plateforme en hauteur
new Platform({
    x: 19700,
    y: 355,
    image: thePlatformSmall
}),
// petite plateforme en hauteur
new Platform({
    x: 19700,
    y: 215,
    image: thePlatformSmall
}),
// petite plateforme en hauteur
new Platform({
    x: 19700,
    y: 215,
    image: thePlatformSmall
}),

 // platform superposé 6
 new Platform({
    x: 18885,
    y: 140,
    image: theplateform10
}),

  // platform 24
  new Platform({
    x: 19620,
    y: 534,
    image: theplatform
}),

 // platform 25
 new Platform({
    x: 20110,
    y: 534,
    image: thePlatformSmallTall
}),

// petite plateforme en hauteur
new Platform({
    x: 20067,
    y: 261,
    image: theplateform12
}),
 // platform BIG
 new Platform({
    x: 20070,
    y: 316,
    image: theplateform11
}),
 
// petite plateforme en hauteur
new Platform({
    x: 20505,
    y: 261,
    image: theplateform12
}),




 // platform 26
 new Platform({
    x: 20510,
    y: 534,
    image: theplatform
}),
 // platform 27
 new Platform({
    x: 20950,
    y: 534,
    image: theplatform
}),
 // platform 28
 new Platform({
    x: 21250,
    y: 534,
    image: theplatform
}),


// platform superposé 1
new Platform({
    x: 19800,
    y: 457,
    image: theplateform4
}),

// platform superposé 2
new Platform({
    x: 20900,
    y: 177,
    image: theplateform8
}),
// platform superposé a la platform superposé 2
new Platform({
    x: 20978,
    y: 107,
    image: theplateform9
}),



 // platform superposé 3
 new Platform({
    x: 20570,
    y: 432,
    image: theplateform7
}),

 // platform finale
 new Platform({
    x: 21870,
    y: 500,
    image: theplateform8
}),

 new Platform({
    x: 21933,
    y: 430,
    image: theplateformGreenSmall
}),

]
    
    genericObjects = [
        new GenericObject({
            x: 0,
            y: 0,
            image: theSky
        }),
        new GenericObject({
            x: 0,
            y: 0,
            image: theHills
        }),
    ]
    
    rocks = [
        new Rock({
            x: 800,
            y: 470,
            image: theRock
    
        }),
    
    
        new Rock({
            x: 2300,
            y: 425,
            image: thebigRock
        }),
        new Rock({
            x: 2275,
            y: 470,
            image: theRock02
        }),
        new Rock({
            x: 2390,
            y: 470,
            image: theRock
    
        }),




        new Rock({
            x: 20310,
            y: 455,
            image: theRock04
    
        }),
        new Rock({
            x: 20195,
            y: 455,
            image: theRock04
    
        }),
      // gros rocher sous cascade
        new Rock({
            x: 20370,
            y: 455,
            image: thebigRock
    
        }),
        new Rock({
            x: 20460,
            y: 485,
            image: theRock03
    
        }),
       
    ]
    
    trees = [
        new Tree({
            x: 40,
            y: 240,
            image: theTree
    
        }),
    
        new Tree({
            x: 2000,
            y: 240,
            image: theTree
    
        }),
    
    // 1er arbre de la deuxieme rangée
        new Tree({
            x: 4540,
            y: 240,
            image: theTree
    
        }),
        // 2eme arbre de la deuxieme rangée
        new Tree({
            x: 4730,
            y: 240,
            image: theTree
    
        }),
         // 3eme arbre de la deuxieme rangée
        new Tree({
            x: 5550,
            y: 240,
            image: theTree
    
        }),
    // 4eme arbre de la deuxieme rangée
    new Tree({
    x: 5850,
    y: 240,
    image: theTree
    
    }),
    
        new Tree({
            x: 4150,
            y: 130,
            image: thebigTree
    
        }),
        new Tree({
            x: 4350,
            y: 240,
            image: theTree
    
        }),
        new Tree({
            x: 4650,
            y: 130,
            image: thebigTree
    
        }),
        new Tree({
            x: 4850,
            y: 240,
            image: theTree
    
        }),
        new Tree({
            x: 5050,
            y: 130,
            image: thebigTree
    
        }),
        new Tree({
            x: 5250,
            y: 240,
            image: theTree
        }),
        new Tree({
            x: 5400,
            y: 130,
            image: thebigTree
        }),
        new Tree({
            x: 5650,
            y: 130,
            image: thebigTree
        }),
    
        new Tree({
            x: 8400,
            y: 195,
            image: theTree
    
        }),

        new Tree({
            x: 19920,
            y: 270,
            image: theMiniTree
    
        }),
        new Tree({
            x: 21220,
            y: 150,
            image: thebigTree
    
        }),
    ]
    
    crates = [
        new Crate({
            x: 1300,
            y: 476,
            image: thecrateSmall
        }),
        new Crate({
            x: 1345,
            y: 476,
            image: thecrateSmall
        }),
        new Crate({
            x: 1315,
            y: 436,
            image: thecrateSmall
        }),

    
        new Crate({
            x: 8185,
            y: 220,
            image: thecrateSmall
        }),
        new Crate({
            x: 8090,
            y: 330,
            image: theCrate
        }),
        new Crate({
            x: 8160,
            y: 330,
            image: theCrate
        }),
        new Crate({
            x: 8150,
            y: 260,
            image: theCrate
        }),
    
        new Crate({
            x: 12905,
            y: 500,
            image: thecrateSmall
        }),
        new Crate({
            x: 13085,
            y: 460,
            image: thecrateSmall
        }),
    
    ]
    
    signs = [
        new Sign({
            x: 900,
            y: 480,
            image: theSign
    
        })
    
    ]
    
    houses = [
        new House({
            x: 365,
            y: 341,
            image: theHouse01
        }),
      
        // new House({
        //     x: 8900,
        //     y: 299,
        //     image: theHouse03
        // }),
        
        new House({
            x: 14900,
            y: 325,
            image: theHouse02
        }),
    
    ]
    
    leaves = [
        new Leave({
            x: 1960,
            y: 455,
            image: theLeaves
        }),
    
        new Leave({
            x: 4825,
            y: 455,
            image: theLeavesRight
        }),
    
        new Leave({
            x: 8910,
            y: 160,
            image: theLeaves
        }),
        new Leave({
            x: 8990,
            y: 160,
            image: theLeavesRight
        }),
        new Leave({
            x: 9140,
            y: 160,
            image: theLeavesRight
        }),
        new Leave({
            x: 9215,
            y: 160,
            image: theLeaves
        }),
        new Leave({
            x: 9290,
            y: 160,
            image: theLeavesRight
        }),

        new Leave({
            x: 19885,
            y: 400,
            image: theLeaves
        }),
        new Leave({
            x: 20100,
            y: 400,
            image: theLeavesRight
        }),

        new Leave({
            x: 20570,
            y: 480,
            image: theLeaves
        }),
        new Leave({
            x: 20800,
            y: 380,
            image: theLeaves
        }),
        new Leave({
            x: 21000,
            y: 480,
            image: theLeavesRight
        }),
    ]
    
    bushs = [

        new Bush({
            x: 650,
            y: 420,
            image: theBush
        }),

        new Bush({
            x: 2550,
            y: 400,
            image: theBush02
        }),

    new Bush({
        x: 10450,
        y: 115,
        image: theBush
    }),

    new Bush({
        x: 20650,
        y: 445,
        image: theBush
    }),
    new Bush({
        x: 21000,
        y: 315,
        image: theBush02
    }),
    
    ]
    
    fences = [
        new Fence({
            x: 8583,
            y: 415,
            image: theFence
        }),
        new Fence({
            x: 8755,
            y: 415,
            image: theFence
        }),
    
    ]
    
    barrels = [
        new Barrel ({
            x: 3450,
            y: 470,
            image:  theBarrel02
        }),
    
        new Barrel ({
            x: 3600,
            y: 450,
            image:  theBarrel
        }),
        new Barrel ({
            x: 3530,
            y: 450,
            image:  theBarrel
        }),
        new Barrel ({
            x: 3565,
            y: 452,
            image:  theBarrel
        }),
    
        new Barrel ({
            x: 8300,
            y: 403,
            image:  theBarrel
        }),
    ]

    bridges = [
    new Bridge ({
        x: 20260,
        y: 260,
        image: theBridgeLeft
    }),
    new Bridge ({
        x: 20430,
        y: 260,
        image: theBridgeRight
    }),
    ]

   flags = [
    new Flag ({
       x: 21970,
       y: 310,
       image: theFlag
    })
]

clouds = [
    new Cloud({
        x: 0,
        y: 0,
        image: theCloud
    }),
];


scrollOffset = 0

}



// appearance of the "Restart" button
btnRestart.addEventListener('click', restart);

function restart() {
    loseTag.style.display = "none";
    btnRestart.style.display = "none";
    init()
    vie = 1;
    lifeTag.innerText = "Vie : " + vie;
    stock = 0;
    scoreTag.innerText = "Score : " + stock;
}









//  ---------------------- ANIMATE ----------------------------



function animate() {
    requestAnimationFrame(animate)
    canvasParams.c.fillStyle = ' white '
    canvasParams.c.fillRect(0, 0, canvas.width, canvas.height) 


   
    genericObjects.forEach((genericObject) => {
        genericObject.draw()
    })


    waters.forEach((water) => {
        water.draw()
    })

    platforms.forEach((theplatform) => {
        theplatform.draw()
    })

    rocks.forEach((theRock) => {
        theRock.draw()
    })

    trees.forEach((theTree) => {
        theTree.draw()
    })

    crates.forEach((theCrate) => {
        theCrate.draw()
    })

    crates.forEach((thecrateSmall) => {
        thecrateSmall.draw()
    })


    signs.forEach((theSign) => {
        theSign.draw()
    })

    houses.forEach((theHouse01) => {
        theHouse01.draw()
    })

    houses.forEach((theHouse02) => {
        theHouse02.draw()
    })

    houses.forEach((theHouse03) => {
        theHouse03.draw()
    })

    leaves.forEach((theLeaves) => {
        theLeaves.draw()
    })

    bushs.forEach((theBush) => {
        theBush.draw()
    })

    fences.forEach((theFence) => {
        theFence.draw()
    })

    barrels.forEach((theBarrel) => {
        theBarrel.draw()
    })

    bridges.forEach((theBridgeLeft) => {
        theBridgeLeft.draw()
    })
  
    flags.forEach((flag) => {
        flag.draw()
    })

    clouds.forEach((theCloud) => {
        theCloud.draw()
    })



// particle on the player when colliding with a Mushroom B
    particules.forEach((particule,index)=>{
        if(particule.opacity <= 0){
            particules.splice(index,1)
        }else{
            particule.update();
        }
    }) 

// particle on the player when colliding with a gold coin
particulesBountys.forEach((particulesBounty,index)=>{
    if(particulesBountys.opacity <= 0){
        particulesBountys.splice(index,1)
    }else{
        particulesBounty.update();
    }
}) 







 // To move the player right or left with canvas tracking
    if (
        (keys.ArrowRight.pressed || keys.d.pressed)  &&
         player.position.x < 400) {  
        player.velocity.x = player.speed
    } else if ((
        (keys.ArrowLeft.pressed || keys.q.pressed )  &&
             player.position.x > 400) || 
        ((keys.ArrowLeft.pressed || keys.q.pressed ) && 
        scrollOffset === 0 &&
            player.position.x > 0)
    ) {
        player.velocity.x =- player.speed

    } else {
        player.velocity.x = 0

        if
            (keys.ArrowUp.pressed || keys.z.pressed ) {
            scrollVertical += player.position.y
        }

    

/////////////////////  TO GET AWAY FROM OBJECTS  ///////////////////////////////

        
        if (keys.ArrowRight.pressed || keys.d.pressed ) {
            scrollOffset += player.speed

// gold coins
bounty1.position.x -= player.speed
bounty2.position.x -= player.speed
bounty3.position.x -= player.speed
bounty4.position.x -= player.speed
bounty5.position.x -= player.speed
bounty6.position.x -= player.speed
bounty7.position.x -= player.speed
bounty8.position.x -= player.speed
bounty9.position.x -= player.speed
bounty10.position.x -= player.speed
bounty11.position.x -= player.speed
bounty12.position.x -= player.speed
bounty13.position.x -= player.speed
bounty14.position.x -= player.speed
bounty15.position.x -= player.speed
bounty16.position.x -= player.speed
bounty17.position.x -= player.speed
bounty18.position.x -= player.speed
bounty19.position.x -= player.speed
bounty20.position.x -= player.speed
bounty21.position.x -= player.speed
bounty22.position.x -= player.speed
bounty23.position.x -= player.speed
bounty24.position.x -= player.speed
bounty25.position.x -= player.speed
bounty26.position.x -= player.speed
bounty27.position.x -= player.speed
bounty28.position.x -= player.speed
bounty29.position.x -= player.speed
bounty30.position.x -= player.speed
bounty31.position.x -= player.speed
bounty32.position.x -= player.speed
bounty33.position.x -= player.speed
bounty34.position.x -= player.speed
bounty35.position.x -= player.speed
bounty36.position.x -= player.speed
bounty37.position.x -= player.speed
bounty38.position.x -= player.speed
bounty39.position.x -= player.speed
bounty40.position.x -= player.speed
bounty41.position.x -= player.speed
bounty42.position.x -= player.speed


mushroomB1.position.x -= player.speed
mushroomB2.position.x -= player.speed
mushroomB3.position.x -= player.speed
mushroomB4.position.x -= player.speed
mushroomB5.position.x -= player.speed
mushroomB6.position.x -= player.speed
mushroomB7.position.x -= player.speed
mushroomB8.position.x -= player.speed
mushroomB9.position.x -= player.speed
mushroomB10.position.x -= player.speed
mushroomB11.position.x -= player.speed
mushroomB12.position.x -= player.speed
mushroomB13.position.x -= player.speed
mushroomB14.position.x -= player.speed
mushroomB15.position.x -= player.speed
mushroomB16.position.x -= player.speed


goomba01.position.x -= player.speed
goomba02.position.x -= player.speed
goomba03.position.x -= player.speed
goomba04.position.x -= player.speed
goomba05.position.x -= player.speed

mushroomR1.position.x -= player.speed
mushroomR2.position.x -= player.speed    
mushroomR3.position.x -= player.speed 


waterfall.position.x -= player.speed
waterfall02.position.x -= player.speed

plateformBigSteel.position.x -= player.speed
plateformBigSteel02.position.x -= player.speed
plateformBigSteel03.position.x -= player.speed
plateformBigSteel04.position.x -= player.speed


 
platforms.forEach((createPlatform) => {
createPlatform.position.x -= player.speed
});


genericObjects.forEach((genericObject) => {
genericObject.position.x -= player.speed/5  
});


clouds.forEach((theCloud) => {
    theCloud.position.x -= player.speed/100  //
})

rocks.forEach((createRock) => {
createRock.position.x -= player.speed
});


trees.forEach((createTree) => {
        createTree.position.x -= player.speed
    });


crates.forEach((createCrate) => {
        createCrate.position.x -= player.speed
            })


            signs.forEach((createSign) => {
                createSign.position.x -= player.speed
            })


            houses.forEach((theHouse01) => {
                theHouse01.position.x -= player.speed
            })


            leaves.forEach((theLeaves) => {
                theLeaves.position.x -= player.speed
            })


            bushs.forEach((theBush) => {
                theBush.position.x -= player.speed
            })


            fences.forEach((theFence) => {
                theFence.position.x -= player.speed
            })


            barrels.forEach((theBarrel) => {
                theBarrel.position.x -= player.speed
            })


            waters.forEach((water) => {
                water.position.x -= player.speed
            })


bridges.forEach((theBridgeLeft) => {
    theBridgeLeft.position.x -= player.speed
})


flags.forEach((flag) => {
    flag.position.x -= player.speed
    });



            particulesBountys.forEach((particulesBounty) => {
                particulesBounty.position.x -= player.speed
            })







///////////////////  TO GET CLOSE TO OBJECTS  ///////////////////////////////



        } else if (
            (keys.ArrowLeft.pressed || keys.q.pressed ) && 
                  scrollOffset > 0) {
            scrollOffset -= player.speed

  
bounty1.position.x += player.speed
bounty2.position.x += player.speed
bounty3.position.x += player.speed
bounty4.position.x += player.speed
bounty5.position.x += player.speed
bounty6.position.x += player.speed
bounty7.position.x += player.speed
bounty8.position.x += player.speed
bounty9.position.x += player.speed
bounty10.position.x += player.speed
bounty11.position.x += player.speed
bounty12.position.x += player.speed
bounty13.position.x += player.speed
bounty14.position.x += player.speed
bounty15.position.x += player.speed
bounty16.position.x += player.speed
bounty17.position.x += player.speed
bounty18.position.x += player.speed
bounty19.position.x += player.speed
bounty20.position.x += player.speed
bounty21.position.x += player.speed
bounty22.position.x += player.speed
bounty23.position.x += player.speed
bounty24.position.x += player.speed
bounty25.position.x += player.speed
bounty26.position.x += player.speed
bounty27.position.x += player.speed
bounty28.position.x += player.speed
bounty29.position.x += player.speed
bounty30.position.x += player.speed
bounty31.position.x += player.speed
bounty32.position.x += player.speed
bounty33.position.x += player.speed
bounty34.position.x += player.speed
bounty35.position.x += player.speed
bounty36.position.x += player.speed
bounty37.position.x += player.speed
bounty38.position.x += player.speed
bounty39.position.x += player.speed
bounty40.position.x += player.speed
bounty41.position.x += player.speed
bounty42.position.x += player.speed


            mushroomB1.position.x += player.speed
            mushroomB2.position.x += player.speed
            mushroomB3.position.x += player.speed
            mushroomB4.position.x += player.speed
            mushroomB5.position.x += player.speed
            mushroomB6.position.x += player.speed
            mushroomB7.position.x += player.speed
            mushroomB8.position.x += player.speed
            mushroomB9.position.x += player.speed
            mushroomB10.position.x += player.speed
            mushroomB11.position.x += player.speed
            mushroomB12.position.x += player.speed
            mushroomB13.position.x += player.speed
            mushroomB14.position.x += player.speed
            mushroomB15.position.x += player.speed
            mushroomB16.position.x += player.speed


            goomba01.position.x += player.speed
            goomba02.position.x += player.speed
            goomba03.position.x += player.speed
            goomba04.position.x += player.speed
            goomba05.position.x += player.speed
           

            mushroomR1.position.x += player.speed
            mushroomR2.position.x += player.speed
            mushroomR3.position.x += player.speed 


            waterfall.position.x += player.speed
            waterfall02.position.x += player.speed



plateformBigSteel.position.x += player.speed
plateformBigSteel02.position.x += player.speed
plateformBigSteel03.position.x += player.speed
plateformBigSteel04.position.x += player.speed


            // plateformes statiques
            platforms.forEach((createPlatform) => {
                createPlatform.position.x += player.speed
            })


            genericObjects.forEach((genericObject) => {
                genericObject.position.x += player.speed/5 
            })

            clouds.forEach((theCloud) => {
                theCloud.position.x += player.speed/50 
            })

            rocks.forEach((createRock) => {
                createRock.position.x += player.speed
            })


            trees.forEach((createTree) => {
                createTree.position.x += player.speed
            })


            crates.forEach((createCrate) => {
                createCrate.position.x += player.speed
            })


            signs.forEach((createSign) => {
                createSign.position.x += player.speed
            })


            houses.forEach((theHouse01) => {
                theHouse01.position.x += player.speed
            })


            leaves.forEach((theLeaves) => {
                theLeaves.position.x += player.speed
            })


            bushs.forEach((theBush) => {
                theBush.position.x += player.speed
            })


            fences.forEach((theFence) => {
                theFence.position.x += player.speed
            })

            barrels.forEach((theBarrel) => {
                theBarrel.position.x += player.speed
            })

            waters.forEach((water) => {
                water.position.x += player.speed
            })

            // le pont
            bridges.forEach((theBridgeLeft) => {
            theBridgeLeft.position.x += player.speed
            })

            // flag
           flags.forEach((flag) => {
           flag.position.x += player.speed
           });

            particulesBountys.forEach((particulesBounty) => {
                particulesBounty.position.x += player.speed
            })

        }

    }






    // To make the player jump on a platform
    platforms.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })
 
  // To make the player jump on a metal platform
 function moveOnPlatformBigS01() {
    if (
        player.position.y + player.height <= plateformBigSteel.position.y &&
        player.position.y + player.height + player.velocity.y >= plateformBigSteel.position.y &&
        player.position.x + player.width >= plateformBigSteel.position.x + 23 &&                         // right side
        player.position.x + player.width <= plateformBigSteel.position.x + plateformBigSteel.width + 35  // left side
    ) {
        player.velocity.y = 0
    }
    if (
        player.position.y + player.height <= plateformBigSteel02.position.y &&
        player.position.y + player.height + player.velocity.y >= plateformBigSteel02.position.y &&
        player.position.x + player.width >= plateformBigSteel02.position.x + 23 &&   // right side
        player.position.x + player.width <= plateformBigSteel02.position.x + plateformBigSteel02.width + 35   // left side
    ) {
        player.velocity.y = 0
    }
    if (
        player.position.y + player.height <= plateformBigSteel03.position.y &&
        player.position.y + player.height + player.velocity.y >= plateformBigSteel03.position.y &&
        player.position.x + player.width >= plateformBigSteel03.position.x + 23 &&  // right side
        player.position.x + player.width <= plateformBigSteel03.position.x + plateformBigSteel03.width + 35  // left side
    ) {
        player.velocity.y = 0
    }
    if (
        player.position.y + player.height <= plateformBigSteel04.position.y &&
        player.position.y + player.height + player.velocity.y >= plateformBigSteel04.position.y &&
        player.position.x + player.width >= plateformBigSteel04.position.x + 23 && // right side
        player.position.x + player.width <= plateformBigSteel04.position.x + plateformBigSteel04.width + 35  // left side
    ) {
        player.velocity.y = 0
    }
}


    
   
    rocks.forEach((rock) => {
        if (
            player.position.y + player.height >= rock.position.y + 20 &&
            player.position.y + player.height + player.velocity.y >= rock.position.y &&
            player.position.x + player.width >= rock.position.x + 20 &&  // right side
            player.position.x + player.width <= rock.position.x + rock.width + 35  // left side
        ) {
            player.velocity.y = 0
        }
    })
   
    rocks.forEach((rock) => {
        if (
            player.position.x + player.width + player.velocity.x <= rock.position.x + rock.width &&
            player.position.x + player.width + player.velocity.x >= rock.position.x + 27 &&
            player.position.y + player.height >= rock.position.y + 20 &&
            player.position.y + player.height + player.velocity.y >= rock.position.y
        ) {
            player.velocity.x = -10

        }
    })
   
    rocks.forEach((rock) => {
        if (
            player.position.x + player.width + player.velocity.x <= rock.position.x + rock.width + 23 &&
            player.position.x + player.width + player.velocity.x >= rock.position.x + rock.width &&
            player.position.y + player.height >= rock.position.y + 20 &&
            player.position.y + player.height + player.velocity.y >= rock.position.y
        ) {
            player.velocity.x = 10

        }
    })

rocks.forEach((thebigRock) => {
    if (
        player.position.y + player.height >= thebigRock.position.y + 20 &&
        player.position.y + player.height + player.velocity.y >= thebigRock.position.y &&
        player.position.x + player.width >= thebigRock.position.x + 20 && 
        player.position.x + player.width <= thebigRock.position.x + thebigRock.width + 35 
    ) {
    
        player.velocity.y = 0
    }
})


    crates.forEach((crate) => {
        if (
            player.position.y + player.height <= crate.position.y &&
            player.position.y + player.height + player.velocity.y >= crate.position.y &&
            player.position.x + player.width >= crate.position.x + 20 &&  
            player.position.x + player.width <= crate.position.x + crate.width + 35 
        ) {
            player.velocity.y = 0
        }
    })



 barrels.forEach((theBarrel) => {
    if (
        player.position.y + player.height <= theBarrel.position.y &&
        player.position.y + player.height + player.velocity.y >= theBarrel.position.y &&
        player.position.x + player.width >= theBarrel.position.x + 20 &&  
        player.position.x + player.width <= theBarrel.position.x + theBarrel.width + 35   
    ) {
        player.velocity.y = 0
    }
})


  // Pour faire sauter le joueur sur les parties du pont
  bridges.forEach((theBridgeLeft) => {
    if (
        player.position.y + player.height <= theBridgeLeft.position.y &&
        player.position.y + player.height + player.velocity.y >= theBridgeLeft.position.y &&
        player.position.x + player.width >= theBridgeLeft.position.x + 20 &&  
        player.position.x + player.width <= theBridgeLeft.position.x + theBridgeLeft.width + 35   
    ) {
        player.velocity.y = 0
    }
})

 // condition de victoire
flags.forEach((theFlag) => {
    if (
        player.position.y + player.height <= theFlag.position.y + 120 &&
        player.position.y + player.height + player.velocity.y >= theFlag.position.y &&
        player.position.x + player.width >= theFlag.position.x + 23 && 
        player.position.x + player.width <= theFlag.position.x + theFlag.width + 35 
    ) {
        blackScreen.style.display = "flex";
        winTag.style.display = "block";
        btnRestart.style.display = "block";
        player.speed = 0
        player.position.x = -50
        player.velocity.x = 0
        player.velocity.y = 0
        timerTag.innerText = "0";
    }
})



    //   -------------------------------------------------------




    // if the player exceeds the height limit of the canvas, he is propelled down
    if (player.position.y < canvas.height - 576) {
        player.velocity.y = +10
    }



    // if mario falls out of the canvas and he has life left, he is repositioned and loses 1 life point.
    if (player.position.y > canvas.height)  {

        player.position.x = (0)
        player.position.y = (0)
        player.currentSprite = player.sprites.stand.right
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
        vie -= 0; // 1
        lifeTag.innerText = "Vie : " + vie;
    }



        



//  if mario falls off the canvas and life is 0, the game is lost and resets.
function gameOver() {
    if(vie <= -1) { 
        blackScreen.style.display = "flex";
        loseTag.style.display = "block";
        winTag.style.display = "none";
        btnRestart.style.display = "block";
        player.speed = 0
        player.position.x = -50
        player.velocity.x = 0
        player.velocity.y = 0  
}


//  if the timer reaches zero, the game is lost and resets.
if(time === 0) {
    blackScreen.style.display = "flex";
    loseTag.style.display = "block";
    winTag.style.display = "none";
    btnRestart.style.display = "block";
    player.speed = 0
    player.position.x = -50
    player.velocity.x = 0
    player.velocity.y = 0
}
}
gameOver()




bounty1.update()
bounty2.update()
bounty3.update()
bounty4.update()
bounty5.update()
bounty6.update()
bounty7.update()
bounty8.update()
bounty9.update()
bounty10.update()
bounty11.update()
bounty12.update()
bounty13.update()
bounty14.update()
bounty15.update()
bounty16.update()
bounty17.update()
bounty18.update()
bounty19.update()
bounty20.update()
bounty21.update()
bounty22.update()
bounty23.update()
bounty24.update()
bounty25.update()
bounty26.update()
bounty27.update()
bounty28.update()
bounty29.update()
bounty30.update()
bounty31.update()
bounty32.update()
bounty33.update()
bounty34.update()
bounty35.update()
bounty36.update()
bounty37.update()
bounty38.update()
bounty39.update()
bounty40.update()
bounty41.update()
bounty42.update()


mushroomB1.update()
mushroomB2.update()
mushroomB3.update()
mushroomB4.update()
mushroomB5.update()
mushroomB6.update()
mushroomB7.update()
mushroomB8.update()
mushroomB9.update()
mushroomB10.update()
mushroomB11.update()
mushroomB12.update()
mushroomB13.update()
mushroomB14.update()
mushroomB15.update()
mushroomB16.update()


goomba01.update()
goomba02.update()
goomba03.update()
goomba04.update()
goomba05.update()


mushroomR1.update()
mushroomR2.update()
mushroomR3.update()


waterfall.update()
waterfall02.update()

plateformBigSteel.update()
plateformBigSteel02.update()
plateformBigSteel03.update()
plateformBigSteel04.update()


player.update()


collisionBounty1()
collisionBounty2()
collisionBounty3()
collisionBounty4()
collisionBounty5()
collisionBounty6()
collisionBounty7()
collisionBounty8() 
collisionBounty9()
collisionBounty10()
collisionBounty11()
collisionBounty12()
collisionBounty13()
collisionBounty14()
collisionBounty15()
collisionBounty16()
collisionBounty17()
collisionBounty18()
collisionBounty19()
collisionBounty20()
collisionBounty21()
collisionBounty22()
collisionBounty23()
collisionBounty24()
collisionBounty25()
collisionBounty26()
collisionBounty27()
collisionBounty28()
collisionBounty29()
collisionBounty30()
collisionBounty31()
collisionBounty32()
collisionBounty33()
collisionBounty34()
collisionBounty35()
collisionBounty36()
collisionBounty37()
collisionBounty38()
collisionBounty39()
collisionBounty40()
collisionBounty41()
collisionBounty42()

collisionWater()
    
 



//////////////////  COLLISIONS    ////////////////////////////////////

// MushroomB1
if (
    player.position.y + player.height <= mushroomB1.position.y + mushroomB1.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB1.position.y + 30  &&
    player.position.x + player.width >= mushroomB1.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB1.position.x + mushroomB1.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}


// MushroomB2
if (
    player.position.y + player.height <= mushroomB2.position.y + mushroomB2.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB2.position.y + 30  &&
    player.position.x + player.width >= mushroomB2.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB2.position.x + mushroomB2.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}


// MushroomB3
if (
    player.position.y + player.height <= mushroomB3.position.y + mushroomB3.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB3.position.y + 30  &&
    player.position.x + player.width >= mushroomB3.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB3.position.x + mushroomB3.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}


// MushroomB4
if (
    player.position.y + player.height <= mushroomB4.position.y + mushroomB4.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB4.position.y + 30  &&
    player.position.x + player.width >= mushroomB4.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB4.position.x + mushroomB4.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}


// MushroomB5
if (
    player.position.y + player.height <= mushroomB5.position.y + mushroomB5.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB5.position.y + 30  &&
    player.position.x + player.width >= mushroomB5.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB5.position.x + mushroomB5.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}

// MushroomB6
if (
    player.position.y + player.height <= mushroomB6.position.y + mushroomB6.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB6.position.y + 30  &&
    player.position.x + player.width >= mushroomB6.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB6.position.x + mushroomB6.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}

// MushroomB7
if (
    player.position.y + player.height <= mushroomB7.position.y + mushroomB7.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB7.position.y + 30  &&
    player.position.x + player.width >= mushroomB7.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB7.position.x + mushroomB7.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}



// MushroomB8
if (
    player.position.y + player.height <= mushroomB8.position.y + mushroomB8.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB8.position.y + 30  &&
    player.position.x + player.width >= mushroomB8.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB8.position.x + mushroomB8.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}


// MushroomB9
if (
    player.position.y + player.height <= mushroomB9.position.y + mushroomB9.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB9.position.y + 30  &&
    player.position.x + player.width >= mushroomB9.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB9.position.x + mushroomB9.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}



// MushroomB10
if (
    player.position.y + player.height <= mushroomB10.position.y + mushroomB10.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB10.position.y + 30  &&
    player.position.x + player.width >= mushroomB10.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB10.position.x + mushroomB10.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}


// MushroomB11
if (
    player.position.y + player.height <= mushroomB11.position.y + mushroomB11.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB11.position.y + 30  &&
    player.position.x + player.width >= mushroomB11.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB11.position.x + mushroomB11.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}

// MushroomB12
if (
    player.position.y + player.height <= mushroomB12.position.y + mushroomB12.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB12.position.y + 30  &&
    player.position.x + player.width >= mushroomB12.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB12.position.x + mushroomB12.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}

// MushroomB13
if (
    player.position.y + player.height <= mushroomB13.position.y + mushroomB13.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB13.position.y + 30  &&
    player.position.x + player.width >= mushroomB13.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB13.position.x + mushroomB13.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}

// MushroomB14
if (
    player.position.y + player.height <= mushroomB14.position.y + mushroomB14.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB14.position.y + 30  &&
    player.position.x + player.width >= mushroomB14.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB14.position.x + mushroomB14.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}

// MushroomB15
if (
    player.position.y + player.height <= mushroomB1.position.y + mushroomB1.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB1.position.y + 30  &&
    player.position.x + player.width >= mushroomB1.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB1.position.x + mushroomB1.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}

// MushroomB16
if (
    player.position.y + player.height <= mushroomB16.position.y + mushroomB16.width &&
    player.position.y + player.height + player.velocity.y >= mushroomB16.position.y + 30  &&
    player.position.x + player.width >= mushroomB16.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomB16.position.x + mushroomB16.width +25   // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = (300)
lifeLost()
}








// MushroomR1
    if (
            player.position.y + player.height <= mushroomR1.position.y + mushroomR1.width +25 &&
            player.position.y + player.height + player.velocity.y >= mushroomR1.position.y  &&
            player.position.x + player.width >= mushroomR1.position.x + 25  &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= mushroomR1.position.x + mushroomR1.width +25   // ajustement des bords coté droit 
    ) {
        DisepearMushroomR()
        adLife()
            // particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'white'
    }))
}
}


// MushroomR2
if (
    player.position.y + player.height <= mushroomR2.position.y + mushroomR2.width +25 &&
            player.position.y + player.height + player.velocity.y >= mushroomR2.position.y  &&
            player.position.x + player.width >= mushroomR2.position.x + 25  &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= mushroomR2.position.x + mushroomR2.width +25   // ajustement des bords coté droit 
) {
DisepearMushroomR2()
adLife()
    // particle effect
for(let i = 0; i < 22 ; i++) {
particules.push(new Particule({
position:{
    x: player.position.x + player.width/2, // /2
    y: player.position.y + player.height/2
},
velocity:{
    x: (Math.random()-0.5)*2,
    y:(Math.random()-0.5)*2
},
radius: Math.random()*2,
color:'white'
}))
}
}

// MushroomR3
if (
    player.position.y + player.height <= mushroomR3.position.y + mushroomR3.width +25 &&
    player.position.y + player.height + player.velocity.y >= mushroomR3.position.y  &&
    player.position.x + player.width >= mushroomR3.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= mushroomR3.position.x + mushroomR3.width +25   // ajustement des bords coté droit 
) {
DisepearMushroomR3()
adLife()
    // particle effect
for(let i = 0; i < 22 ; i++) {
particules.push(new Particule({
position:{
    x: player.position.x + player.width/2, // /2
    y: player.position.y + player.height/2
},
velocity:{
    x: (Math.random()-0.5)*2,
    y:(Math.random()-0.5)*2
},
radius: Math.random()*2,
color:'white'
}))
}
}



// goombas 01
if (
    player.position.y + player.height <= goomba01.position.y + goomba01.height   &&
    player.position.y + player.height + player.velocity.y >= goomba01.position.y + 35 &&
    player.position.x + player.width >= goomba01.position.x  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= goomba01.position.x + goomba01.width  + 50  // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = 300 
lifeLost()
}

// goombas 02
if (
    player.position.y + player.height <= goomba02.position.y + goomba02.height   &&
    player.position.y + player.height + player.velocity.y >= goomba02.position.y + 35 &&
    player.position.x + player.width >= goomba02.position.x  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= goomba02.position.x + goomba02.width  + 50  // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = 300 
lifeLost()
}

// goombas 03
if (
    player.position.y + player.height <= goomba03.position.y + goomba03.height   &&
    player.position.y + player.height + player.velocity.y >= goomba03.position.y + 35 &&
    player.position.x + player.width >= goomba03.position.x  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= goomba03.position.x + goomba03.width  + 50  // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = 300 
lifeLost()
}

// goombas 04
if (
    player.position.y + player.height <= goomba04.position.y + goomba04.height   &&
    player.position.y + player.height + player.velocity.y >= goomba04.position.y + 35 &&
    player.position.x + player.width >= goomba04.position.x  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= goomba04.position.x + goomba04.width  + 50  // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = 300 
lifeLost()
}

// goombas 05
if (
    player.position.y + player.height <= goomba05.position.y + goomba05.height   &&
    player.position.y + player.height + player.velocity.y >= goomba05.position.y + 35 &&
    player.position.x + player.width >= goomba05.position.x  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= goomba05.position.x + goomba05.width  + 50  // ajustement des bords coté droit 
) {
// particle effect
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositioning of mario and loss of a life
player.position.x = 300 
lifeLost()
}

DisepearSteelPlatform()
 
moveOnPlatformBigS01()  // To make the player jump on a metal platform

MooveGomba()  // to move all the goombas

}
animate()






// 30s loading screen with initialization

  let loading = setInterval(() => {
           // appearance of the opaque black mask with loading bar
           progScreen.style.display = "none";
           progBar.style.display = "block";
    
        const el = document.querySelector('.number');
        const elValue =  Number(el.getAttribute('data-value'));
           if (counter !== elValue) {
               counter++;
               el.innerHTML = `${counter}` + ` %`;
           }
           if( counter === 100) {
               init()
               vie = 1;
               lifeTag.innerText = "Vie : " + vie;
               time = 300;
               progScreen.style.display = "none";
               progBar.style.display = "none";
           }
}, 300);

setTimeout( function() {
clearInterval(loading)
}, 30000)





// COLLISION WATER
    function collisionWater() {
    waters.forEach((thewater02) => {
        if (
            player.position.y + player.height <= thewater02.position.y + thewater02.width + 30 &&
            player.position.y + player.height + player.velocity.y >= thewater02.position.y  &&
            player.position.x + player.width >= thewater02.position.x   &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= thewater02.position.x + thewater02.width +25   // ajustement des bords coté droit 
        ) {
            player.currentSprite = player.sprites.drown.right
            player.currentCropWidth = player.sprites.drown.cropWidth
            player.width = player.sprites.drown.width
            player.velocity.y = +10
        }
    })
}




///////////////  Disparition d'objet  ///////////////


function DisepearMushroomR() {
    mushroomR1.position.x = (-400)
    mushroomR1.position.y = (-400)
}


function DisepearMushroomR2() {
    mushroomR2.position.x = (-400)
    mushroomR2.position.y = (-400)
}
function DisepearMushroomR3() {
    mushroomR3.position.x = (-400)
    mushroomR3.position.y = (-400)
}


function DisepearBounty1() {
    bounty1.position.x = (-400)
    bounty1.position.y = (-400)
}

function DisepearBounty2() {
        bounty2.position.x = (-400)
        bounty2.position.y = (-400)
} 
function DisepearBounty3() {
    bounty3.position.x = (-400)
    bounty3.position.y = (-400)
}
function DisepearBounty4() {
    bounty4.position.x = (-400)
    bounty4.position.y = (-400)
}
function DisepearBounty5() {
    bounty5.position.x = (-400)
    bounty5.position.y = (-400)
}
function DisepearBounty6() {
    bounty6.position.x = (-400)
    bounty6.position.y = (-400)
}
function DisepearBounty7() {
    bounty7.position.x = (-400)
    bounty7.position.y = (-400)
}
function DisepearBounty8() {
    bounty8.position.x = (-400)
    bounty8.position.y = (-400)
}
function DisepearBounty9() {
    bounty9.position.x = (-400)
    bounty9.position.y = (-400)
}
function DisepearBounty10() {
    bounty10.position.x = (-400)
    bounty10.position.y = (-400)
}
function DisepearBounty11() {
    bounty11.position.x = (-400)
    bounty11.position.y = (-400)
}
function DisepearBounty12() {
    bounty12.position.x = (-400)
    bounty12.position.y = (-400)
}
function DisepearBounty13() {
    bounty13.position.x = (-400)
    bounty13.position.y = (-400)
}
function DisepearBounty14() {
    bounty14.position.x = (-400)
    bounty14.position.y = (-400)
}
function DisepearBounty15() {
    bounty15.position.x = (-400)
    bounty15.position.y = (-400)
}
function DisepearBounty16() {
    bounty16.position.x = (-400)
    bounty16.position.y = (-400)
}
function DisepearBounty17() {
    bounty17.position.x = (-400)
    bounty17.position.y = (-400)
}
function DisepearBounty18() {
    bounty18.position.x = (-400)
    bounty18.position.y = (-400)
}
function DisepearBounty19() {
    bounty19.position.x = (-400)
    bounty19.position.y = (-400)
}
function DisepearBounty20() {
    bounty20.position.x = (-400)
    bounty20.position.y = (-400)
}
function DisepearBounty21() {
    bounty21.position.x = (-400)
    bounty21.position.y = (-400)
}
function DisepearBounty22() {
    bounty22.position.x = (-400)
    bounty22.position.y = (-400)
}
function DisepearBounty23() {
    bounty23.position.x = (-400)
    bounty23.position.y = (-400)
}
function DisepearBounty24() {
    bounty24.position.x = (-400)
    bounty24.position.y = (-400)
}
function DisepearBounty25() {
    bounty25.position.x = (-400)
    bounty25.position.y = (-400)
}
function DisepearBounty26() {
    bounty26.position.x = (-400)
    bounty26.position.y = (-400)
}
function DisepearBounty27() {
    bounty27.position.x = (-400)
    bounty27.position.y = (-400)
}
function DisepearBounty28() {
    bounty28.position.x = (-400)
    bounty28.position.y = (-400)
}
function DisepearBounty29() {
    bounty29.position.x = (-400)
    bounty29.position.y = (-400)
}
function DisepearBounty30() {
    bounty30.position.x = (-400)
    bounty30.position.y = (-400)
}
function DisepearBounty31() {
    bounty31.position.x = (-400)
    bounty31.position.y = (-400)
}
function DisepearBounty32() {
    bounty32.position.x = (-400)
    bounty32.position.y = (-400)
}
function DisepearBounty33() {
    bounty33.position.x = (-400)
    bounty33.position.y = (-400)
}
function DisepearBounty34() {
    bounty34.position.x = (-400)
    bounty34.position.y = (-400)
}
function DisepearBounty35() {
    bounty35.position.x = (-400)
    bounty35.position.y = (-400)
}
function DisepearBounty36() {
    bounty36.position.x = (-400)
    bounty36.position.y = (-400)
}
function DisepearBounty37() {
    bounty37.position.x = (-400)
    bounty37.position.y = (-400)
}
function DisepearBounty38() {
    bounty38.position.x = (-400)
    bounty38.position.y = (-400)
}
function DisepearBounty39() {
    bounty39.position.x = (-400)
    bounty39.position.y = (-400)
}
function DisepearBounty40() {
    bounty40.position.x = (-400)
    bounty40.position.y = (-400)
}
function DisepearBounty41() {
    bounty41.position.x = (-400)
    bounty41.position.y = (-400)
}
function DisepearBounty42() {
    bounty42.position.x = (-400)
    bounty42.position.y = (-400)
}



// disappearance and reappearance of metal platforms. 
function DisepearSteelPlatform() {

if(scrollOffset > 14637)
counterDiseapearBigS++

if (counterDiseapearBigS >= 300) {
            counterDiseapearBigS = 0
        }
        // Big steel platform 01
        if( counterDiseapearBigS >= 150) { 
            plateformBigSteel.position.y = -400 
        } else{   
            plateformBigSteel.position.y = 400 
        }
         // Big steel platform 02
         if( counterDiseapearBigS >= 150) { 
            plateformBigSteel02.position.y = -400 
        } else{   
            plateformBigSteel02.position.y = 490 
        }
         // Big steel platform 03
         if( counterDiseapearBigS >= 150) { 
            plateformBigSteel03.position.y = -400 
        } else{   
            plateformBigSteel03.position.y = 315 
        }
  // Big steel platform 04
  if( counterDiseapearBigS >= 150) { 
    plateformBigSteel04.position.y = -400 
} else{   
    plateformBigSteel04.position.y = 470 
}
    }






///////////////////  SCORE   LIFE  &  TIMER   ////////////////////////


// score
scoreTag.innerText = "Score : 0";

//  life
lifeTag.innerText = "Vie : " + vie;


// timer
timerTag.innerText = time;

function diminuerTemps() {
    let minutes = parseInt(time / 60, 10)
    let secondes = parseInt(time % 60, 10)
    secondes = secondes < 10 ? "0" + secondes : secondes

      timerTag.innerText = minutes + " : " + secondes;

      time = time <= 0 ? 0 : time - 1
  }
  setInterval(diminuerTemps, 1000)





function lifeLost() {
        vie -= 1;
        lifeTag.innerText = "Vie : " + vie;
}

function adLife() {
    vie += 1;
    lifeTag.innerText = "Vie : " + vie;
}

function adStock() {
    stock += 7;
    scoreTag.innerText = "Score : " + stock
    
}




 









function collisionBounty1() {
    if (
        player.position.y + player.height <= bounty1.position.y + bounty1.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty1.position.y  &&
        player.position.x + player.width >= bounty1.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty1.position.x + bounty1.width +25   // ajustement des bords coté droit 
) {
    // particle effect
for(let i = 0; i < 50 ; i++) {
    particulesBountys.push(new ParticuleBounty({
        position:{
            x: player.position.x + player.width/2, 
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*4,
            y:(Math.random()-0.5)*4
        },
        radius: Math.random()*1,
        color:'yellow'
    }))
}

        DisepearBounty1()
        adStock()
    }
}



function collisionBounty2() {
    if (
        player.position.y + player.height <= bounty2.position.y + bounty2.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty2.position.y  &&
        player.position.x + player.width >= bounty2.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty2.position.x + bounty2.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
            DisepearBounty2()
            adStock()
        }
}
function collisionBounty3() {
    if (
        player.position.y + player.height <= bounty3.position.y + bounty3.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty3.position.y  &&
        player.position.x + player.width >= bounty3.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty3.position.x + bounty3.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
            DisepearBounty3()
            adStock()
        }

}
function collisionBounty4() {
    if (
        player.position.y + player.height <= bounty4.position.y + bounty4.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty4.position.y  &&
        player.position.x + player.width >= bounty4.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty4.position.x + bounty4.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
            DisepearBounty4()
            adStock()
        }

}
function collisionBounty5() {
    if (
        player.position.y + player.height <= bounty5.position.y + bounty5.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty5.position.y  &&
        player.position.x + player.width >= bounty5.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty5.position.x + bounty5.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
            DisepearBounty5()
            adStock()
        }

}
function collisionBounty6() {
    if (
        player.position.y + player.height <= bounty6.position.y + bounty6.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty6.position.y  &&
        player.position.x + player.width >= bounty6.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty6.position.x + bounty6.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty6()
        adStock()
    }

}
function collisionBounty7() {
    if (
        player.position.y + player.height <= bounty7.position.y + bounty7.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty7.position.y  &&
        player.position.x + player.width >= bounty7.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty7.position.x + bounty7.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty7()
        adStock()
    }

}
function collisionBounty8() {
    if (
        player.position.y + player.height <= bounty8.position.y + bounty8.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty8.position.y  &&
        player.position.x + player.width >= bounty8.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty8.position.x + bounty8.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty8()
        adStock()
    }

}
function collisionBounty9() {
    if (
        player.position.y + player.height <= bounty9.position.y + bounty9.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty9.position.y  &&
        player.position.x + player.width >= bounty9.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty9.position.x + bounty9.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty9()
        adStock()
    }

}
function collisionBounty10() {
    if (
        player.position.y + player.height <= bounty10.position.y + bounty10.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty10.position.y  &&
        player.position.x + player.width >= bounty10.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty10.position.x + bounty10.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty10()
        adStock()
    }

}
function collisionBounty11() {
    if (
        player.position.y + player.height <= bounty11.position.y + bounty11.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty11.position.y  &&
        player.position.x + player.width >= bounty11.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty11.position.x + bounty11.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty11()
        adStock()
    }

}
function collisionBounty12() {
    if (
        player.position.y + player.height <= bounty12.position.y + bounty12.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty12.position.y  &&
        player.position.x + player.width >= bounty12.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty12.position.x + bounty12.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty12()
        adStock()
    }

}
function collisionBounty13() {
    if (
        player.position.y + player.height <= bounty13.position.y + bounty13.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty13.position.y  &&
        player.position.x + player.width >= bounty13.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty13.position.x + bounty13.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty13()
        adStock()
    }

}
function collisionBounty14() {
    if (
        player.position.y + player.height <= bounty14.position.y + bounty14.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty14.position.y  &&
        player.position.x + player.width >= bounty14.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty14.position.x + bounty14.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty14()
        adStock()
    }

}
function collisionBounty15() {
    if (
        player.position.y + player.height <= bounty15.position.y + bounty15.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty15.position.y  &&
        player.position.x + player.width >= bounty15.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty15.position.x + bounty15.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty15()
        adStock()
    }

}
function collisionBounty16() {
    if (
        player.position.y + player.height <= bounty16.position.y + bounty16.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty16.position.y  &&
        player.position.x + player.width >= bounty16.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty16.position.x + bounty16.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty16()
        adStock()
    }

}
function collisionBounty17() {
    if (
        player.position.y + player.height <= bounty17.position.y + bounty17.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty17.position.y  &&
        player.position.x + player.width >= bounty17.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty17.position.x + bounty17.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty17()
        adStock()
    }

}
function collisionBounty18() {
    if (
        player.position.y + player.height <= bounty18.position.y + bounty18.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty18.position.y  &&
        player.position.x + player.width >= bounty18.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty18.position.x + bounty18.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty18()
        adStock()
    }

}
function collisionBounty19() {
    if (
        player.position.y + player.height <= bounty19.position.y + bounty19.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty19.position.y  &&
        player.position.x + player.width >= bounty19.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty19.position.x + bounty19.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty19()
        adStock()
    }
}
function collisionBounty20() {
        if (
            player.position.y + player.height <= bounty20.position.y + bounty20.width +25 &&
            player.position.y + player.height + player.velocity.y >= bounty20.position.y  &&
            player.position.x + player.width >= bounty20.position.x + 25  &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= bounty20.position.x + bounty20.width +25   // ajustement des bords coté droit 
    ) {
          // particle effect
          for(let i = 0; i < 50 ; i++) {
            particulesBountys.push(new ParticuleBounty({
                position:{
                    x: player.position.x + player.width/2, 
                    y: player.position.y + player.height/2
                },
                velocity:{
                    x: (Math.random()-0.5)*4,
                    y:(Math.random()-0.5)*4
                },
                radius: Math.random()*1,
                color:'yellow'
            }))
        }
            DisepearBounty20()
            adStock()
        }
    }
function collisionBounty21() {
            if (
                player.position.y + player.height <= bounty21.position.y + bounty21.width +25 &&
                player.position.y + player.height + player.velocity.y >= bounty21.position.y  &&
                player.position.x + player.width >= bounty21.position.x + 25  &&  // ajustement des bords coté gauche 
                player.position.x + player.width <= bounty21.position.x + bounty21.width +25   // ajustement des bords coté droit 
        ) {
              // particle effect
              for(let i = 0; i < 50 ; i++) {
                particulesBountys.push(new ParticuleBounty({
                    position:{
                        x: player.position.x + player.width/2, 
                        y: player.position.y + player.height/2
                    },
                    velocity:{
                        x: (Math.random()-0.5)*4,
                        y:(Math.random()-0.5)*4
                    },
                    radius: Math.random()*1,
                    color:'yellow'
                }))
            }
                DisepearBounty21()
                adStock()
            }
        
    }
    function collisionBounty22() {
        if (
            player.position.y + player.height <= bounty22.position.y + bounty22.width +25 &&
            player.position.y + player.height + player.velocity.y >= bounty22.position.y  &&
            player.position.x + player.width >= bounty22.position.x + 25  &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= bounty22.position.x + bounty22.width +25   // ajustement des bords coté droit 
    ) {
          // particle effect
          for(let i = 0; i < 50 ; i++) {
            particulesBountys.push(new ParticuleBounty({
                position:{
                    x: player.position.x + player.width/2, 
                    y: player.position.y + player.height/2
                },
                velocity:{
                    x: (Math.random()-0.5)*4,
                    y:(Math.random()-0.5)*4
                },
                radius: Math.random()*1,
                color:'yellow'
            }))
        }
            DisepearBounty22()
            adStock()
        }
    
}
function collisionBounty23() {
    if (
        player.position.y + player.height <= bounty23.position.y + bounty23.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty23.position.y  &&
        player.position.x + player.width >= bounty23.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty23.position.x + bounty23.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty23()
        adStock()
    }

}
function collisionBounty24() {
    if (
        player.position.y + player.height <= bounty24.position.y + bounty24.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty24.position.y  &&
        player.position.x + player.width >= bounty24.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty24.position.x + bounty24.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty24()
        adStock()
    }

}
function collisionBounty25() {
    if (
        player.position.y + player.height <= bounty25.position.y + bounty25.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty25.position.y  &&
        player.position.x + player.width >= bounty25.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty25.position.x + bounty25.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty25()
        adStock()
    }

}
function collisionBounty26() {
    if (
        player.position.y + player.height <= bounty26.position.y + bounty26.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty26.position.y  &&
        player.position.x + player.width >= bounty26.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty26.position.x + bounty26.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty26()
        adStock()
    }

}
function collisionBounty27() {
    if (
        player.position.y + player.height <= bounty27.position.y + bounty27.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty27.position.y  &&
        player.position.x + player.width >= bounty27.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty27.position.x + bounty27.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty27()
        adStock()
    }

}
function collisionBounty28() {
    if (
        player.position.y + player.height <= bounty28.position.y + bounty28.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty28.position.y  &&
        player.position.x + player.width >= bounty28.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty28.position.x + bounty28.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty28()
        adStock()
    }

}
function collisionBounty29() {
    if (
        player.position.y + player.height <= bounty29.position.y + bounty29.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty29.position.y  &&
        player.position.x + player.width >= bounty29.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty29.position.x + bounty29.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty29()
        adStock()
    }

}
function collisionBounty30() {
    if (
        player.position.y + player.height <= bounty30.position.y + bounty30.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty30.position.y  &&
        player.position.x + player.width >= bounty30.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty30.position.x + bounty30.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty30()
        adStock()
    }

}
function collisionBounty31() {
    if (
        player.position.y + player.height <= bounty31.position.y + bounty31.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty31.position.y  &&
        player.position.x + player.width >= bounty31.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty31.position.x + bounty31.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty31()
        adStock()
    }

}
function collisionBounty32() {
    if (
        player.position.y + player.height <= bounty32.position.y + bounty32.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty32.position.y  &&
        player.position.x + player.width >= bounty32.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty32.position.x + bounty32.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty32()
        adStock()
    }

}
function collisionBounty33() {
    if (
        player.position.y + player.height <= bounty33.position.y + bounty33.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty33.position.y  &&
        player.position.x + player.width >= bounty33.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty33.position.x + bounty33.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty33()
        adStock()
    }

}
function collisionBounty34() {
    if (
        player.position.y + player.height <= bounty34.position.y + bounty34.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty34.position.y  &&
        player.position.x + player.width >= bounty34.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty34.position.x + bounty34.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty34()
        adStock()
    }

}
function collisionBounty35() {
    if (
        player.position.y + player.height <= bounty35.position.y + bounty35.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty35.position.y  &&
        player.position.x + player.width >= bounty35.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty35.position.x + bounty35.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty35()
        adStock()
    }

}
function collisionBounty36() {
    if (
        player.position.y + player.height <= bounty36.position.y + bounty36.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty36.position.y  &&
        player.position.x + player.width >= bounty36.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty36.position.x + bounty36.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty36()
        adStock()
    }

}
function collisionBounty37() {
    if (
        player.position.y + player.height <= bounty37.position.y + bounty37.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty37.position.y  &&
        player.position.x + player.width >= bounty37.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty37.position.x + bounty37.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty37()
        adStock()
    }

}
function collisionBounty38() {
    if (
        player.position.y + player.height <= bounty38.position.y + bounty38.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty38.position.y  &&
        player.position.x + player.width >= bounty38.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty38.position.x + bounty38.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty38()
        adStock()
    }

}
function collisionBounty39() {
    if (
        player.position.y + player.height <= bounty39.position.y + bounty39.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty39.position.y  &&
        player.position.x + player.width >= bounty39.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty39.position.x + bounty39.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty39()
        adStock()
    }

}
function collisionBounty40() {
    if (
        player.position.y + player.height <= bounty40.position.y + bounty40.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty40.position.y  &&
        player.position.x + player.width >= bounty40.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty40.position.x + bounty40.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty40()
        adStock()
    }

}
function collisionBounty41() {
    if (
        player.position.y + player.height <= bounty41.position.y + bounty41.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty41.position.y  &&
        player.position.x + player.width >= bounty41.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty41.position.x + bounty41.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty41()
        adStock()
    }

}
function collisionBounty42() {
    if (
        player.position.y + player.height <= bounty42.position.y + bounty42.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty42.position.y  &&
        player.position.x + player.width >= bounty42.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty42.position.x + bounty42.width +25   // ajustement des bords coté droit 
) {
      // particle effect
      for(let i = 0; i < 50 ; i++) {
        particulesBountys.push(new ParticuleBounty({
            position:{
                x: player.position.x + player.width/2, 
                y: player.position.y + player.height/2
            },
            velocity:{
                x: (Math.random()-0.5)*4,
                y:(Math.random()-0.5)*4
            },
            radius: Math.random()*1,
            color:'yellow'
        }))
    }
        DisepearBounty42()
        adStock()
    }

}




// G O O M B A S

function MooveGomba(){
    compteurGoomba++

    goomba01.position.x -= player.speed/5
    goomba01.image.src = 'images/goombaSpriteLeft.png'
    
    goomba02.position.x -= player.speed/5
    goomba02.image.src = 'images/goombaSpriteLeft.png'
    
    goomba03.position.x -= player.speed/5
    goomba03.image.src = 'images/goombaSpriteLeft.png'

    goomba04.position.x -= player.speed/3
    goomba04.image.src = 'images/goombaSpriteLeft.png'

    goomba05.position.x -= player.speed/5
    goomba05.image.src = 'images/goombaSpriteLeft.png'
     
    if (compteurGoomba > 150) {

        goomba01.position.x += player.speed/2 - 0.7
        goomba01.image.src = 'images/goombaSpriteRight.png'
        
        goomba02.position.x += player.speed/2 - 0.7
        goomba02.image.src = 'images/goombaSpriteRight.png'
       
        goomba03.position.x += player.speed/2 - 0.7
        goomba03.image.src = 'images/goombaSpriteRight.png'

        goomba04.position.x += player.speed/1.508
        goomba04.image.src = 'images/goombaSpriteRight.png'

        goomba05.position.x += player.speed/2 - 0.7
        goomba05.image.src = 'images/goombaSpriteRight.png'
     } 
    }
    
    setInterval(() => {
        compteurGoomba = 0
        MooveGomba()
       }, 5000); 







// -----------------------------  k e y s  ----------------------------------







// Paramétrage des touches enfoncées
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            player.currentSprite = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        case 'ArrowUp':
            if(event.repeat) {
                return 
            }
            counterKeydown++
            if( counterKeydown === 1) {
                keys.ArrowUp.pressed = true;
                player.velocity.y -= 12
                setTimeout(() => {
                    counterKeydown = 0
                   }, 600); 
            }
            break
        case 'ArrowDown':

            break
            case ' ':
            break
            // -----------------------------------------------------------------
            case 'q':
                keys.q.pressed = true;
                player.currentSprite = player.sprites.run.left
                player.currentCropWidth = player.sprites.run.cropWidth
                player.width = player.sprites.run.width
                break
            case 'd':
                keys.d.pressed = true;
                player.currentSprite = player.sprites.run.right
                player.currentCropWidth = player.sprites.run.cropWidth
                player.width = player.sprites.run.width
                break
            case 'z':
                if(event.repeat) {
                    return 
                }
                counterKeydown++
                if( counterKeydown === 1) {
                    keys.ArrowUp.pressed = true;
                    player.velocity.y -= 12
                    setTimeout(() => {
                        counterKeydown = 0
                       }, 600); 
                    }
                break
            case 's':
    
                break
    }
})



// Paramétrage des touches relachées
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            player.currentSprite = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break

        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            break
        case 'ArrowDown':

            break
            // -----------------------------------------------------
            case 'q':
                keys.q.pressed = false;
                player.currentSprite = player.sprites.stand.left
                player.currentCropWidth = player.sprites.stand.cropWidth
                player.width = player.sprites.stand.width
                break
            case 'd':
                keys.d.pressed = false;
                player.currentSprite = player.sprites.stand.right
                player.currentCropWidth = player.sprites.stand.cropWidth
                player.width = player.sprites.stand.width
                break
    
            case 'z':
                keys.z.pressed = false;

                break
            case 's':
    
                break
    }
})

canvasParams.c.imageSmoothingEnabled = true
