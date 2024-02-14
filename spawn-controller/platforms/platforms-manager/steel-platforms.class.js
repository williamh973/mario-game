import { canvasParams } from "../../../canvas.js";



function createPlateformBigSteel() {
    const plateformBigS = new Image()
    plateformBigS.src = "../../images/plateform-steel01.png"
    return plateformBigS
}


function createPlateformLittleSteel() {
    const plateformLittleS = new Image()
    plateformLittleS.src = "../../images/plateform-steel02.png"
    return plateformLittleS
}



export let plateformLittleS = createPlateformLittleSteel("../../images/plateform-steel02.png")
export let plateformBigS = createPlateformBigSteel("../../images/plateform-steel01.png")




export class SteelPlatform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x : 0,
            y : 0
        }

        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            )
    }
    overlapsWith(otherPlatform) {
        return (
            this.position.x < otherPlatform.position.x + otherPlatform.width &&
            this.position.x + this.width > otherPlatform.position.x &&
            this.position.y < otherPlatform.position.y + otherPlatform.height &&
            this.position.y + this.height > otherPlatform.position.y
        );
     }
     placePlatform494x72AwayFromPlatform494x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (100)) + 100;

        let randomFactorY = Math.random(); 
        let randomNumberY = Math.floor(randomFactorY * (76)) + 100;
        
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y + randomNumberY;
  }

}
