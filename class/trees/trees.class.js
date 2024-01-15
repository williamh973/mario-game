import { canvasParams } from "../../canvas.js";


function createTree() {
    const tree = new Image()
    tree.src = "../../images/arbre01.png"
    return tree
}
function createBigtree() {
    const bigTree = new Image()
    bigTree.src = "../../images/arbre02.png"
    return bigTree
}
function createMiniTree() {
    const miniTree = new Image()
    miniTree.src = "../../images/arbre03.png"
    return miniTree
}


export let theTree = createTree("../../images/arbre01.png")
export let thebigTree = createBigtree("../../images/arbre02.png")
export let theMiniTree = createMiniTree("../../images/arbre03.png")


export class Tree {
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