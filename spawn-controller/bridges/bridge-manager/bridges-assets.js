export function createBridgeLeft() {
    const bridgeLeft = new Image()
   bridgeLeft.src = "../../images/bridge-left.png"
    return bridgeLeft
}

export function createBridgeRight() {
    const bridgeRight = new Image()
   bridgeRight.src = "../../images/bridge-right.png"
    return bridgeRight
}


export let theBridgeLeft = createBridgeLeft("../../images/bridge-left.png")
export let theBridgeRight = createBridgeRight("../../images/bridge-right.png")
