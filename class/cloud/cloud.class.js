import { canvasParams } from "../../canvas.js";


function createClouds() {
    const cloud = new Image()
    cloud.src = "../../images/clouds.png"
    return cloud
}
export let theCloud = createClouds("../../images/clouds.png");


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
