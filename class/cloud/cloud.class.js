import { canvasParams } from "../../canvas.js";


function createLittleCloud() {
    const cloud = new Image()
    cloud.src = "../../images/cloud.png"
    return cloud
}
export let theLittleCloud = createLittleCloud("../../images/cloud.png");


function createBigCloud() {
    const cloud = new Image()
    cloud.src = "../../images/multi-clouds.png"
    return cloud
}
export let theBigCloud = createBigCloud("../../images/multi-clouds.png");


export class Cloud {
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
};
