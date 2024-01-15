import { canvasParams } from "../../canvas.js";


function createBush() {
    const bush = new Image()
    bush.src = "../../images/buisson01.png"
    return bush
}
function createBush02() {
    const bush02 = new Image()
    bush02.src = "../../images/buisson02.png"
    return bush02
}


export let theBush = createBush("../../images/buisson01.png")
export let theBush02 = createBush02("../../images/buisson02.png")


export class Bush {
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
