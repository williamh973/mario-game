import { canvasParams } from "../../canvas.js";

function createFlag() {
    const createFlag = new Image()
    createFlag.src = "../../assets/images/flag.png"
    return createFlag
}

export let theFlag = createFlag("../../assets/images/flag.png")


export class Flag {
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
        //    canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

