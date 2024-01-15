import { canvasParams } from "../../canvas.js";


function createSign() {
    const Sign = new Image()
    Sign.src = "../../images/sign.png"
    return Sign
}

export let theSign = createSign("../../images/sign.png")


export class Sign {
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
