export function createHouse01() {
    const house = new Image()
    house.src = "../../assets/images/house-yellow.png"
    return house
}
export function brownHouse() {
    const house = new Image()
    house.src = "../../assets/images/house-brown.png"
    return house
}
export function createHouse03() {
    const house = new Image()
    house.src = "../../assets/images/house-green.png"
    return house
}


export let theHouse01 = createHouse01("../../assets/images/house-yellow.png")
export let theHouse02 = brownHouse("../../assets/images/house-brown.png")
export let theHouse03 = createHouse03("../../assets/images/house-green.png")
