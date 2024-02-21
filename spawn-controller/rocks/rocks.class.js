import { canvasParams } from "../../canvas.js";


function createRock() {
    const rock = new Image()
    rock.src = "../../images/rock01.png"
    return rock
}
function createRock02() {
    const rock02 = new Image()
    rock02.src = "../../images/rock02.png"
    return rock02
}

function createRock03() {
    const bigRock = new Image()
    bigRock.src = "../../images/rock03.png"
    return bigRock
}
function createRock03() {
    const rock04 = new Image()
    rock04.src = "../../images/rock04.png"
    return rock04
}
function createRock04() {
    const rock05 = new Image()
    rock05.src = "../../images/rock05.png"
    return rock05
}


export let theRock = createRock("../../images/rock01.png")
export let theRock02 = createRock02("../../images/rock02.png")
export let thebigRock = createRock03("../../images/rock03.png")
export let theRock03 = createRock03("../../images/rock04.png")
export let theRock04 = createRock04("../../images/rock05.png")



export class Rock {
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
