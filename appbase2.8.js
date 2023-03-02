
// Les Constentes du canvas
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

// console.log();


// Dimension du canvas
canvas.width = 1024
canvas.height = 576

// Constente pour l'effet de gravité
const gravity = 0.5




// Les sprites du player 1
function createSpriteSRight(imageSrc) {
    const spriteStandRight = new Image()
    spriteStandRight.src = "./images/SpriteStandRight.png"
    return spriteStandRight
}

let marioStandRight = createSpriteSRight("./images/SpriteStandRight.png")

function createSpriteSLeft(imageSrc) {
    const spriteStandLeft = new Image()
    spriteStandLeft.src = "./images/SpriteStandLeft.png"
    return spriteStandLeft
}

let marioStandLeft = createSpriteSRight("./images/SpriteStandLeft.png")


function createSpriteRunRight(imageSrc) {
    const spriteRunRight = new Image()
    spriteRunRight.src = "./images/SpriteRunRight.png"
    return spriteRunRight
}

let marioRunRight = createSpriteRunRight("./images/SpriteRunRight.png")


function createSpriteRunLeft(imageSrc) {
    const spriteRunLeft = new Image()
    spriteRunLeft.src = "./images/SpriteRunLeft.png"
    return spriteRunLeft
}

let marioRunLeft = createSpriteRunLeft("./images/SpriteRunLeft.png")



// Le sprite du champi Bleu
function createChampiBSprite(imageSrc) {
    const champibSprite = new Image()
    champibSprite.src = "./images/champiBSpriteStand.png"
    return champibSprite
}

let champibSprite = createChampiBSprite("./images/champiBSpriteStand.png")


// Le sprite du champi Bleu HS
function createChampibCrash(imageSrc) {
    const champibCrash = new Image()
    champibCrash.src = "./images/champiBCrash.png"
    return champibCrash
}

let champibCrash = createChampibCrash("./images/champiBCrash.png")


// Le sprite du champi rouge
function createChampiRouge(imageSrc) {
    const champiRSprite = new Image()
    champiRSprite.src = "./images/champiRougeSprite.png"
    return champiRSprite
}

let champiRSprite = createChampiRouge("./images/champiRougeSprite.png")


// sprite pièce d'or
function createBountySprite(imageSrc) {
    const bountyStand = new Image()
    bountyStand.src = "./images/bounty2.png"
    return bountyStand
}

let bountyStand = createBountySprite("./images/bounty2.png")


function createBrickStand(imageSrc) {
    const BrickStand = new Image()
    BrickStand.src = "./images/brickSpriteStand.png"
    return BrickStand
}

let BrickStand = createBrickStand("./images/brickSpriteStand.png")


// function createBrickBreak(imageSrc) {
//     const brickBreak = new Image()
//     brickBreak.src = "./images/brickSpriteBreak.png"
//     return brickBreak
// }

// let brickBreak = createBrickBreak("./images/brickSpriteBreak.png")





// //////////////////  CLASS  /////////////////////////////////


class ParticuleBrick{
    constructor({position,velocity,radius,color}) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 1
    }
    draw(){
        c.save();
        c.globalAlpha = this.opacity;                         
        c.beginPath();
        c.fillStyle=this.color;
        c.arc(this.position.x,this.position.y, this.radius,0,Math.PI *2)
        c.fill()
        c.closePath()
        c.restore();
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.opacity > 0){
            this.opacity -=0.01;
        }
        this.draw()
    }
 }



class Particule{
    constructor({position,velocity,radius,color}) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 1
    }
    draw(){
        c.save();
        c.globalAlpha = this.opacity;                         
        c.beginPath();
        c.fillStyle=this.color;
        c.arc(this.position.x,this.position.y, this.radius,0,Math.PI *2)
        c.fill()
        c.closePath()
        c.restore();
    }
    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.opacity > 0){
            this.opacity -=0.01;
        }
        this.draw()
    }
 }


// Cration du champi bleu
class ChampiB1 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 1500,
           y: 459
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}
class ChampiB2 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 1560,
           y: 459
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}


class ChampiB3 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 2896,
           y: 325
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}


class ChampiB4 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 5066,
           y: 459
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}


class ChampiB5 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 9800,
           y: 495
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}

class ChampiB6 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 8180,
            y: 161,
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}

class ChampiB7 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 10650,
            y: 151,
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}

class ChampiB8 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 10710,
            y: 151,
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}

class ChampiB9 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 10770,
            y: 151,
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}

class ChampiB10 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 11250,
            y: 250,
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiBSprite(champibSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiBSprite(champibSprite),
                left: createChampiBSprite(champibSprite),
                cropWidth: 61,
                width: 60
            },
            crash: {
                right: createChampibCrash(champibCrash),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 61
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            60,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0

            else if (this.frames > 20 &&
                (this.currentSprite === this.sprites.crash.right ||
                    this.currentSprite === this.sprites.crash.left)
            )
                this.frames = 0

        this.draw()

    }
}








// Cration du champi rouge
class ChampiRouge {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 9080,  // 9090, 
            y: 175 
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiRouge(champiRSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiRouge(champiRSprite),
                left: createChampiRouge(champiRSprite),
                cropWidth: 60,
                width: 60
            },
            run: {
                right: createChampiRouge(champiRSprite),
                left: createChampiRouge(champiRSprite),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 60
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            70,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiRouge est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0
        else if (this.frames > 15 &&
            (this.currentSprite === this.sprites.run.right ||
                this.currentSprite === this.sprites.run.left)
        )
            this.frames = 0
        this.draw()

    }
}


class ChampiR2 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 5390,  // 9090, 
            y: 89 
        }
        this.width = 60   // longueur en px du carré
        this.height = 60  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createChampiRouge(champiRSprite)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createChampiRouge(champiRSprite),
                left: createChampiRouge(champiRSprite),
                cropWidth: 60,
                width: 60
            },
            run: {
                right: createChampiRouge(champiRSprite),
                left: createChampiRouge(champiRSprite),
                cropWidth: 60,
                width: 60
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 60
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            70,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiR update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiRouge est de 16. 
        if (
            this.frames > 15 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0
        else if (this.frames > 15 &&
            (this.currentSprite === this.sprites.run.right ||
                this.currentSprite === this.sprites.run.left)
        )
            this.frames = 0
        this.draw()

    }
}


// Création des pièces d'or
class Bounty1 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 280,
           y: 470
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}


class Bounty2 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 1050,
           y: 450
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}
 class Bounty3 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 1050,
           y: 350
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++ 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}
class Bounty4 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 1050,
           y: 400
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}


class Bounty5 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 2850, 
            y: 335,      
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}
class Bounty6 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 2960,  // position de la 1ere plateforme sur l'axe X
            y: 335,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}


class Bounty7 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 4980,  // position de la 1ere plateforme sur l'axe X
            y: 300,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}


class Bounty8 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 5780,  // position de la 1ere plateforme sur l'axe X
            y: 300,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}


class Bounty9 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 6800,  // position de la 1ere plateforme sur l'axe X
            y: 290,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}


class Bounty10 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 7800,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}
class Bounty11 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 7860,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}
class Bounty12 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 7920,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}
class Bounty13 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 7971,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}
class Bounty14 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 8022,  // position de la 1ere plateforme sur l'axe X
            y: 350,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}

class Bounty15 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 8435,  // position de la 1ere plateforme sur l'axe X
            y: 167, 
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}

class Bounty16 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 8835,  // position de la 1ere plateforme sur l'axe X
            y: 100,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}

class Bounty17 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 11528,  // position de la 1ere plateforme sur l'axe X
            y: 464,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}

class Bounty18 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 12038,  // position de la 1ere plateforme sur l'axe X
            y: 354,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}

class Bounty19 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 12168,  // position de la 1ere plateforme sur l'axe X
            y: 154,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}

class Bounty20 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 12528,  // position de la 1ere plateforme sur l'axe X
            y: 464,
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // Bounty update
    update() {
        this.frames++
        // le nombre de sprite de l'image de Bounty est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()
    }
}

class Bounty21 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 14370,  // position de la 1ere plateforme sur l'axe X
            y: 485, 
        }
        this.width = 40   // longueur en px du carré
        this.height = 40  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBountySprite(bountyStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBountySprite(bountyStand),
                cropWidth: 40,
                width: 40
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }

    // On dessine notre carré
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            40,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    // champiB update
    update() {
        this.frames++
        // le nombre de sprite de l'image de champiB est de 16. 
        if (
            this.frames > 23 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0

        this.draw()

    }
}






// Cration du carré qui représente notre personnage
class Player {
    constructor() {
        this.speed = 7   // 7
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 400,  // 400
            y: 450 // 450 
        }
        this.velocity = {  // vitesse de déplacement du carré par pixel sur les axes x et y
            x: 1,  // 1
            y: 1   // 1
        }
        this.width = 55   // longueur en px du carré
        this.height = 55  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createSpriteSRight(marioStandRight)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createSpriteSRight(marioStandRight),
                left: createSpriteSLeft(marioStandLeft),
                cropWidth: 40,
                width: 55
            },
            run: {
                right: createSpriteRunRight(marioRunRight),
                left: createSpriteRunLeft(marioRunLeft),
                cropWidth: 40,
                width: 55
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 40
    }
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            42,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        // le nombre de sprite de l'image de mario est de 25. Pour une fluiditée parfaite de l'animation, on enlève la valeur d'un sprite au frames
        if (
            this.frames > 24 &&
            (this.currentSprite === this.sprites.stand.right ||
                this.currentSprite === this.sprites.stand.left)
        )
            this.frames = 0
        else if (this.frames > 24 &&
            (this.currentSprite === this.sprites.run.right ||
                this.currentSprite === this.sprites.run.left)
        )
            this.frames = 0
        this.draw()
        this.position.y += this.velocity.y,  // le += signifie dans ce cas précis que  this.position.y = this.position.y + this.velocity.y
            this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity

    }

}







// Cration des plateformes 
class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }

        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        //    c.drawImage(this.image, this.position.x, this.position.y)
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

// creation des éléments de décor
class GenericObject {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }

        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class Rock {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class Tree {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// création des cageots
class Crate {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// création des panneaux
class Sign {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// création des maisons
class House {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// création des feuilles
class Leave {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// création des buissons
class Bush {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// création des clotures
class Fence {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// création des tonneaux
class Tonneau {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// Cration des bricks
class Brick {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 3530,  // 400
            y: 250 // 450 
        }
        this.width = 75   // longueur en px du carré
        this.height = 75  // hauteur en px du carré



        // On applique les sprites créés en amont pour remplacer le carré
        this.image = createBrickStand(BrickStand)
        this.frames = 0
        this.sprites = {
            stand: {
                right: createBrickStand(BrickStand),
                cropWidth: 75,
                width: 75,
            },
        
            }
        
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 75
    }
    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            75,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }
    update() {
        this.frames++
        // le nombre de sprite de l'image d'une brick est de 34. Pour une fluiditée parfaite de l'animation, on enlève la valeur d'un sprite au frames
        if (this.frames > 33 &&
            (this.currentSprite === this.sprites.stand.right)
        )
            this.frames = 0
        this.draw() 
        }

}

// création des ensembles de 3 plantes
// class Flowerspack {
//     constructor({ x, y, image }) {
//         this.position = {
//             x,
//             y
//         }
//         this.image = image
//         this.width = image.width
//         this.height = image.height
//     }
//     draw() {
//         c.drawImage(this.image, this.position.x, this.position.y)
//     }
// }


// initialisation des images STATIC du jeu placées chacunes dans leur function respective.

function createImage(imageSrc) {
    const image = new Image()
    image.src = "./images/platform1.png"
    return image
}

function createSky(imageSrc) {
    const sky = new Image()
    sky.src = "./images/ciel.png"
    return sky
}

function createHills(imageSrc) {
    const hills = new Image()
    hills.src = "./images/paysage.png"
    return hills
}


function createPlatformSmallTall(imageSrc) {
    const platformSmallTall = new Image()
    platformSmallTall.src = "./images/platformSmallTall.png"
    return platformSmallTall
}
function createPlatformSmall(imageSrc) {
    const platformSmall = new Image()
    platformSmall.src = "./images/platformSmall.png"
    return platformSmall
}
function createplatform02(imageSrc) {
    const platform02 = new Image()
    platform02.src = "./images/platform2.png"
    return platform02
}
function createPlateformGreen(imageSrc) {
    const plateformGreen = new Image()
    plateformGreen.src = "./images/plateform-green.png"
    return plateformGreen
}
function createPlateformGreenSmall(imageSrc) {
    const plateformGreenS = new Image()
    plateformGreenS.src = "./images/plateform-green02.png"
    return plateformGreenS
}


function createRock(imageSrc) {
    const rock = new Image()
    rock.src = "./images/rocher01.png"
    return rock
}
function createBigrock(imageSrc) {
    const bigRock = new Image()
    bigRock.src = "./images/rocher03.png"
    return bigRock
}
function createRock02(imageSrc) {
    const rock02 = new Image()
    rock02.src = "./images/rocher02.png"
    return rock02
}


function createTree(imageSrc) {
    const tree = new Image()
    tree.src = "./images/arbre01.png"
    return tree
}
function createBigtree(imageSrc) {
    const bigTree = new Image()
    bigTree.src = "./images/arbre02.png"
    return bigTree
}


function createCrate(imageSrc) {
    const crate = new Image()
    crate.src = "./images/caisse.png"
    return crate
}
function createCrateSmall(imageSrc) {
    const crateSmall = new Image()
    crateSmall.src = "./images/crate_small.png"
    return crateSmall
}


function createSign(imageSrc) {
    const Sign = new Image()
    Sign.src = "./images/sign.png"
    return Sign
}


function createHouse01(imageSrc) {
    const House = new Image()
    House.src = "./images/maison_jaune.png"
    return House
}
function createHouse02(imageSrc) {
    const House02 = new Image()
    House02.src = "./images/maison_marron.png"
    return House02
}
function createHouse03(imageSrc) {
    const House03 = new Image()
    House03.src = "./images/maison3.png"
    return House03
}

function createLeaves01(imageSrc) {
    const leaves01 = new Image()
    leaves01.src = "./images/green-leavesSmall.png"
    return leaves01
}
function createLeaves02(imageSrc) {
    const leaves02 = new Image()
    leaves02.src = "./images/green-leavesSmallRight.png"
    return leaves02
}


function createBush(imageSrc) {
    const bush = new Image()
    bush.src = "./images/buisson01.png"
    return bush
}

function createFence(imageSrc) {
    const fence = new Image()
    fence.src = "./images/fence-wood.png"
    return fence
}

function createTonneau(imageSrc) {
    const tonneau = new Image()
    tonneau.src = "./images/tonneau.png"
    return tonneau
}

function createTonneau02(imageSrc) {
    const tonneau02 = new Image()
    tonneau02.src = "./images/tonneau02.png"
    return tonneau02
}

// function createFlowersPack(imageSrc) {
//     const flowersPack = new Image()
//     flowersPack.src = "./images/ensemble-plantes.png"
//     return flowersPack
// }


// Variables des images d'environnement


let platformImage = createImage("./images/platform1.png")
let theSky = createSky("./images/ciel.png")
let theHills = createHills("./images/paysage.png")
let thePlatformSmallTall = createPlatformSmallTall("./images/platformSmallTall.png")
let thePlatformSmall = createPlatformSmall("./images/platformSmall.png")
let theplateformGreen = createPlateformGreen("./images/plateform-green.png")
let theplateformGreenSmall = createPlateformGreenSmall("./images/plateform-green02.png")
let theRock = createRock("./images/rocher01.png")
let theRock02 = createRock02("./images/rocher02.png")
let thebigRock = createBigrock("./images/rocher03.png")
let theTree = createTree("./images/arbre01.png")
let thebigTree = createBigtree("./images/arbre02.png")
let theCrate = createCrate("./images/caisse.png")
let thecrateSmall = createCrateSmall("./images/crate_small.png")
let theSign = createSign("./images/sign.png")
let theHouse01 = createHouse01("./images/maison_jaune.png")
let theHouse02 = createHouse02("./images/maison_marron.png")
let theHouse03 = createHouse03("./images/maison3.png")
let thePlatform02 = createplatform02("./images/platform2.png")
let theLeaves = createLeaves01("./images/green-leavesSmall.png")
let theLeavesRight = createLeaves02("./images/green-leavesSmallRight.png")
let theBush = createBush("./images/buisson01.png")
let theFence = createFence("./images/fence-wood.png")
let theTonneau = createTonneau("./images/tonneau.png")
let theTonneau02 = createTonneau02("./images/tonneau02.png")
// let theflowersPack = createFlowersPack("./images/ensemble-plantes.png")



// variables globales
let player = new Player();

let champiB = new ChampiB1();
let champiB2 = new ChampiB2();
let champiB3 = new ChampiB3();
let champiB4 = new ChampiB4();
let champiB5 = new ChampiB5();
let champiB6 = new ChampiB6();
let champiB7 = new ChampiB7();
let champiB8 = new ChampiB8();
let champiB9 = new ChampiB9();
let champiB10 = new ChampiB10();


let champiR = new ChampiRouge();
let champiR2 = new ChampiR2();


let bounty1 = new Bounty1();
let bounty2 = new Bounty2();
let bounty3 = new Bounty3();
let bounty4 = new Bounty4();
let bounty5 = new Bounty5();
let bounty6 = new Bounty6();
let bounty7 = new Bounty7();
let bounty8 = new Bounty8();
let bounty9 = new Bounty9();
let bounty10 = new Bounty10();
let bounty11 = new Bounty11();
let bounty12 = new Bounty12();
let bounty13 = new Bounty13();
let bounty14 = new Bounty14();
let bounty15 = new Bounty15();
let bounty16 = new Bounty16();
let bounty17 = new Bounty17();
let bounty18 = new Bounty18();
let bounty19 = new Bounty19();
let bounty20 = new Bounty20();
let bounty21 = new Bounty21();

let brick01 = new Brick();

let scoreTag = document.getElementById('score');
let lifeTag = document.getElementById('vie');
let vie = 1;
let stock = 0;



// les tableaux
let platforms = []
let genericObjects = []
let rocks = []
let trees = []
let crates = []
let signs = []
let houses = []
let leaves = []
let particules = []
let particulesBricks = []
let bushs = []
let fences = []
let tonneaux = []
// let flowersPacks = []



// Variables des touche fléchées
let keys = {
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
    ArrowUp: { pressed: false }
}



// Variables qui indique à quelle étape le joueur se trouve dans le jeu, sur l'axe x et sous forme de valeur.
// Au début du jeu, la valeur se trouve à 0.
let scrollOffset = 0
let scrollVertical = 0





// Lancée au démarrage du jeu, quand on perd mais également quand on gagne
function init() {


    // initialisation des images d'environnement de la fonction init()
    platformImage = createImage("./images/platform1.png");
    theSky = createSky("./images/ciel.png");
    theHills = createHills("./images/paysage.png");
    thePlatformSmallTall = createPlatformSmallTall("./images/platformSmallTall.png");
    thePlatformSmall = createPlatformSmall("./images/platformSmall.png");
    theplateformGreen = createPlateformGreen("./images/plateform-green.png");
    theplateformGreenSmall = createPlateformGreenSmall("./images/plateform-green02.png")
    theRock = createRock("./images/rocher01.png");
    theRock02 = createRock02("./images/rocher02.png");
    thebigRock = createBigrock("./images/rocher03.png");
    theTree = createTree("./images/arbre01.png");
    thebigTree = createBigtree("./images/arbre02.png");
    theCrate = createCrate("./images/caisse.png");
    thecrateSmall = createCrateSmall("./images/crate_small.png");
    theSign = createSign("./images/sign.png");
    theHouse01 = createHouse01("./images/maison_jaune.png");
    theHouse02 = createHouse02("./images/maison_marron.png");
    theHouse03 = createHouse03("./images/maison3.png")
    thePlatform02 = createplatform02("./images/platform2.png");
    theLeaves = createLeaves01("./images/green-leavesSmall.png");
    theLeavesRight = createLeaves02("./images/green-leavesSmallRight.png");
    theBush = createBush("./images/buisson01.png");
    theFence = createFence("./images/fence-wood.png")
    theTonneau = createTonneau("./images/tonneau.png")
    theTonneau02 = createTonneau02("./images/tonneau02.png")
    // theflowersPack = createFlowersPack("./images/ensemble-plantes.png")

    player = new Player();

    champiB = new ChampiB1();
    champiB2 = new ChampiB2();
    champiB3 = new ChampiB3();
    champiB4 = new ChampiB4();
    champiB5 = new ChampiB5();
    champiB6 = new ChampiB6();
    champiB7 = new ChampiB7();
     champiB8 = new ChampiB8();
     champiB9 = new ChampiB9();
     champiB10 = new ChampiB10();



    champiR = new ChampiRouge();
    champiR2 = new ChampiR2();


    bounty1 = new Bounty1();
    bounty2 = new Bounty2();
    bounty3 = new Bounty3();
    bounty4 = new Bounty4();
    bounty5 = new Bounty5();
    bounty6 = new Bounty6();
    bounty7 = new Bounty7();
    bounty8 = new Bounty8();
    bounty9 = new Bounty9();
    bounty10 = new Bounty10();
    bounty11 = new Bounty11();
    bounty12 = new Bounty12();
    bounty13 = new Bounty13();
    bounty14 = new Bounty14();
    bounty15 = new Bounty15();
    bounty16 = new Bounty16();
    bounty17 = new Bounty17();
    bounty18 = new Bounty18();
    bounty19 = new Bounty19();
    bounty20 = new Bounty20();
    bounty21 = new Bounty21();

    brick01 = new Brick();


    scoreTag = document.getElementById('score');
    lifeTag = document.getElementById('vie');
    vie = 1;
    stock = 0;
    // -------------------------------

    







    platforms = [
        // plateforme 1
        new Platform({
            x: -1,  // position de la 1ere plateforme sur l'axe X
            y: 515,  // position de la 1ere plateforme sur l'axe Y
            image: platformImage
        }),
        // plateforme 2
        new Platform({
            x: platformImage.width - 3,
            y: 515,
            image: platformImage
        }),

        // Vide //

        // plateforme 3
        new Platform({
            x: platformImage.width * 2 + 200, //  on copie et colle la plateforme qui a -3 et on rajoute la place qu'elle occupe dans le tableau
            y: 515,
            image: platformImage
        }),

        // Vide //

        // plateforme 4
        new Platform({
            x: platformImage.width * 3 + 400, //  
            y: 515,
            image: platformImage
        }),
        // plateforme 5
        new Platform({
            x: platformImage.width * 4 + 300, //  
            y: 515,
            image: platformImage
        }),
        // Moyenne plateforme en hauteur 1
        new Platform({
            x: thePlatformSmallTall.width * 5 + 2100,
            y: 380,
            image: thePlatformSmallTall
        }),

        // Vide //

        // plateforme 6
        new Platform({
            x: platformImage.width * 6 + 400, //  
            y: 515,
            image: platformImage
        }),

        // Vide //

        // plateforme 7
        new Platform({
            x: platformImage.width * 7 + 700, //  
            y: 515,
            image: platformImage
        }),
        // plateforme 8
        new Platform({
            x: platformImage.width * 8 + 700, //  
            y: 515,
            image: platformImage
        }),
        // plateforme 9
        new Platform({
            x: platformImage.width * 9 + 700, //  
            y: 515,
            image: platformImage
        }),

        // Vide //

        // plateforme 10
        new Platform({
            x: platformImage.width * 10 + 700, //  
            y: 515,
            image: platformImage
        }),

        // Vide //

        // petite plateforme au sol 1
        new Platform({
            x: thePlatformSmall.width * 82, //  
            y: 515,
            image: thePlatformSmall
        }),

        // Vide //

        // petite plateforme au sol 2
        new Platform({
            x: thePlatformSmall.width * 87, //  
            y: 515,
            image: thePlatformSmall
        }),

        // Vide //

        // petite plateforme au sol 3
        new Platform({
            x: thePlatformSmall.width * 92, //  
            y: 515,
            image: thePlatformSmall
        }),

        // Vide //

        // petite plateforme en hauteur 1
        new Platform({
            x: thePlatformSmall.width * 94, //  
            y: 400,
            image: thePlatformSmall
        }),

        // Vide //


  // petite plateforme en hauteur 2
  new Platform({
    x: 7200,
    y: 280,
    image: thePlatformSmall
}),

 // Vide //

 // petite plateforme en hauteur 3
 new Platform({
    x: 7100,
    y: 220,
    image: thePlatformSmall
}),

 // Vide //

 // petite plateforme en hauteur 4
 new Platform({
    x: 6900,
    y: 160,
    image: thePlatformSmall
}),

// Vide //

// petite plateforme en hauteur 5
new Platform({
    x: 6700,
    y: 180,
    image: thePlatformSmall
}),

// Vide //

// petite plateforme en hauteur 6
new Platform({
    x: 6500,
    y: 140,
    image: thePlatformSmall
}),

// Vide //

// petite plateforme en hauteur 7
new Platform({
    x: 6270,
    y: 150,
    image: thePlatformSmall
}),

// Vide //

// petite plateforme en hauteur 8
     new Platform({
        x: 6062,
        y: 140,
        image: thePlatformSmall
    }),

    // Vide //

// petite plateforme en hauteur 9
new Platform({
    x: 5932,
    y: 160,
    image: thePlatformSmall
}),

// petite plateforme en hauteur 10
new Platform({
    x: 5662,
    y: 140,
    image: thePlatformSmall
}),

// petite plateforme en hauteur 11
new Platform({
    x: 5382,
    y: 140,
    image: thePlatformSmall
}),

// --------------------------------------------------------------------------------------------------

  // sur-plateforme 1
  new Platform({
    x: 7750,
    y: 398,
    image: thePlatform02
}),

       // plateforme 11
        new Platform({
            x: 7710,
            y: 470,
            image: platformImage
        }),

        // Vide //

        // plateforme 12
        new Platform({
            x: platformImage.width * 16 + 300,
            y: 470,
            image: platformImage
        }),
        // plateforme 13
        new Platform({
            x: platformImage.width * 17 + 300,
            y: 470,
            image: platformImage
        }),
        // plateforme 14
        new Platform({
            x: platformImage.width * 18 + 300,
            y: 470,
            image: platformImage
        }),

        // vide //

        // Moyenne plateforme en hauteur 2
        new Platform({
            x: thePlatformSmallTall.width * 65,
            y: 550,
            image: thePlatformSmallTall
        }),

        // vide //

        // petite plateforme en hauteur 2
        new Platform({
            x: thePlatformSmall.width * 127,
            y: 403,
            image: thePlatformSmall
        }),

        // vide //

        // petite plateforme en hauteur 3
        new Platform({
            x: thePlatformSmall.width * 129,
            y: 330,
            image: thePlatformSmall
        }),

        // vide //

        // petite plateforme en hauteur 4
        new Platform({
            x: thePlatformSmall.width * 126,
            y: 240,
            image: thePlatformSmall
        }),

        // vide //

        // petite plateforme en hauteur 5
        new Platform({
            x: thePlatformSmall.width * 124,
            y: 200,
            image: thePlatformSmall
        }),

        // vide //

        // plateforme 15
        new Platform({
            x: platformImage.width * 17 + 490,
            y: 220,
            image: platformImage
        }),

        // vide //

        // petite plateforme en hauteur 6
        new Platform({
            x: thePlatformSmall.width * 131,
            y: 240,
            image: thePlatformSmall
        }),

        // vide //

        // plateforme 16
        new Platform({
            x: platformImage.width * 21,
            y: 210,
            image: platformImage
        }),
        // plateforme 17
        // new Platform( {
        //     x: platformImage.width *22, 
        //     y: 210,
        //     image: platformImage
        // }),

        // Moyenne plateforme en hauteur 3
        new Platform({
            x: thePlatformSmallTall.width * 74.7,
            y: 310,
            image: thePlatformSmallTall
        }),

        // plateforme 18
        // new Platform( {
        //     x: platformImage.width *23, 
        //     y: 210,
        //     image: platformImage
        // }),
        // plateforme 19
        new Platform({
            x: platformImage.width * 23.5,
            y: 515,
            image: platformImage
        }),

        // vide //

        // plateforme 20
        new Platform({
            x: platformImage.width * 24.5,
            y: 515,
            image: platformImage
        }),



        // sur-plateforme
        new Platform({
            x: thePlatform02.width * 24,
            y: 437,
            image: thePlatform02
        }),


    //    GREEN Small platform 1
        new Platform({
            x: 12100,
            y: 365,
            image: theplateformGreenSmall
        }),


 //    GREEN BIG platform 1
 new Platform({
    x: 12330,
    y: 257,
    image: theplateformGreen
}),

        // plateforme 21
        new Platform({
            x: platformImage.width * 25.5,
            y: 150,
            image: platformImage
        }),
        // plateforme 22
        new Platform({
            x: platformImage.width * 26 + 375,
            y: 350,
            image: platformImage
        }),

        // vide //

        // petite plateforme en hauteur 7
        new Platform({
            x: thePlatformSmall.width * 177,
            y: 200,
            image: thePlatformSmall
        }),

        // vide //

        // petite plateforme en hauteur 8
        new Platform({
            x: thePlatformSmall.width * 184,
            y: 530,
            image: thePlatformSmall
        }),

        // vide //

        // plateforme 23
        new Platform({
            x: platformImage.width * 30 - 100,
            y: 515,
            image: platformImage
        }),






    ]


    genericObjects = [
        new GenericObject({
            x: 0,
            y: 0,
            image: theSky
        }),
        new GenericObject({
            x: 0,
            y: 0,
            image: theHills
        }),
    ]


    rocks = [
        new Rock({
            x: 800,
            y: 470,
            image: theRock

        }),


        new Rock({
            x: 2300,
            y: 425,
            image: thebigRock
        }),
        new Rock({
            x: 2275,
            y: 470,
            image: theRock02
        }),
        new Rock({
            x: 2390,
            y: 470,
            image: theRock

        }),
       
    ]


    trees = [
        new Tree({
            x: 40,
            y: 240,
            image: theTree

        }),

        new Tree({
            x: 2000,
            y: 240,
            image: theTree

        }),

// 1er arbre de la deuxieme rangée
        new Tree({
            x: 4540,
            y: 240,
            image: theTree

        }),
        // 2eme arbre de la deuxieme rangée
        new Tree({
            x: 4730,
            y: 240,
            image: theTree

        }),
         // 3eme arbre de la deuxieme rangée
        new Tree({
            x: 5550,
            y: 240,
            image: theTree

        }),
 // 4eme arbre de la deuxieme rangée
 new Tree({
    x: 5850,
    y: 240,
    image: theTree

}),

        new Tree({
            x: 4150,
            y: 130,
            image: thebigTree

        }),
        new Tree({
            x: 4350,
            y: 240,
            image: theTree

        }),
        new Tree({
            x: 4650,
            y: 130,
            image: thebigTree

        }),
        new Tree({
            x: 4850,
            y: 240,
            image: theTree

        }),
        new Tree({
            x: 5050,
            y: 130,
            image: thebigTree

        }),
        new Tree({
            x: 5250,
            y: 240,
            image: theTree
        }),
        new Tree({
            x: 5400,
            y: 130,
            image: thebigTree
        }),
        new Tree({
            x: 5650,
            y: 130,
            image: thebigTree
        }),

        new Tree({
            x: 8400,
            y: 195,
            image: theTree

        }),
    ]


    crates = [
        new Crate({
            x: 1300,
            y: 476,
            image: thecrateSmall
        }),
        new Crate({
            x: 1345,
            y: 476,
            image: thecrateSmall
        }),
        new Crate({
            x: 1315,
            y: 436,
            image: thecrateSmall
        }),



        // -----------------------------------------------------------------------------
        new Crate({
            x: 8185,
            y: 220,
            image: thecrateSmall
        }),
        new Crate({
            x: 8090,
            y: 330,
            image: theCrate
        }),
        new Crate({
            x: 8160,
            y: 330,
            image: theCrate
        }),
        new Crate({
            x: 8150,
            y: 260,
            image: theCrate
        }),

        new Crate({
            x: 12905,
            y: 500,
            image: thecrateSmall
        }),
        new Crate({
            x: 13085,
            y: 460,
            image: thecrateSmall
        }),
    
    ]


    signs = [
        new Sign({
            x: 650,
            y: 480,
            image: theSign

        })

    ]


    houses = [
        new House({
            x: 365,
            y: 341,
            image: theHouse01
        }),
      
        new House({
            x: 8900,
            y: 299,
            image: theHouse03
        }),
        
        new House({
            x: 16500,
            y: 325,
            image: theHouse02
        }),

    ]

    leaves = [
        new Leave({
            x: 2030,
            y: 455,
            image: theLeaves
        }),

        new Leave({
            x: 4825,
            y: 455,
            image: theLeavesRight
        }),

        new Leave({
            x: 8910,
            y: 160,
            image: theLeaves
        }),
        new Leave({
            x: 8990,
            y: 160,
            image: theLeavesRight
        }),
        new Leave({
            x: 9140,
            y: 160,
            image: theLeavesRight
        }),
        new Leave({
            x: 9215,
            y: 160,
            image: theLeaves
        }),
        new Leave({
            x: 9290,
            y: 160,
            image: theLeavesRight
        }),
    ]

    bushs = [
    new Bush({
        x: 10450,
        y: 115,
        image: theBush
    }),
    ]

    fences = [
        new Fence({
            x: 8583,
            y: 415,
            image: theFence
        }),
        new Fence({
            x: 8755,
            y: 415,
            image: theFence
        }),
    
    ]

    tonneaux = [
        new Tonneau ({
            x: 3450,
            y: 470,
            image:  theTonneau02
        }),

        new Tonneau ({
            x: 3600,
            y: 450,
            image:  theTonneau
        }),
        new Tonneau ({
            x: 3530,
            y: 450,
            image:  theTonneau
        }),
        new Tonneau ({
            x: 3565,
            y: 452,
            image:  theTonneau
        }),




      

        new Tonneau ({
            x: 8300,
            y: 403,
            image:  theTonneau
        }),
    ]


    // flowersPacks = [
    //     new Flowerspack({
    //         x: 500,
    //         y: 460,
    //         image: theflowersPack
    //     }),

    // ]


    scrollOffset = 0

}







//  ---------------------- ANIMATE ----------------------------




function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = ' white '
    c.fillRect(0, 0, canvas.width, canvas.height) // pour que le carré se déplace sans laisser de trainée

    genericObjects.forEach((genericObject) => {
        genericObject.draw()
    })

    platforms.forEach((platform) => {
        platform.draw()
    })

    rocks.forEach((theRock) => {
        theRock.draw()
    })

    trees.forEach((theTree) => {
        theTree.draw()
    })

    crates.forEach((theCrate) => {
        theCrate.draw()
    })

    crates.forEach((thecrateSmall) => {
        thecrateSmall.draw()
    })


    signs.forEach((theSign) => {
        theSign.draw()
    })

    houses.forEach((theHouse01) => {
        theHouse01.draw()
    })

    houses.forEach((theHouse02) => {
        theHouse02.draw()
    })

    houses.forEach((theHouse03) => {
        theHouse03.draw()
    })

    leaves.forEach((theLeaves) => {
        theLeaves.draw()
    })


    bushs.forEach((theBush) => {
        theBush.draw()
    })

    fences.forEach((theFence) => {
        theFence.draw()
    })

    tonneaux.forEach((theTonneau) => {
        theTonneau.draw()
    })

    // flowersPacks.forEach((theflowersPack) => {
    //     theflowersPack.draw()
    // })


    particules.forEach((particule,index)=>{
        if(particule.opacity <= 0){
            particules.splice(index,1)
        }else{
            particule.update();
        }
    }) 

    particulesBricks.forEach((particulesBrick,index)=>{
        if(particulesBrick.opacity <= 0){
            particulesBricks.splice(index,1)
        }else{
            particulesBrick.update();
        }
    }) 



    // Pour faire aller le carré a droite ou a gauche avec le suivis du canvas
    if (keys.ArrowRight.pressed && player.position.x < 400) {  // 400
        player.velocity.x = player.speed
    } else if (
        (keys.ArrowLeft.pressed && player.position.x > 400) || // 100
        (keys.ArrowLeft.pressed && scrollOffset === 0 &&
            player.position.x > 0)
    ) {
        player.velocity.x = -player.speed

    } else {
        player.velocity.x = 0

        if
            (keys.ArrowUp.pressed) {
            scrollVertical += player.position.y
        }

    

/////////////////////  POUR S'ELOIGNER DES OBJETS  ///////////////////////////////

        
        if (keys.ArrowRight.pressed) {
            scrollOffset += player.speed

// permet a mario de s'éloigner d'une pièce d'or sans que celle ci ne le suive
bounty1.position.x -= player.speed
bounty2.position.x -= player.speed
bounty3.position.x -= player.speed
bounty4.position.x -= player.speed
bounty5.position.x -= player.speed
bounty6.position.x -= player.speed
bounty7.position.x -= player.speed
bounty8.position.x -= player.speed
bounty9.position.x -= player.speed
bounty10.position.x -= player.speed
bounty11.position.x -= player.speed
bounty12.position.x -= player.speed
bounty13.position.x -= player.speed
bounty14.position.x -= player.speed
bounty15.position.x -= player.speed
bounty16.position.x -= player.speed
bounty17.position.x -= player.speed
bounty18.position.x -= player.speed
bounty19.position.x -= player.speed
bounty20.position.x -= player.speed
bounty21.position.x -= player.speed


            // permet a mario de s'éloigner d'un champiB sans que celui ci ne le suive
            champiB.position.x -= player.speed
            champiB2.position.x -= player.speed
            champiB3.position.x -= player.speed
            champiB4.position.x -= player.speed
            champiB5.position.x -= player.speed
            champiB6.position.x -= player.speed
            champiB7.position.x -= player.speed
            champiB8.position.x -= player.speed
            champiB9.position.x -= player.speed
            champiB10.position.x -= player.speed

              // permet a mario de s'éloigner d'un champiRouge sans que celui ci ne le suive
              champiR.position.x -= player.speed
              champiR2.position.x -= player.speed    
              
            //   permet a mario de s'éloigner d'une brick sans que celui ci ne le suive
              brick01.position.x -= player.speed  

              // permet a mario de pouvoir se déplacer sur les plateformes sans que celles ci ne le suivent
            platforms.forEach((platform) => {
                platform.position.x -= player.speed
            })


            genericObjects.forEach((genericObject) => {
                genericObject.position.x -= player.speed/5  // * 0.66
            })


            rocks.forEach((createRock) => {
                createRock.position.x -= player.speed
            })


            trees.forEach((createTree) => {
                createTree.position.x -= player.speed
            })


            crates.forEach((createCrate) => {
                createCrate.position.x -= player.speed
            })


            signs.forEach((createSign) => {
                createSign.position.x -= player.speed
            })


            houses.forEach((theHouse01) => {
                theHouse01.position.x -= player.speed
            })


            leaves.forEach((theLeaves) => {
                theLeaves.position.x -= player.speed
            })


            bushs.forEach((theBush) => {
                theBush.position.x -= player.speed
            })


            fences.forEach((theFence) => {
                theFence.position.x -= player.speed
            })

            tonneaux.forEach((theTonneau) => {
                theTonneau.position.x -= player.speed
            })

            particulesBricks.forEach((particulesBrick) => {
                particulesBrick.position.x -= player.speed
            })



///////////////////  POUR SE RAPPROCHER DES OBJETS  ///////////////////////////////

        } else if (keys.ArrowLeft.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed

  // permet a mario de se rapprocher d'une pièce d'or sans que celle ci ne vienne a lui
bounty1.position.x += player.speed
bounty2.position.x += player.speed
bounty3.position.x += player.speed
bounty4.position.x += player.speed
bounty5.position.x += player.speed
bounty6.position.x += player.speed
bounty7.position.x += player.speed
bounty8.position.x += player.speed
bounty9.position.x += player.speed
bounty10.position.x += player.speed
bounty11.position.x += player.speed
bounty12.position.x += player.speed
bounty13.position.x += player.speed
bounty14.position.x += player.speed
bounty15.position.x += player.speed
bounty16.position.x += player.speed
bounty17.position.x += player.speed
bounty18.position.x += player.speed
bounty19.position.x += player.speed
bounty20.position.x += player.speed
bounty21.position.x += player.speed


            // permet a mario de se rapprocher d'un champiB sans que celui ci ne vienne a lui
            champiB.position.x += player.speed
            champiB2.position.x += player.speed
            champiB3.position.x += player.speed
            champiB4.position.x += player.speed
            champiB5.position.x += player.speed
            champiB6.position.x += player.speed
            champiB7.position.x += player.speed
            champiB8.position.x += player.speed
            champiB9.position.x += player.speed
            champiB10.position.x += player.speed


            // permet a mario de se rapprocher d'un champiRouge sans que celui ci ne vienne a lui
            champiR.position.x += player.speed
            champiR2.position.x += player.speed


            // permet a mario de se rapprocher d'une brick sans que celui ci ne vienne a lui
            brick01.position.x += player.speed  


            platforms.forEach((platform) => {
                platform.position.x += player.speed
            })


            genericObjects.forEach((genericObject) => {
                genericObject.position.x += player.speed/5  // * 0.66
            })


            rocks.forEach((createRock) => {
                createRock.position.x += player.speed
            })


            trees.forEach((createTree) => {
                createTree.position.x += player.speed
            })


            crates.forEach((createCrate) => {
                createCrate.position.x += player.speed
            })


            signs.forEach((createSign) => {
                createSign.position.x += player.speed
            })


            houses.forEach((theHouse01) => {
                theHouse01.position.x += player.speed
            })


            leaves.forEach((theLeaves) => {
                theLeaves.position.x += player.speed
            })


            bushs.forEach((theBush) => {
                theBush.position.x += player.speed
            })


            fences.forEach((theFence) => {
                theFence.position.x += player.speed
            })

            tonneaux.forEach((theTonneau) => {
                theTonneau.position.x += player.speed
            })

            particulesBricks.forEach((particulesBrick) => {
                particulesBrick.position.x += player.speed
            })

        }

    }





    // Pour faire sauter le carré sur une plateforme
    platforms.forEach((platform) => {
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x + 23 &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
            player.position.x + player.width <= platform.position.x + platform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })


    
    // Pour faire sauter mario sur un rocher
    rocks.forEach((rock) => {
        if (
            player.position.y + player.height >= rock.position.y + 20 &&
            player.position.y + player.height + player.velocity.y >= rock.position.y &&
            player.position.x + player.width >= rock.position.x + 20 &&  // ajustement des bords coté gauche de chaque rochers lorsque mario tombe.
            player.position.x + player.width <= rock.position.x + rock.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
            player.velocity.y = 0
        }
    })
    // Pour bloquer mario devant un rocher coté gauche
    rocks.forEach((rock) => {
        if (
            player.position.x + player.width + player.velocity.x <= rock.position.x + rock.width &&
            player.position.x + player.width + player.velocity.x >= rock.position.x + 27 &&
            player.position.y + player.height >= rock.position.y + 20 &&
            player.position.y + player.height + player.velocity.y >= rock.position.y
        ) {
            player.velocity.x = -10

        }
    })
    // Pour bloquer mario devant un rocher coté droit
    rocks.forEach((rock) => {
        if (
            player.position.x + player.width + player.velocity.x <= rock.position.x + rock.width + 23 &&
            player.position.x + player.width + player.velocity.x >= rock.position.x + rock.width &&
            player.position.y + player.height >= rock.position.y + 20 &&
            player.position.y + player.height + player.velocity.y >= rock.position.y
        ) {
            player.velocity.x = 10

        }
    })
// Pour faire sauter mario sur un gros rocher
rocks.forEach((thebigRock) => {
    if (
        player.position.y + player.height >= thebigRock.position.y + 20 &&
        player.position.y + player.height + player.velocity.y >= thebigRock.position.y &&
        player.position.x + player.width >= thebigRock.position.x + 20 &&  // ajustement des bords coté gauche de chaque rochers lorsque mario tombe.
        player.position.x + player.width <= thebigRock.position.x + thebigRock.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
    ) {
    
        player.velocity.y = 0
    }
})



    // Pour faire sauter mario sur une caisse
    crates.forEach((crate) => {
        if (
            player.position.y + player.height <= crate.position.y &&
            player.position.y + player.height + player.velocity.y >= crate.position.y &&
            player.position.x + player.width >= crate.position.x + 20 &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= crate.position.x + crate.width + 35  // ajustement des bords coté droit 
        ) {
            player.velocity.y = 0
        }
    })


  // Pour faire sauter mario sur une caisse
 tonneaux.forEach((theTonneau) => {
    if (
        player.position.y + player.height <= theTonneau.position.y &&
        player.position.y + player.height + player.velocity.y >= theTonneau.position.y &&
        player.position.x + player.width >= theTonneau.position.x + 20 &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= theTonneau.position.x + theTonneau.width + 35  // ajustement des bords coté droit 
    ) {
        player.velocity.y = 0
    }
})

    //   -------------------------------------------------------






    if (scrollOffset < 20000) {

    }



    // si mario dépasse la limite du canvas en hauteur, il est propulsé en bas
    if (player.position.y < canvas.height - 576) {
        player.velocity.y = +10
    }


    // condition de victoire
    if (scrollOffset > 20000) {

    }



    // // si mario tombe hors du canvas, il est repositionné et perd 1 point de vie.
    if (player.position.y > canvas.height)  {

        player.position.x = (0)
        player.position.y = (0)
        vie -= 1;
        lifeTag.innerText = "Vie : " + vie;
    }









    //  si mario tombe hors du canvas et que la vie est à 0, le jeu est perdu et se réinitialise.
    function gameOver() {
        if(vie <= -1) {  
           alert("Vous avez perdu ! Cliquez sur \"OK\" pour recommencer.")
        init()
        vie = 1;
        lifeTag.innerText = "Vie : " + vie;
        stock = 0;
        scoreTag.innerText = "Score : " + stock
    }
    }
    
    gameOver()










bounty1.update()
bounty2.update()
bounty3.update()
bounty4.update()
bounty5.update()
bounty6.update()
bounty7.update()
bounty8.update()
bounty9.update()
bounty10.update()
bounty11.update()
bounty12.update()
bounty13.update()
bounty14.update()
bounty15.update()
bounty16.update()
bounty17.update()
bounty18.update()
bounty19.update()
bounty20.update()
bounty21.update()

player.update()

champiB.update()
champiB2.update()
champiB3.update()
champiB4.update()
champiB5.update()
champiB6.update()
champiB7.update()
champiB8.update()
champiB9.update()
champiB10.update()

champiR.update()
champiR2.update()
brick01.update()

collisionBounty1()
collisionBounty2()
collisionBounty3()
collisionBounty4()
collisionBounty5()
collisionBounty6()
collisionBounty7()
collisionBounty8() 
collisionBounty9()
collisionBounty10()
collisionBounty11()
collisionBounty12()
collisionBounty13()
collisionBounty14()
collisionBounty15()
collisionBounty16()
collisionBounty17()
collisionBounty18()
collisionBounty19()
collisionBounty20()
collisionBounty21()



//////////////////  COLLISIONS    ////////////////////////////////////

// champiB1
if (
    player.position.y + player.height <= champiB.position.y + champiB.width &&
    player.position.y + player.height + player.velocity.y >= champiB.position.y + 30  &&
    player.position.x + player.width >= champiB.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB.position.x + champiB.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}


// champiB2
if (
    player.position.y + player.height <= champiB2.position.y + champiB2.width &&
    player.position.y + player.height + player.velocity.y >= champiB2.position.y + 30  &&
    player.position.x + player.width >= champiB2.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB2.position.x + champiB2.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}


// champiB3
if (
    player.position.y + player.height <= champiB3.position.y + champiB3.width &&
    player.position.y + player.height + player.velocity.y >= champiB3.position.y + 30  &&
    player.position.x + player.width >= champiB3.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB3.position.x + champiB3.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}


// champiB4
if (
    player.position.y + player.height <= champiB4.position.y + champiB4.width &&
    player.position.y + player.height + player.velocity.y >= champiB4.position.y + 30  &&
    player.position.x + player.width >= champiB4.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB4.position.x + champiB4.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}


// champiB5
if (
    player.position.y + player.height <= champiB5.position.y + champiB5.width &&
    player.position.y + player.height + player.velocity.y >= champiB5.position.y + 30  &&
    player.position.x + player.width >= champiB5.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB5.position.x + champiB5.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}

// champiB6
if (
    player.position.y + player.height <= champiB6.position.y + champiB6.width &&
    player.position.y + player.height + player.velocity.y >= champiB6.position.y + 30  &&
    player.position.x + player.width >= champiB6.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB6.position.x + champiB6.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}

// champiB7
if (
    player.position.y + player.height <= champiB7.position.y + champiB7.width &&
    player.position.y + player.height + player.velocity.y >= champiB7.position.y + 30  &&
    player.position.x + player.width >= champiB7.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB7.position.x + champiB7.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}



// champiB8
if (
    player.position.y + player.height <= champiB8.position.y + champiB8.width &&
    player.position.y + player.height + player.velocity.y >= champiB8.position.y + 30  &&
    player.position.x + player.width >= champiB8.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB8.position.x + champiB8.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}


// champiB9
if (
    player.position.y + player.height <= champiB9.position.y + champiB9.width &&
    player.position.y + player.height + player.velocity.y >= champiB9.position.y + 30  &&
    player.position.x + player.width >= champiB9.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB9.position.x + champiB9.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}



// champiB10
if (
    player.position.y + player.height <= champiB10.position.y + champiB10.width &&
    player.position.y + player.height + player.velocity.y >= champiB10.position.y + 30  &&
    player.position.x + player.width >= champiB10.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiB10.position.x + champiB10.width +25   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'red'
    }))
}
// repositionnement de mario et perte d'une vie
player.position.x = (300)
lifeLost()
}
// --------------------------------------------------------------------------------------------------------









// champiR1
    if (
            player.position.y + player.height <= champiR.position.y + champiR.width +25 &&
            player.position.y + player.height + player.velocity.y >= champiR.position.y  &&
            player.position.x + player.width >= champiR.position.x + 25  &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= champiR.position.x + champiR.width +25   // ajustement des bords coté droit 
    ) {
        DisepearChampiR()
        adLife()
            //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'white'
    }))
}
}


// champiR2
if (
    player.position.y + player.height <= champiR2.position.y + champiR2.width +25 &&
    player.position.y + player.height + player.velocity.y >= champiR2.position.y  &&
    player.position.x + player.width >= champiR2.position.x + 25  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= champiR2.position.x + champiR2.width +25   // ajustement des bords coté droit 
) {
DisepearChampiR2()
adLife()
    //  effet de particules
for(let i = 0; i < 22 ; i++) {
particules.push(new Particule({
position:{
    x: player.position.x + player.width/2, // /2
    y: player.position.y + player.height/2
},
velocity:{
    x: (Math.random()-0.5)*2,
    y:(Math.random()-0.5)*2
},
radius: Math.random()*2,
color:'white'
}))
}
}




// Brick01
if (
    player.position.y + player.height <= brick01.position.y + brick01.height &&
    player.position.y + player.height + player.velocity.y >= brick01.position.y  &&
    player.position.x + player.width >= brick01.position.x  &&  // ajustement des bords coté gauche 
    player.position.x + player.width <= brick01.position.x + brick01.width   // ajustement des bords coté droit 
) {
//  effet de particules
for(let i = 0; i < 12 ; i++) {
   particulesBricks.push(new ParticuleBrick({
        position:{
            x: brick01.position.x + brick01.width/2, 
            y: brick01.position.y + brick01.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*6,
            y:(Math.random()-0.5)*6
        },
        radius: Math.random()*6,
        color:'#e49a76'
    }))
}
DisepearBrick01()

}





}
init()
animate()






// pour créer d'autres sprite du champiB selon une situation précise 

   // champiB.currentSprite = champiB.sprites.crash.right
    // champiB.currentCropWidth = champiB.sprites.crash.cropWidth
    // champiB.width = champiB.sprites.crash.width





///////////////  Disparition d'objet  ///////////////


function DisepearChampiR() {
    champiR.position.x = (-400)
    champiR.position.y = (-400)
}
function DisepearChampiR2() {
    champiR2.position.x = (-400)
    champiR2.position.y = (-400)
}


function DisepearBounty1() {
    bounty1.position.x = (-400)
    bounty1.position.y = (-400)
}
function DisepearBounty2() {
    bounty2.position.x = (-400)
    bounty2.position.y = (-400)
}
function DisepearBounty3() {
    bounty3.position.x = (-400)
    bounty3.position.y = (-400)
}
function DisepearBounty4() {
    bounty4.position.x = (-400)
    bounty4.position.y = (-400)
}
function DisepearBounty5() {
    bounty5.position.x = (-400)
    bounty5.position.y = (-400)
}
function DisepearBounty6() {
    bounty6.position.x = (-400)
    bounty6.position.y = (-400)
}
function DisepearBounty7() {
    bounty7.position.x = (-400)
    bounty7.position.y = (-400)
}
function DisepearBounty8() {
    bounty8.position.x = (-400)
    bounty8.position.y = (-400)
}
function DisepearBounty9() {
    bounty9.position.x = (-400)
    bounty9.position.y = (-400)
}
function DisepearBounty10() {
    bounty10.position.x = (-400)
    bounty10.position.y = (-400)
}
function DisepearBounty11() {
    bounty11.position.x = (-400)
    bounty11.position.y = (-400)
}
function DisepearBounty12() {
    bounty12.position.x = (-400)
    bounty12.position.y = (-400)
}
function DisepearBounty13() {
    bounty13.position.x = (-400)
    bounty13.position.y = (-400)
}
function DisepearBounty14() {
    bounty14.position.x = (-400)
    bounty14.position.y = (-400)
}
function DisepearBounty15() {
    bounty15.position.x = (-400)
    bounty15.position.y = (-400)
}
function DisepearBounty16() {
    bounty16.position.x = (-400)
    bounty16.position.y = (-400)
}
function DisepearBounty17() {
    bounty17.position.x = (-400)
    bounty17.position.y = (-400)
}
function DisepearBounty18() {
    bounty18.position.x = (-400)
    bounty18.position.y = (-400)
}
function DisepearBounty19() {
    bounty19.position.x = (-400)
    bounty19.position.y = (-400)
}
function DisepearBounty20() {
    bounty20.position.x = (-400)
    bounty20.position.y = (-400)
}
function DisepearBounty21() {
    bounty21.position.x = (-400)
    bounty21.position.y = (-400)
}





function DisepearBrick01() {
    brick01.position.x = (-400)
    brick01.position.y = (-400)
}


///////////////////  SCORE et  VIE   ////////////////////////


// le score
scoreTag.style.fontFamily = "impact";
scoreTag.style.fontStyle = "italic"
scoreTag.style.fontSize = "28px";
scoreTag.style.color = "white";
scoreTag.innerText = "Score : 0";
scoreTag.style.position = "absolute";
scoreTag.style.top = "50px";
scoreTag.style.right = "290px";



//   la vie
lifeTag.style.fontFamily = "impact";
lifeTag.style.fontStyle = "italic"
lifeTag.style.fontSize = "28px";
lifeTag.style.color = "white";
lifeTag.innerText = "Vie : " + vie;
lifeTag.style.position = "absolute";
lifeTag.style.top = "50px";
lifeTag.style.left = "260px";



function lifeLost() {
        vie -= 1;
        lifeTag.innerText = "Vie : " + vie;
}

function adLife() {
    vie += 1;
    lifeTag.innerText = "Vie : " + vie;
}

function adStock() {
    stock += 1;
    scoreTag.innerText = "Score : " + stock
}











function collisionBounty1() {
    if (
        player.position.y + player.height <= bounty1.position.y + bounty1.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty1.position.y  &&
        player.position.x + player.width >= bounty1.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty1.position.x + bounty1.width +25   // ajustement des bords coté droit 
) {
    //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty1()
        adStock()
    }
}
function collisionBounty2() {
    if (
        player.position.y + player.height <= bounty2.position.y + bounty2.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty2.position.y  &&
        player.position.x + player.width >= bounty2.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty2.position.x + bounty2.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty2()
        adStock()
    }

}
function collisionBounty3() {
    if (
        player.position.y + player.height <= bounty3.position.y + bounty3.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty3.position.y  &&
        player.position.x + player.width >= bounty3.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty3.position.x + bounty3.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty3()
        adStock()
    }

}
function collisionBounty4() {
    if (
        player.position.y + player.height <= bounty4.position.y + bounty4.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty4.position.y  &&
        player.position.x + player.width >= bounty4.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty4.position.x + bounty4.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty4()
        adStock()
    }

}
function collisionBounty5() {
    if (
        player.position.y + player.height <= bounty5.position.y + bounty5.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty5.position.y  &&
        player.position.x + player.width >= bounty5.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty5.position.x + bounty5.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty5()
        adStock()
    }

}
function collisionBounty6() {
    if (
        player.position.y + player.height <= bounty6.position.y + bounty6.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty6.position.y  &&
        player.position.x + player.width >= bounty6.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty6.position.x + bounty6.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty6()
        adStock()
    }

}
function collisionBounty7() {
    if (
        player.position.y + player.height <= bounty7.position.y + bounty7.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty7.position.y  &&
        player.position.x + player.width >= bounty7.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty7.position.x + bounty7.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty7()
        adStock()
    }

}
function collisionBounty8() {
    if (
        player.position.y + player.height <= bounty8.position.y + bounty8.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty8.position.y  &&
        player.position.x + player.width >= bounty8.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty8.position.x + bounty8.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty8()
        adStock()
    }

}
function collisionBounty9() {
    if (
        player.position.y + player.height <= bounty9.position.y + bounty9.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty9.position.y  &&
        player.position.x + player.width >= bounty9.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty9.position.x + bounty9.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty9()
        adStock()
    }

}
function collisionBounty10() {
    if (
        player.position.y + player.height <= bounty10.position.y + bounty10.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty10.position.y  &&
        player.position.x + player.width >= bounty10.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty10.position.x + bounty10.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty10()
        adStock()
    }

}
function collisionBounty11() {
    if (
        player.position.y + player.height <= bounty11.position.y + bounty11.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty11.position.y  &&
        player.position.x + player.width >= bounty11.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty11.position.x + bounty11.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty11()
        adStock()
    }

}
function collisionBounty12() {
    if (
        player.position.y + player.height <= bounty12.position.y + bounty12.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty12.position.y  &&
        player.position.x + player.width >= bounty12.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty12.position.x + bounty12.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty12()
        adStock()
    }

}
function collisionBounty13() {
    if (
        player.position.y + player.height <= bounty13.position.y + bounty13.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty13.position.y  &&
        player.position.x + player.width >= bounty13.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty13.position.x + bounty13.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty13()
        adStock()
    }

}
function collisionBounty14() {
    if (
        player.position.y + player.height <= bounty14.position.y + bounty14.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty14.position.y  &&
        player.position.x + player.width >= bounty14.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty14.position.x + bounty14.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty14()
        adStock()
    }

}
function collisionBounty15() {
    if (
        player.position.y + player.height <= bounty15.position.y + bounty15.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty15.position.y  &&
        player.position.x + player.width >= bounty15.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty15.position.x + bounty15.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty15()
        adStock()
    }

}
function collisionBounty16() {
    if (
        player.position.y + player.height <= bounty16.position.y + bounty16.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty16.position.y  &&
        player.position.x + player.width >= bounty16.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty16.position.x + bounty16.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty16()
        adStock()
    }

}
function collisionBounty17() {
    if (
        player.position.y + player.height <= bounty17.position.y + bounty17.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty17.position.y  &&
        player.position.x + player.width >= bounty17.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty17.position.x + bounty17.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty17()
        adStock()
    }

}
function collisionBounty18() {
    if (
        player.position.y + player.height <= bounty18.position.y + bounty18.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty18.position.y  &&
        player.position.x + player.width >= bounty18.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty18.position.x + bounty18.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty18()
        adStock()
    }

}
function collisionBounty19() {
    if (
        player.position.y + player.height <= bounty19.position.y + bounty19.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty19.position.y  &&
        player.position.x + player.width >= bounty19.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty19.position.x + bounty19.width +25   // ajustement des bords coté droit 
) {
      //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
        DisepearBounty19()
        adStock()
    }
}
function collisionBounty20() {
        if (
            player.position.y + player.height <= bounty20.position.y + bounty20.width +25 &&
            player.position.y + player.height + player.velocity.y >= bounty20.position.y  &&
            player.position.x + player.width >= bounty20.position.x + 25  &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= bounty20.position.x + bounty20.width +25   // ajustement des bords coté droit 
    ) {
          //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
            DisepearBounty20()
            adStock()
        }
    }
function collisionBounty21() {
            if (
                player.position.y + player.height <= bounty21.position.y + bounty21.width +25 &&
                player.position.y + player.height + player.velocity.y >= bounty21.position.y  &&
                player.position.x + player.width >= bounty21.position.x + 25  &&  // ajustement des bords coté gauche 
                player.position.x + player.width <= bounty21.position.x + bounty21.width +25   // ajustement des bords coté droit 
        ) {
              //  effet de particules
for(let i = 0; i < 22 ; i++) {
    particules.push(new Particule({
        position:{
            x: player.position.x + player.width/2, // /2
            y: player.position.y + player.height/2
        },
        velocity:{
            x: (Math.random()-0.5)*2,
            y:(Math.random()-0.5)*2
        },
        radius: Math.random()*2,
        color:'yellow'
    }))
}
                DisepearBounty21()
                adStock()
            }
        
    }






// ----------------------------- CLAVIERS ----------------------------------






// Paramétrage des touches enfoncées
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
            keys.ArrowUp.pressed = true;
            player.velocity.y -= 12
            break
        case 'ArrowDown':

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
    }
})





c.imageSmoothingEnabled = true

