import { canvasParams } from "../../canvas.js";


function createPlateformGreen() {
    const plateformGreen = new Image()
    plateformGreen.src = "../../images/plateform-green.png"
    return plateformGreen
}

function createPlateformGreenSmall() {
    const plateformGreenS = new Image()
    plateformGreenS.src = "../../images/plateform-green02.png"
    return plateformGreenS
}

export let theplateformGreen = createPlateformGreen("../../images/plateform-green.png")
export let theplateformGreenSmall = createPlateformGreenSmall("../../images/plateform-green02.png")



export class Platform {
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
        canvasParams.c.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            )
    }
}