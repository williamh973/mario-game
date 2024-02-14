
function createLittleCloud() {
    const cloud = new Image()
    cloud.src = "../../images/cloud.png"
    return cloud
}
export let theLittleCloud = createLittleCloud("../../images/cloud.png");


function createBigCloud() {
    const cloud = new Image()
    cloud.src = "../../images/multi-clouds.png"
    return cloud
}
export let theBigCloud = createBigCloud("../../images/multi-clouds.png");
