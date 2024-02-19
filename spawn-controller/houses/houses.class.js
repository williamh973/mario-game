import { canvasParams } from "../../canvas.js";


export class House {
    constructor({ image }) {
        this.position = {
            x : 0,
            y : 0
        }
        this.scale = 0.8
        this.image = image
        this.width = image.width
        this.height = image.height
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
    
    placeHouseOnRandomPlatform494x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (100) + 20);
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 38;
    }
    
    placeHouseOnRandomPlatform500x43(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width - this.width - 20) + 20);
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 38;
    }

    overlapsWith(otherObject) {
        return (
            this.position.x < otherObject.position.x + otherObject.width &&
            this.position.x + this.width > otherObject.position.x &&
            this.position.y < otherObject.position.y + otherObject.height &&
            this.position.y + this.height > otherObject.position.y
        );
     }

     placeHouseOnOtherRandomPlatform(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (100) + 20);
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 57;
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
