import { canvasParams } from "../../canvas.js";


function createCrate() {
    const crate = new Image()
    crate.src = "../../images/caisse.png"
    return crate
}

function createCrateSmall() {
    const crateSmall = new Image()
    crateSmall.src = "../../images/crate_small.png"
    return crateSmall
}


export let theCrate = createCrate("../../images/caisse.png")
export let thecrateSmall = createCrateSmall("../../images/crate_small.png")


export class Crate {
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