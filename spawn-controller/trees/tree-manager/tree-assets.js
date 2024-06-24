function createTree() {
  const basicTree = new Image();
  basicTree.src = "../../assets/images/basicTree.png";
  return basicTree;
}
function createBigtree() {
  const bigTree = new Image();
  bigTree.src = "../../assets/images/bigTree.png";
  return bigTree;
}
function createMiniTree() {
  const miniTree = new Image();
  miniTree.src = "../../assets/images/miniTree.png";
  return miniTree;
}

export let theBasicTree = createTree("../../assets/images/basicTree.png");
export let thebigTree = createBigtree("../../assets/images/bigTree.png");
export let theMiniTree = createMiniTree("../../assets/images/miniTree.png");
