import { player } from "../../keyboard.js";
import { goomba01, goomba02, goomba03, goomba04, goomba05 } from "../../class/gombas/gombas.class.js";

export let compteurGoomba = 0

export function mooveGomba(){
    compteurGoomba++

    goomba01.position.x -= player.speed/5
    goomba01.image.src = '../../images/goombaSpriteLeft.png'
    
    goomba02.position.x -= player.speed/5
    goomba02.image.src = '../../images/goombaSpriteLeft.png'
    
    goomba03.position.x -= player.speed/5
    goomba03.image.src = '../../images/goombaSpriteLeft.png'

    goomba04.position.x -= player.speed/3
    goomba04.image.src = '../../images/goombaSpriteLeft.png'

    goomba05.position.x -= player.speed/5
    goomba05.image.src = '../../images/goombaSpriteLeft.png'
     
    if (compteurGoomba > 150) {

        goomba01.position.x += player.speed/2 - 0.7
        goomba01.image.src = '../../images/goombaSpriteRight.png'
        
        goomba02.position.x += player.speed/2 - 0.7
        goomba02.image.src = '../../images/goombaSpriteRight.png'
       
        goomba03.position.x += player.speed/2 - 0.7
        goomba03.image.src = '../../images/goombaSpriteRight.png'

        goomba04.position.x += player.speed/1.508
        goomba04.image.src = '../../images/goombaSpriteRight.png'

        goomba05.position.x += player.speed/2 - 0.7
        goomba05.image.src = '../../images/goombaSpriteRight.png'
     } 
    }


    setInterval(() => {
        compteurGoomba = 0
        mooveGomba()
       }, 5000); 