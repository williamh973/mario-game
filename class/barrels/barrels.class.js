import { canvasParams } from "../../canvas.js";


function createBarrel() {
    const Barrel = new Image()
    Barrel.src = "../../images/Barrel.png"
    return Barrel
}
function createBarrel02() {
    const Barrel02 = new Image()
    Barrel02.src = "../../images/Barrel02.png"
    return Barrel02
}


export let theBarrel = createBarrel("../../images/Barrel.png")
export let theBarrel02 = createBarrel02("../../images/Barrel02.png")



export class Barrel {
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
