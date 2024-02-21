import { gravity } from "../../app.js";
import { canvasParams } from "../../canvas.js";
import { spawnBomb } from "../bomb/bomb-spawn.js";
import { createSpriteDrown, createSpriteJumpLeft, createSpriteJumpRight, createSpriteRunLeft, createSpriteRunRight, createSpriteSLeft, createSpriteSRight, marioDrowns, marioJumpLeft, marioJumpRight, marioRunLeft, marioRunRight, marioStandLeft, marioStandRight } from "./player-assets.js";



export class Player {
    constructor() {
        this.speed = 7  
        this.position = {  
            x: 30, 
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
        this.scale = 1
        this.isCanMove = true;
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
            this.width * this.scale,
            this.height * this.scale
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

    shoot() {
        spawnBomb();
    }
    
    isBlocked() {
        this.isCanMove = false;
        this.speed = 0
    }

    drawDebugCollisionSquare() {
        const ctx = canvasParams.c;
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;

        ctx.rect(
            this.position.x,
            this.position.y,
            this.width * this.scale,
            this.height * this.scale
        );

        ctx.stroke();
        ctx.closePath();
    }
}
