import { canvasParams } from "../../../canvas.js";



export class Tree {
    constructor({ image, scale }) {
        this.position = {
            x : 0,
            y : 0
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        this.scale = scale
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

    placeTreeOnRandomPlatform494x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width / 2));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 110;
    }

    placeTreeOnRandomPlatform202x56(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width / 2));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 115;
    }
    
    placeTreeOnRandomPlatform500x43(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width - this.width / 1.2));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height;
    }


    
    // drawDebugCollisionSquare() {
    //     const ctx = canvasParams.c;
    //     ctx.beginPath();
    //     ctx.strokeStyle = 'red';
    //     ctx.lineWidth = 2;

    //     ctx.rect(
    //         this.position.x,
    //         this.position.y,
    //         this.width,
    //         this.height
    //     );

    //     ctx.stroke();
    //     ctx.closePath();
    // }
}