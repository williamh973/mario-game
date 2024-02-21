export function createBridgeLeft() {
    const bridgeLeft = new Image()
   bridgeLeft.src = "../../assets/images/bridge-left.png"
    return bridgeLeft
}

export function createBridgeRight() {
    const bridgeRight = new Image()
   bridgeRight.src = "../../assets/images/bridge-right.png"
    return bridgeRight
}


export let theBridgeLeft = createBridgeLeft("../../assets/images/bridge-left.png")
export let theBridgeRight = createBridgeRight("../../assets/images/bridge-right.png")
