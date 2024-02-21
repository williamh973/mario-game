

function createBush() {
    const bush = new Image()
    bush.src = "../../assets/images/bush120x100.png"
    return bush
}
function createBush02() {
    const bush02 = new Image()
    bush02.src = "../../assets/images/bush100x122.png"
    return bush02
}


export let theBush = createBush("../../assets/images/bush120x100.png")
export let theBush02 = createBush02("../../assets/images/bush100x122.png")