import { canvasParams } from "../../canvas.js";


function createHouse01() {
    const House = new Image()
    House.src = "../../images/maison_jaune.png"
    return House
}
function createHouse02() {
    const House02 = new Image()
    House02.src = "../../images/maison_marron.png"
    return House02
}
function createHouse03() {
    const House03 = new Image()
    House03.src = "../../images/maison3.png"
    return House03
}


export let theHouse01 = createHouse01("../../images/maison_jaune.png")
export let theHouse02 = createHouse02("../../images/maison_marron.png")
export let theHouse03 = createHouse03("../../images/maison3.png")


export class House {
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
