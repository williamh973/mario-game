import { player } from "../../../keyboard.js"
import { platformList150x72, platformList202x56, platformList494x72, platformList84x72 } from "./platform-adjustment.js"



export function platformCollide() {
    platformList494x72.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })
    
    platformList202x56.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })
    
    platformList84x72.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })
    
    platformList150x72.forEach((createPlatform) => {
        if (
            player.position.y + player.height <= createPlatform.position.y &&
            player.position.y + player.height + player.velocity.y >= createPlatform.position.y &&
            player.position.x + player.width >= createPlatform.position.x + 23 && 
            player.position.x + player.width <= createPlatform.position.x + createPlatform.width + 35
            ) {
            player.velocity.y = 0
        }
    })
}