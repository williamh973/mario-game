import { canvasParams } from "../../../canvas.js";


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
    constructor({ image }) {
        this.position = {
            x : 0,
            y : 0
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
    overlapsWith(platform) {
        return (
            this.position.x < platform.position.x + platform.width &&
            this.position.x + this.width > platform.position.x &&
            this.position.y < platform.position.y + platform.height &&
            this.position.y + this.height > platform.position.y
        );
    }
    placeBridgeOnPlatform630x217(platform) {
        this.position.x = platform.position.x + platform.width / 3.3;
        this.position.y = platform.position.y - this.height + 5;
      }
    placeBridgeAwayFromOtherBridge(otherObject) {
      this.position.x = otherObject.position.x + this.width * 2.1;
    }
}