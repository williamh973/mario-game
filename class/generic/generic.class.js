import { canvasParams } from "../../canvas.js";

function createSky() {
    const sky = new Image()
    sky.src = "../../images/sky.png"
    return sky
}

function createHills() {
    const hills = new Image()
    hills.src = "../../images/mountains.png"
    return hills
}


export let theSky = createSky("../../images/sky.png")
export let theHills = createHills("../../images/mountains.png")


export class GenericObject {
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
