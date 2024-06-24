function createLittleCloud() {
  const cloud = new Image();
  cloud.src = "../../assets/images/cloud.png";
  return cloud;
}
export let theLittleCloud = createLittleCloud("../../assets/images/cloud.png");

function createBigCloud() {
  const cloud = new Image();
  cloud.src = "../../assets/images/multi-clouds.png";
  return cloud;
}
export let theBigCloud = createBigCloud("../../assets/images/multi-clouds.png");
