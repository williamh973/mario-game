export function createHouse01() {
    const House = new Image()
    House.src = "../../images/maison_jaune.png"
    return House
}
export function brownHouse() {
    const House02 = new Image()
    House02.src = "../../images/maison_marron.png"
    return House02
}
export function createHouse03() {
    const House03 = new Image()
    House03.src = "../../images/maison3.png"
    return House03
}


export let theHouse01 = createHouse01("../../images/maison_jaune.png")
export let theHouse02 = brownHouse("../../images/maison_marron.png")
export let theHouse03 = createHouse03("../../images/maison3.png")
