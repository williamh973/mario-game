import { canvasParams } from "../../canvas.js";


function createBridgeLeft() {
    const bridgeLeft = new Image()
   bridgeLeft.src = "../../images/bridge-left.png"
    return bridgeLeft
}
function createBridgeRight() {
    const bridgeRight = new Image()
   bridgeRight.src = "../../images/bridge-right.png"
    return bridgeRight
}


export let theBridgeLeft = createBridgeLeft("../../images/bridge-left.png")
export let theBridgeRight = createBridgeRight("../../images/bridge-right.png")


export class Bridge {
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