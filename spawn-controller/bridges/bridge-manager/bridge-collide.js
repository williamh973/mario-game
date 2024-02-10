import { player } from "../../../keyboard.js"
import { bridgeList } from "./bridge-place.js"


export function bridgeCollide() {
    bridgeList.forEach((bridge) => {
        if (
            player.position.y + player.height <= bridge.position.y &&
            player.position.y + player.height + player.velocity.y >= bridge.position.y &&
            player.position.x + player.width >= bridge.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= bridge.position.x + bridge.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })

}