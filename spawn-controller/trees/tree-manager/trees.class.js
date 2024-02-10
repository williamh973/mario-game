import { canvasParams } from "../../../canvas.js";


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
    constructor({ image, scale }) {
        this.position = {
            x : 0,
            y : 0
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        this.scale = scale
    }
    draw() {
        canvasParams.c.drawImage(
            this.image, 
            this.position.x,  
            this.position.y,
            this.image.width * this.scale,
            this.image.height * this.scale
            )
    }
    overlapsWith(otherObject) {
        return (
            this.position.x < otherObject.position.x + otherObject.width &&
            this.position.x + this.width > otherObject.position.x &&
            this.position.y < otherObject.position.y + otherObject.height &&
            this.position.y + this.height > otherObject.position.y
        );
     }
    placeTreeOnRandomPlatform494x72(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width / 2));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 110;
    }
    placeTreeOnRandomPlatform202x56(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width / 2));
    
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - this.height + 115;
    }
}