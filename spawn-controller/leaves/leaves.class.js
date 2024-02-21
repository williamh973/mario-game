import { canvasParams } from "../../canvas.js";


function createLeaves01() {
    const leaves01 = new Image()
    leaves01.src = "../../assets/images/green-leavesSmall.png"
    return leaves01
}
function createLeaves02() {
    const leaves02 = new Image()
    leaves02.src = "../../assets/images/green-leavesSmallRight.png"
    return leaves02
}


export let theLeaves = createLeaves01("../../assets/images/green-leavesSmall.png")
export let theLeavesRight = createLeaves02("../../assets/images/green-leavesSmallRight.png")


export class Leave {
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
