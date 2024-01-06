import { canvasParams } from "../../canvas.js";

const gravity = 0.5

function createSpriteSRight() {
    const spriteStandRight = new Image()
    spriteStandRight.src = "../../images/SpriteStandRight.png"
    return spriteStandRight
}
let marioStandRight = createSpriteSRight("../../images/SpriteStandRight.png")

function createSpriteSLeft() {
    const spriteStandLeft = new Image()
    spriteStandLeft.src = "../../images/SpriteStandLeft.png"
    return spriteStandLeft
}
let marioStandLeft = createSpriteSRight("../../images/SpriteStandLeft.png")


function createSpriteRunRight() {
    const spriteRunRight = new Image()
    spriteRunRight.src = "../../images/SpriteRunRight.png"
    return spriteRunRight
}
let marioRunRight = createSpriteRunRight("../../images/SpriteRunRight.png")


function createSpriteRunLeft() {
    const spriteRunLeft = new Image()
    spriteRunLeft.src = "../../images/SpriteRunLeft.png"
    return spriteRunLeft
}
let marioRunLeft = createSpriteRunLeft("../../images/SpriteRunLeft.png")


function createSpriteDrown() {
    const marioDrowns = new Image()
    marioDrowns.src = "../../images/SpriteDrown.png"
    return marioDrowns
}
let marioDrowns = createSpriteDrown("../../images/SpriteDrown.png")



export class Player {
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
