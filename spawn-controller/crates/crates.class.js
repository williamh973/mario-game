import { canvasParams } from "../../canvas.js";
import { createCrateSmall, thecrateSmall } from "./crates-assets.js";


export class Crate {
    constructor() {
        this.position = {
            x : 0,
            y : 0
        }
        this.image = createCrateSmall(thecrateSmall)
        this.width = 70
        this.height = 70
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y)
    }
}