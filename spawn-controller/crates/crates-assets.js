export function createCrate() {
    const crate = new Image()
    crate.src = "../../images/caisse.png"
    return crate
}

export function createCrateSmall() {
    const crateSmall = new Image()
    crateSmall.src = "../../images/crate_small.png"
    return crateSmall
}


export let theCrate = createCrate("../../images/caisse.png")
export let thecrateSmall = createCrateSmall("../../images/crate_small.png")
