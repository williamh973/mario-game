import { canvasParams } from "../../canvas.js";
import { createFence, theFence } from "./fences-assets.js";


export class Fence {
    constructor() {
        this.position = {
            x : 0,
            y : 0
        }
        this.image = createFence(theFence)
        this.width = 125
        this.height = 41
        this.scale = 0.7
        this.onPlatform = null
    }
    draw() {
        canvasParams.c.drawImage(
            this.image,
            this.position.x, 
            this.position.y,
            this.image.width * this.scale,
            this.image.height * this.scale
            )
    }

    overlapsWith(otherObject) {
        return (
            this.position.x < otherObject.position.x + otherObject.width &&
            this.position.x + this.width > otherObject.position.x &&
            this.position.y < otherObject.position.y + otherObject.height &&
            this.position.y + this.height > otherObject.position.y
        );
     }
     
    placeFenceOnRandomPlatformList500x43(referencePlatform) {
       let randomFactorX = Math.random(); 
       let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width - this.width / 1.2));
       
       this.position.x = referencePlatform.position.x + randomNumberX;
       this.position.y = referencePlatform.position.y - this.height + 3;
    }
        
    placeFenceAwayFromOtherFence(otherObject) {
       let randomFactorX = Math.random(); 
       let randomNumberX = Math.floor(randomFactorX * (100) + otherObject.width);
    
       this.position.x = otherObject.position.x + randomNumberX;
    }

    drawDebugCollisionSquare() {
        const ctx = canvasParams.c;
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;

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