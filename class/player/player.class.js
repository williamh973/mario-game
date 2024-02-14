import { gravity } from "../../app.js";
import { canvasParams } from "../../canvas.js";



function createSpriteSRight() {
    const spriteStandRight = new Image()
    spriteStandRight.src = "../../images/marioSpriteStandRight.png"
    return spriteStandRight
}
let marioStandRight = createSpriteSRight("../../images/marioSpriteStandRight.png")

function createSpriteSLeft() {
    const spriteStandLeft = new Image()
    spriteStandLeft.src = "../../images/marioSpriteStandLeft.png"
    return spriteStandLeft
}
let marioStandLeft = createSpriteSRight("../../images/marioSpriteStandLeft.png")


function createSpriteRunRight() {
    const spriteRunRight = new Image()
    spriteRunRight.src = "../../images/marioSpriteRunRight.png"
    return spriteRunRight
}
let marioRunRight = createSpriteRunRight("../../images/marioSpriteRunRight.png")


function createSpriteRunLeft() {
    const spriteRunLeft = new Image()
    spriteRunLeft.src = "../../images/marioSpriteRunLeft.png"
    return spriteRunLeft
}
let marioRunLeft = createSpriteRunLeft("../../images/marioSpriteRunLeft.png")


function createSpriteDrown() {
    const marioDrowns = new Image()
    marioDrowns.src = "../../images/SpriteDrown.png"
    return marioDrowns
}
let marioDrowns = createSpriteDrown("../../images/SpriteDrown.png")


function createSpriteJumpRight() {
    const marioJumpRight = new Image()
    marioJumpRight.src = "../../images/SpriteJumpRight.png"
    return marioJumpRight
}
let marioJumpRight = createSpriteJumpRight("../../images/SpriteJumpRight.png")


function createSpriteJumpLeft() {
    const marioJumpLeft = new Image()
    marioJumpRight.src = "../../images/SpriteJumpLeft.png"
    return marioJumpLeft
}
let marioJumpLeft = createSpriteJumpLeft("../../images/SpriteJumpRight.png")


 
export class Player {
    constructor() {
        this.speed = 7  
        this.position = {  
            x: 380, 
            y: 100 
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
            jump: {
                right : createSpriteJumpRight(marioJumpRight),
                left : createSpriteJumpLeft(marioJumpLeft),
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
            -3,
            this.currentCropWidth,
            38,
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
    
    drawDebugCollisionSquare() {
        const ctx = canvasParams.c;
        ctx.beginPath();
        ctx.strokeStyle = 'red';
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
}
