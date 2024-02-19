import { Player } from "./class/player/player.class.js";


export let player = new Player();
export let isPlayerCanMove = true;
export let isRightDirection = false;
export let isLeftDirection = false;

export let keys = {
    ArrowLeft : { pressed: false },
    ArrowRight : { pressed: false },
    ArrowUp :  { pressed: false },
    q : { pressed: false },
    d : { pressed: false },
    z : { pressed: false },
    space : { pressed: false }
};



let counterKeydown = 0;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            player.currentSprite = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        case 'ArrowUp':
            if(event.repeat) {
                return 
            }
            counterKeydown++
            if( counterKeydown === 1) {
                keys.ArrowUp.pressed = true;
                player.velocity.y -= 12
                setTimeout(() => {
                    counterKeydown = 0
                   }, 600); 
            }
            break
        case 'ArrowDown':

            break
            case ' ':
                keys.space.pressed = true;
                if(event.repeat) {
                    return 
                }
                player.shoot()
            break
            // -----------------------------------------------------------------
            case 'q':
                if (isPlayerCanMove) {   
                    keys.q.pressed = true;
                    isLeftDirection = true;
                    isRightDirection = false;
                    player.currentSprite = player.sprites.run.left
                    player.currentCropWidth = player.sprites.run.cropWidth
                    player.width = player.sprites.run.width
                }
                break
            case 'd':
                if (isPlayerCanMove) {
                    keys.d.pressed = true;
                    isLeftDirection = false;
                    isRightDirection = true;
                    player.currentSprite = player.sprites.run.right
                    player.currentCropWidth = player.sprites.run.cropWidth
                    player.width = player.sprites.run.width                   
                }
                break
            case 'z':
                keys.z.pressed = true;

                if(event.repeat) {
                    return 
                }

                counterKeydown++

                if( counterKeydown === 1) {
                    keys.z.pressed = true;
                    player.velocity.y -= 12
                    setTimeout(() => {
                        counterKeydown = 0
                       }, 600); 
                    }
                    
                break
            case 's':
    
                break
    }
})



// Paramétrage des touches relachées
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            player.currentSprite = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break

        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            break
        case 'ArrowDown':

            break
            case ' ':
                keys.space.pressed = false;
            break
            // -----------------------------------------------------
            case 'q':
                keys.q.pressed = false;
                player.currentSprite = player.sprites.stand.left
                player.currentCropWidth = player.sprites.stand.cropWidth
                player.width = player.sprites.stand.width
                break
            case 'd':
                keys.d.pressed = false;
                player.currentSprite = player.sprites.stand.right
                player.currentCropWidth = player.sprites.stand.cropWidth
                player.width = player.sprites.stand.width
                break
    
            case 'z':
                keys.z.pressed = false;
                break
            case 's':
    
                break
    }
})
