
// Les Constentes du canvas
const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');


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













// //////////////////  CLASS  /////////////////////////////////

// Cration du champi bleu
class Champi {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 700,
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

// class Champi {
//     constructor() {
//         this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
//            x: 700,
//            y: 465
//         }
//         this.width = 60   // longueur en px du carré
//         this.height = 60  // hauteur en px du carré



//         // On applique les sprites créés en amont pour remplacer le carré
//         this.image = createChampiBSprite(champibSprite)
//         this.frames = 0
//         this.sprites = {
//             stand: {
//                 right: createChampiBSprite(champibSprite),
//                 left: createChampiBSprite(champibSprite),
//                 cropWidth: 61,
//                 width: 60
//             },
//             run: {
//                 right: createChampiBSprite(champibSprite),
//                 left: createChampiBSprite(champibSprite),
//                 cropWidth: 61,
//                 width: 60
//             }
//         }
//         this.currentSprite = this.sprites.stand.right
//         this.currentCropWidth = 61
//     }

//     // On dessine notre carré
//     draw() {
//         c.drawImage(
//             this.currentSprite,
//             this.currentCropWidth * this.frames,
//             0,
//             this.currentCropWidth,
//             70,
//             this.position.x,
//             this.position.y,
//             this.width,
//             this.height
//         )
//     }

//     // champiB update
//     update() {
//         this.frames++
//         // le nombre de sprite de l'image de champiB est de 16. 
//         if (
//             this.frames > 15 &&
//             (this.currentSprite === this.sprites.stand.right ||
//                 this.currentSprite === this.sprites.stand.left)
//         )
//             this.frames = 0
//         else if (this.frames > 15 &&
//             (this.currentSprite === this.sprites.run.right ||
//                 this.currentSprite === this.sprites.run.left)
//         )
//             this.frames = 0
//         this.draw()

//     }
// }



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


class Bounty1 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 100,
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
class Bounty2 {
    constructor() {
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
           x: 600,
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



// Cration du carré qui représente notre personnage
class Player {
    constructor() {
        this.speed = 7
        this.position = {  // position de l'objet dans le canvas par rapport au axes x et y
            x: 400,  // 100
            y: 450 // 50 
        }
        this.velocity = {  // vitesse de déplacement du carré par pixel sur les axes x et y
            x: 1,
            y: 1
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

    // On dessine notre carré
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

    // Player update
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


function createRock(imageSrc) {
    const rock = new Image()
    rock.src = "./images/rocher01.png"
    return rock
}

function createTree(imageSrc) {
    const tree = new Image()
    tree.src = "./images/arbre01.png"
    return tree
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

function createplatform02(imageSrc) {
    const platform02 = new Image()
    platform02.src = "./images/platform2.png"
    return platform02
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








// Variables des images d'environnement
let platformImage = createImage("./images/platform1.png")
let theSky = createSky("./images/ciel.png")
let theHills = createHills("./images/paysage.png")
let thePlatformSmallTall = createPlatformSmallTall("./images/platformSmallTall.png")
let thePlatformSmall = createPlatformSmall("./images/platformSmall.png")
let theRock = createRock("./images/rocher01.png")
let theTree = createTree("./images/arbre01.png")
let theCrate = createCrate("./images/caisse.png")
let thecrateSmall = createCrateSmall("./images/crate_small.png")
let theSign = createSign("./images/sign.png")
let theHouse01 = createHouse01("./images/maison_jaune.png")
let theHouse02 = createHouse02("./images/maison_marron.png")
let thePlatform02 = createplatform02("./images/platform2.png")
let theLeaves = createLeaves01("./images/green-leavesSmall.png")
let theLeavesRight = createLeaves02("./images/green-leavesSmallRight.png")



// variables globales
let player = new Player();
let champiB = new Champi();
let champiR = new ChampiRouge();
let bounty1 = new Bounty1();
let bounty2 = new Bounty2();
let scoreTag = document.getElementById('score');
let lifeTag = document.getElementById('vie');
let vie = 3;
let advie = 1;
let stock = 0;
let adstock = 1;


// les tableaux
let platforms = []
let genericObjects = []
let bountys = []
let rocks = []
let trees = []
let crates = []
let signs = []
let houses = []
let leaves = []







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
    theRock = createRock("./images/rocher01.png");
    theTree = createTree("./images/arbre01.png");
    theCrate = createCrate("./images/caisse.png");
    thecrateSmall = createCrateSmall("./images/crate_small.png")
    theSign = createSign("./images/sign.png");
    theHouse01 = createHouse01("./images/maison_jaune.png")
    theHouse02 = createHouse02("./images/maison_marron.png")
    thePlatform02 = createplatform02("./images/platform2.png")
    theLeaves = createLeaves01("./images/green-leavesSmall.png")
    theLeavesRight = createLeaves02("./images/green-leavesSmallRight.png")



    player = new Player();
    champiB = new Champi();
    champiR = new ChampiRouge();
    bounty1 = new Bounty1();
    bounty2 = new Bounty2();
    scoreTag = document.getElementById('score');
    lifeTag = document.getElementById('vie');
    vie = 3;
    advie = 1;
    stock = 0;
    adstock = 1;
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

        // plateforme 11
        new Platform({
            x: platformImage.width * 15 + 300,
            y: 348,
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

        //  la colline

        // plateforme02 1
        new Platform({
            x: thePlatform02.width * 23.8,
            y: 415,
            image: thePlatform02
        }),

        // plateforme02 2
        new Platform({
            x: thePlatform02.width * 23.8,
            y: 315,
            image: thePlatform02
        }),

        // plateforme02 3
        new Platform({
            x: thePlatform02.width * 23.8,
            y: 215,
            image: thePlatform02
        }),

        // plateforme02 4
        new Platform({
            x: thePlatform02.width * 23.8,
            y: 120,
            image: thePlatform02
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



    // bountys = [


    //     //    bounty 0
    //     new Bounty({
    //         x: 700,  // position de la 1ere plateforme sur l'axe X
    //         y: 350,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),

    //     //    bounty 1
    //     new Bounty({
    //         x: 2880,  // position de la 1ere plateforme sur l'axe X
    //         y: 335,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 2      
    //     new Bounty({
    //         x: 2930,  // position de la 1ere plateforme sur l'axe X
    //         y: 335,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),


    //     //    bounty 3
    //     new Bounty({
    //         x: 6800,  // position de la 1ere plateforme sur l'axe X
    //         y: 290,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),


    //     //    bounty 4
    //     new Bounty({
    //         x: 7791,  // position de la 1ere plateforme sur l'axe X
    //         y: 302,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 5
    //     new Bounty({
    //         x: 7851,  // position de la 1ere plateforme sur l'axe X
    //         y: 302,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 6
    //     new Bounty({
    //         x: 7911,  // position de la 1ere plateforme sur l'axe X
    //         y: 302,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 7
    //     new Bounty({
    //         x: 7971,  // position de la 1ere plateforme sur l'axe X
    //         y: 302,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 8
    //     new Bounty({
    //         x: 8031,  // position de la 1ere plateforme sur l'axe X
    //         y: 302,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 9
    //     new Bounty({
    //         x: 8091,  // position de la 1ere plateforme sur l'axe X
    //         y: 302,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),


    //     //    bounty 10
    //     new Bounty({
    //         x: 8435,  // position de la 1ere plateforme sur l'axe X
    //         y: 167,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 11
    //     new Bounty({
    //         x: 8835,  // position de la 1ere plateforme sur l'axe X
    //         y: 100,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),


    //     //    bounty 12
    //     new Bounty({
    //         x: 12048,  // position de la 1ere plateforme sur l'axe X
    //         y: 154,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 13
    //     new Bounty({
    //         x: 12108,  // position de la 1ere plateforme sur l'axe X
    //         y: 154,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    //     //    bounty 14
    //     new Bounty({
    //         x: 12168,  // position de la 1ere plateforme sur l'axe X
    //         y: 154,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),

    //     //    bounty 15
    //     new Bounty({
    //         x: 14370,  // position de la 1ere plateforme sur l'axe X
    //         y: 485,  // position de la 1ere plateforme sur l'axe Y    
    //         image: bountyStandRight
    //     }),
    // ]



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

        })
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
        new Tree({
            x: 8500,
            y: 200,
            image: theTree

        })
    ]


    crates = [
        new Crate({
            x: 1300,
            y: 476,
            image: thecrateSmall

        }),
        new Crate({
            x: 4500,
            y: 476,
            image: thecrateSmall

        }),
        new Crate({
            x: 4550,
            y: 445,
            image: theCrate
        }),
        new Crate({
            x: 4570,
            y: 375,
            image: theCrate

        }),
        new Crate({
            x: 7200,
            y: 250,
            image: theCrate

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

    bountys.forEach((bountyStandRight) => {
        bountyStandRight.draw()
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

    leaves.forEach((theLeaves) => {
        theLeaves.draw()
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

            // permet a mario de s'éloigner d'un champiB sans que celui ci ne le suive
            champiB.position.x -= player.speed

              // permet a mario de s'éloigner d'un champiRouge sans que celui ci ne le suive
              champiR.position.x -= player.speed

              // permet a mario de pouvoir se déplacer sur les plateformes sans que celles ci ne le suivent
            platforms.forEach((platform) => {
                platform.position.x -= player.speed
            })

            genericObjects.forEach((genericObject) => {
                genericObject.position.x -= player.speed * 0.66
            })


            // // permet a mario de pouvoir traverser les pièces d'or sans que celles ci ne le suivent
            bountys.forEach((createBountySpriteSRight) => {
                createBountySpriteSRight.position.x -= player.speed
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




///////////////////  POUR SE RAPPROCHER DES OBJETS  ///////////////////////////////

        } else if (keys.ArrowLeft.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed

  // permet a mario de se rapprocher d'une pièce d'or sans que celle ci ne vienne a lui
  bounty1.position.x += player.speed
  bounty2.position.x += player.speed

            // permet a mario de se rapprocher d'un champiB sans que celui ci ne vienne a lui
            champiB.position.x += player.speed

            // permet a mario de se rapprocher d'un champiRouge sans que celui ci ne vienne a lui
            champiR.position.x += player.speed

            platforms.forEach((platform) => {
                platform.position.x += player.speed
            })

            genericObjects.forEach((genericObject) => {
                genericObject.position.x += player.speed * 0.66
            })

            bountys.forEach((createBountySpriteSRight) => {
                createBountySpriteSRight.position.x += player.speed
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




    //   -------------------------------------------------------











    if (scrollOffset < 20000) {

    }




    // si mario dépasse la limite du canvas en hauteur, il est propulsé en bas
    if (player.position.y < canvas.height - 576) {
        player.velocity.y = +10
    }


    // condition de victoire
    if (scrollOffset > 20000) {
        // drawScore()
    }



    // // si mario tombe d'une plateforme, le jeu recommence
    if (player.position.y > canvas.height) {
        init()
    }



    // deleteBounty()
    collisionBounty()
    collisionChampi()
    collisionChampiRouge()

    bounty1.update()
    bounty2.update()
    player.update()
    champiB.update()
    champiR.update()

}
init()
animate()



///////////////  Disparition d'objet  ///////////////

function DisepearChampiB() {
    champiB.position.x = (-400)
    champiB.position.y = (-400)
    // champiB.currentSprite = champiB.sprites.crash.right
    // champiB.currentCropWidth = champiB.sprites.crash.cropWidth
    // champiB.width = champiB.sprites.crash.width

}

function DisepearChampiR() {
    champiR.position.x = (-400)
    champiR.position.y = (-400)
}


function DisepearBounty1() {
    bounty1.position.x = (-400)
    bounty1.position.y = (-400)
}
function DisepearBounty2() {
    bounty2.position.x = (-400)
    bounty2.position.y = (-400)
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




function adLife() {
    vie += advie
    lifeTag.innerText = "Vie : " + vie;
}

function adStock() {
    stock += 1;
    scoreTag.innerText = "Score : " + stock
}





////////////////////   COLLISIONS   ////////////////////////



function collisionChampi() {
    if (
        player.position.y + player.height <= champiB.position.y + champiB.width +25 &&
        player.position.y + player.height + player.velocity.y >= champiB.position.y  &&
        player.position.x + player.width >= champiB.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= champiB.position.x + champiB.width +25   // ajustement des bords coté droit 
) {
        DisepearChampiB()
    }

}

function collisionChampiRouge() {
    if (
            player.position.y + player.height <= champiR.position.y + champiR.width +25 &&
            player.position.y + player.height + player.velocity.y >= champiR.position.y  &&
            player.position.x + player.width >= champiR.position.x + 25  &&  // ajustement des bords coté gauche 
            player.position.x + player.width <= champiR.position.x + champiR.width +25   // ajustement des bords coté droit 
    ) {
        DisepearChampiR()
        adLife()
    }
}

function collisionBounty() {
    if (
        player.position.y + player.height <= bounty1.position.y + bounty1.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty1.position.y  &&
        player.position.x + player.width >= bounty1.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty1.position.x + bounty1.width +25   // ajustement des bords coté droit 
) {
        DisepearBounty1()
        adStock()
    }
    if (
        player.position.y + player.height <= bounty2.position.y + bounty2.width +25 &&
        player.position.y + player.height + player.velocity.y >= bounty2.position.y  &&
        player.position.x + player.width >= bounty2.position.x + 25  &&  // ajustement des bords coté gauche 
        player.position.x + player.width <= bounty2.position.x + bounty2.width +25   // ajustement des bords coté droit 
) {
        DisepearBounty2()
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

