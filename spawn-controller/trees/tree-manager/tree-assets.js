
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
