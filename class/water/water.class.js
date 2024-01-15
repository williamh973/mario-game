import { canvasParams } from "../../canvas.js";



function createWater01() {
    const water01 = new Image()
    water01.src = "../../images/water01.png"
    return water01
}

function createWater02() {
    const water02 = new Image()
    water02.src = "../../images/water02.png"
    return water02
}

export let theWater = createWater01("../../images/water01.png")
export let theWater02 = createWater01("../../images/water02.png")


export class Water {
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
