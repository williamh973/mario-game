import { canvasParams } from "../../canvas.js";


function createFence() {
    const fence = new Image()
    fence.src = "../../images/fence-wood.png"
    return fence
}


export let theFence = createFence("../../images/fence-wood.png")



export class Fence {
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