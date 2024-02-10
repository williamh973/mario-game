import { canvasParams } from "../../../canvas.js";


function createBush() {
    const bush = new Image()
    bush.src = "../../images/buisson01.png"
    return bush
}
function createBush02() {
    const bush02 = new Image()
    bush02.src = "../../images/buisson02.png"
    return bush02
}


export let theBush = createBush("../../images/buisson01.png")
export let theBush02 = createBush02("../../images/buisson02.png")


export class Bush {
    constructor({ image }) {
        this.position = {
            x : 0,
            y : 0
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        this.scale = 0.45
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
     placeBushAwayFromOtherBush(otherObject) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (50) + 20);
     
        this.position.x = otherObject.position.x + randomNumberX;
    }
    placeBushOnRandomPlatform494x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width / 1.5));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 57;
    }
    placeBushOnRandomPlatform202x56(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (50));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 57;
    }
}
