
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
        
    

// Le sprite de la pièce d'or
              function createBountySpriteSRight(imageSrc) {
                const bountyStandRight = new Image()
                bountyStandRight.src = "./images/bounty.png"
                return  bountyStandRight
            }

            


           
            

// Cration des pièces en or 
class Bounty {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }

        this.image = image
        this.width = image.width 
        this.height = image.height
    
   
   
}

// On dessine notre carré
draw() {
    c.drawImage(
        this.image, this.position.x, this.position.y, this.width, this.height
        )
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
        this.frames >24 && 
       (this.currentSprite === this.sprites.stand.right || 
        this.currentSprite === this.sprites.stand.left) 
    )
       this.frames = 0
    else if(this.frames >24 && 
        (this.currentSprite === this.sprites.run.right || 
          this.currentSprite === this.sprites.run.left)
          )
       this.frames = 0
    this.draw()
 this.position.y += this.velocity.y,  // le += signifie dans ce cas précis que  this.position.y = this.position.y + this.velocity.y
 this.position.x += this.velocity.x 

 if(this.position.y + this.height + this.velocity.y <= canvas.height)
 this.velocity.y += gravity
 
}

}

// Cration des plateformes 
class Platform {
    constructor({x, y, image}) {
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
    constructor({x, y, image}) {
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
    constructor({x, y, image}) {
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
    constructor({x, y, image}) {
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


// Cration du carré qui représente notre personnage
// class ChampiBleu {
//     constructor() {
//         this.position = {  
//             x: 800,
//             y: 470
//         }
//         this.velocity = {  
//             x: 0,
//             y: 0
//         }
//         const champiB = new Image()
//          champiB.src = "./images/champiBleu.png" ;
//          champiB.onload = () => {
//             this.image = champiB;
//             this.width = 45
//             this.height = 45;
//             this.position = {
//                 x:position.x,
//                 y:position.y
//             }
//          }
    
//     }
//     draw() {
//         if (this.image) {
//             c.drawImage(
//                 this.image, 
//                 this.position.x, 
//                 this.position.y, 
//                 this.width, 
//                 this.height
//                 )
//         }
      
//     }
//     update({velocity}) {
//         if (this.image) {
//             this.position.x += velocity.x;
//             this.position.y += velocity.y;
//             }
//             this.draw();
//         }
//         // shoot(alienMissiles){
//         //     if(this.position){
//         //         alienMissiles.push(new alienMissile({
//         //             position:{
//         //                 x:this.position.x,
//         //                 y:this.position.y
//         //             },
//         //             velocity:{
//         //                 x:0,
//         //                 y:3
//         //             }
//         //         }))
//         //     }
//         // }
//     }
  

    // class Grid{
    //     constructor(){
    //         this.position={ x:0,y:0}
    //         this.velocity={x:2,y:0}
    //         this.invaders = [ ]
    //         // le nombre de champi est déterminés par le nombres de lignes et de colonnes.
    //         let rows = 1 
    //         const colums = 1 
    //        // hauteur entre chaque lignes.
    //         this.height=rows*35;
    //        // largeur entre chaque lignes.
    //         this.width = colums *35;
    //         for (let x = 0; x < colums ; x++){
    //             for(let y = 0; y < rows ; y++){
    //                 this.invaders.push(new ChampiBleu({
    //                     position:{
    //                         x: 0,
    //                         y: 0
    //                     }
    //                 }))
    //             }
    //         }
    //     }

    //         update(){
    //             this.position.x += this.velocity.x;
    //             this.position.y += this.velocity.y;
    //             this.velocity.y =0;
    //             if(this.position.x + this.width  > this.width + 20 ){ // fonctionne avec les colonnes
    //                 this.velocity.x = -this.velocity.x;
    //                 this.velocity.y = 0;
    //                     } else if (this.position.x + this.width - 50 ){
    //                         this.position.x += this.velocity.x;
    //             this.position.y += this.velocity.y;
    //             this.velocity.y =0;
    //                 }
    //         }
    //     }

    // canvas.width || this.position.x == 0

    
   


// initialisation des images du jeu placées chacunes dans leur function respective.

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




// Variables des images d'environnement au démarrage du jeu
let platformImage = createImage("./images/platform1.png")
let theSky = createSky("./images/ciel.png")
let theHills = createHills("./images/paysage.png")
let thePlatformSmallTall = createPlatformSmallTall("./images/platformSmallTall.png")
let thePlatformSmall = createPlatformSmall("./images/platformSmall.png")
let  bountyStandRight = createBountySpriteSRight("./images/bounty.png")
let  theRock = createRock("./images/rocher01.png")
let  theTree = createTree("./images/arbre01.png")




// Variables du joueur et des tableaux
let player = new Player()
let platforms = []
let genericObjects = []
let bountys = []
let rocks = []
let trees = []
let scoreTag = document.getElementById('score');
let score = 0
// let grids = [new Grid()]
 

// le score
scoreTag.style.fontSize = "20px"; 
scoreTag.style.color = "white";
scoreTag.innerText = "Score:  " + score


// Variables des touche fléchées
let keys = {
    ArrowLeft:{pressed:false},
    ArrowRight:{pressed:false},
    ArrowUp:{pressed:false}
}
 


// Variables qui indique à quelle étape le joueur se trouve dans le jeu sous forme de valeur.
// Au début du jeu, la valeur se trouve à 0.
let scrollOffset = 0
let scrollVertical = 0

// Lancée au démarrage du jeu, quand on perd mais également quand on gagne
function init() {


    // initialisation des images d'environnement de la fonction init()
     platformImage = createImage("./images/platform1.png")
     theSky = createSky("./images/ciel.png")
     theHills = createHills("./images/paysage.png")
     thePlatformSmallTall = createPlatformSmallTall("./images/platformSmallTall.png")
     thePlatformSmall = createPlatformSmall("./images/platformSmall.png")
     bountyStandRight = createBountySpriteSRight("./images/bounty.png")
     theRock = createRock("./images/rocher01.png")
     theTree = createTree("./images/arbre01.png")
     scoreTag = document.getElementById('score');
     player = new Player()
    //  grids = [new Grid()]
// -------------------------------

     platforms = [
        // plateforme 1
        new Platform( {
        x: -1,  // position de la 1ere plateforme sur l'axe X
        y: 515,  // position de la 1ere plateforme sur l'axe Y
        image: platformImage
    }), 
    // plateforme 2
    new Platform( {
        x: platformImage.width - 3, 
        y: 515,
        image: platformImage
    }),

    // Vide //

    // plateforme 3
    new Platform( {
        x: platformImage.width *2 + 200, //  on copie et colle la plateforme qui a -3 et on rajoute la place qu'elle occupe dans le tableau
        y: 515,
        image: platformImage
    }),

// Vide //

// plateforme 4
    new Platform( {
        x: platformImage.width *3 + 400, //  
        y: 515,
        image: platformImage
    }),
    // plateforme 5
    new Platform( {
        x: platformImage.width *4 + 300, //  
        y: 515,
        image: platformImage
    }),
    // Moyenne plateforme en hauteur 1
    new Platform( {
        x: thePlatformSmallTall.width *5 + 2100 , 
        y: 380,
        image: thePlatformSmallTall
    }),

     // Vide //

     // plateforme 6
     new Platform( {
        x: platformImage.width *6 + 400, //  
        y: 515,
        image: platformImage
    }),

     // Vide //

     // plateforme 7
     new Platform( {
        x: platformImage.width *7 + 700, //  
        y: 515,
        image: platformImage
    }),
     // plateforme 8
     new Platform( {
        x: platformImage.width *8 + 700, //  
        y: 515,
        image: platformImage
    }),
     // plateforme 9
     new Platform( {
        x: platformImage.width *9 + 700, //  
        y: 515,
        image: platformImage
    }),

     // Vide //

     // plateforme 10
     new Platform( {
        x: platformImage.width *10 + 700, //  
        y: 515,
        image: platformImage
    }),
    
     // Vide //

    // petite plateforme au sol 1
     new Platform( {
        x: thePlatformSmall.width * 82, //  
        y: 515,
        image: thePlatformSmall
    }),

     // Vide //

      // petite plateforme au sol 2
      new Platform( {
        x: thePlatformSmall.width * 87, //  
        y: 515,
        image: thePlatformSmall
    }),

    // Vide //

     // petite plateforme au sol 3
     new Platform( {
        x: thePlatformSmall.width * 92, //  
        y: 515,
        image: thePlatformSmall
    }),

    // Vide //

     // petite plateforme en hauteur 1
     new Platform( {
        x: thePlatformSmall.width * 94, //  
        y: 400,
        image: thePlatformSmall
    }),

    // Vide //

    // plateforme 11
    new Platform( {
        x: platformImage.width *15 + 300, 
        y: 348,
        image: platformImage
    }),

    // Vide //

     // plateforme 12
     new Platform( {
        x: platformImage.width *16 + 300 , 
        y: 470,
        image: platformImage
    }),
  // plateforme 13
  new Platform( {
    x: platformImage.width *17 + 300 , 
    y: 470,
    image: platformImage
}),
// plateforme 14
new Platform( {
    x: platformImage.width *18 + 300 , 
    y: 470,
    image: platformImage
}),

// vide //

// Moyenne plateforme en hauteur 2
new Platform( {
    x: thePlatformSmallTall.width *65 , 
    y: 550,
    image: thePlatformSmallTall
}),

// vide //

// petite plateforme en hauteur 2
new Platform( {
    x: thePlatformSmall.width * 127,   
    y: 403,
    image: thePlatformSmall
}),

// vide //

// petite plateforme en hauteur 3
new Platform( {
    x: thePlatformSmall.width * 129,   
    y: 330,
    image: thePlatformSmall
}),

// vide //

// petite plateforme en hauteur 4
new Platform( {
    x: thePlatformSmall.width * 126,   
    y: 240,
    image: thePlatformSmall
}),

// vide //

// petite plateforme en hauteur 5
new Platform( {
    x: thePlatformSmall.width * 124,   
    y: 200,
    image: thePlatformSmall
}),

// vide //

// plateforme 15
new Platform( {
    x: platformImage.width *17 + 490, 
    y: 220,
    image: platformImage
}),

// vide //

// petite plateforme en hauteur 6
new Platform( {
    x: thePlatformSmall.width * 131,   
    y: 240,
    image: thePlatformSmall
}),

// vide //

// plateforme 16
new Platform( {
    x: platformImage.width *21, 
    y: 210,
    image: platformImage
}),
// plateforme 17
new Platform( {
    x: platformImage.width *22, 
    y: 210,
    image: platformImage
}),

// Moyenne plateforme en hauteur 3
new Platform( {
    x: thePlatformSmallTall.width *75 , 
    y: 110,
    image: thePlatformSmallTall
}),

// plateforme 18
new Platform( {
    x: platformImage.width *23, 
    y: 210,
    image: platformImage
}),
// plateforme 19
new Platform( {
    x: platformImage.width *24, 
    y: 210,
    image: platformImage
}),

// vide //

// plateforme 20
new Platform( {
    x: platformImage.width *25 + 275, 
    y: 250,
    image: platformImage
}),

// vide //

// ------ L'un sous l'autre -------------------------------------------

// plateforme 21
new Platform( {
    x: platformImage.width *26 + 375, 
    y: 150,
    image: platformImage
}),
// plateforme 22
new Platform( {
    x: platformImage.width *26 + 375, 
    y: 350,
    image: platformImage
}),

// vide //

// petite plateforme en hauteur 7
new Platform( {
    x: thePlatformSmall.width * 177,   
    y: 200,
    image: thePlatformSmall
}),

// vide //

// petite plateforme en hauteur 8
new Platform( {
    x: thePlatformSmall.width * 184,   
    y: 530,
    image: thePlatformSmall
}),

// vide //

// plateforme 23
new Platform( {
    x: platformImage.width *30 - 100, 
    y: 515,
    image: platformImage
}),
    ]



    bountys = [
        
      
    //    bounty 0
        new Bounty( {
                x: 700,  // position de la 1ere plateforme sur l'axe X
                y: 350,  // position de la 1ere plateforme sur l'axe Y    
                image : bountyStandRight
            }),


            //    bounty 1
            new Bounty( {
                x: 2880,  // position de la 1ere plateforme sur l'axe X
                y: 335,  // position de la 1ere plateforme sur l'axe Y    
                image : bountyStandRight
            }),    
            //    bounty 2      
            new Bounty( {
                x: 2930,  // position de la 1ere plateforme sur l'axe X
                y: 335,  // position de la 1ere plateforme sur l'axe Y    
                image : bountyStandRight
            }),                  
           

            //    bounty 3
            new Bounty( {
                x: 7791,  // position de la 1ere plateforme sur l'axe X
                y: 302,  // position de la 1ere plateforme sur l'axe Y    
                image : bountyStandRight
            }),                  
      //    bounty 4
      new Bounty( {
        x: 7851,  // position de la 1ere plateforme sur l'axe X
        y: 302,  // position de la 1ere plateforme sur l'axe Y    
        image : bountyStandRight
    }),     
    //    bounty 5
    new Bounty( {
        x: 7911,  // position de la 1ere plateforme sur l'axe X
        y: 302,  // position de la 1ere plateforme sur l'axe Y    
        image : bountyStandRight
    }),                  
    //    bounty 6
    new Bounty( {
        x: 7971,  // position de la 1ere plateforme sur l'axe X
        y: 302,  // position de la 1ere plateforme sur l'axe Y    
        image : bountyStandRight
    }),                  
    //    bounty 7
    new Bounty( {
        x: 8031,  // position de la 1ere plateforme sur l'axe X
        y: 302,  // position de la 1ere plateforme sur l'axe Y    
        image : bountyStandRight
    }),                  
    //    bounty 8
    new Bounty( {
        x: 8091,  // position de la 1ere plateforme sur l'axe X
        y: 302,  // position de la 1ere plateforme sur l'axe Y    
        image : bountyStandRight
    }),   
    
    
    //    bounty 9
    new Bounty( {
        x: 8435,  // position de la 1ere plateforme sur l'axe X
        y: 167,  // position de la 1ere plateforme sur l'axe Y    
        image : bountyStandRight
    }),   
    //    bounty 10
    new Bounty( {
        x: 8835,  // position de la 1ere plateforme sur l'axe X
        y: 100,  // position de la 1ere plateforme sur l'axe Y    
        image : bountyStandRight
    }),  
    
    
      //    bounty 11
      new Bounty( {
        x: 12048,  // position de la 1ere plateforme sur l'axe X
        y: 154,  // position de la 1ere plateforme sur l'axe Y    
        image : bountyStandRight
    }),          
 //    bounty 12
 new Bounty( {
    x: 12108,  // position de la 1ere plateforme sur l'axe X
    y: 154,  // position de la 1ere plateforme sur l'axe Y    
    image : bountyStandRight
}),          
 //    bounty 13
 new Bounty( {
    x: 12168,  // position de la 1ere plateforme sur l'axe X
    y: 154,  // position de la 1ere plateforme sur l'axe Y    
    image : bountyStandRight
}),          

//    bounty 13
new Bounty( {
    x: 14370,  // position de la 1ere plateforme sur l'axe X
    y: 485,  // position de la 1ere plateforme sur l'axe Y    
    image : bountyStandRight
}),          
        ] 

  

      genericObjects = [
        new GenericObject({
            x: 0,
            y: 0,
            image:  theSky
        }),
        new GenericObject({
            x: 0,
            y: 0,
            image: theHills
        }),
    ]
    

rocks = [
    new Rock ({
      x : 600,
      y : 470,
      image:  theRock

    })
]



trees = [
    new Tree ({
      x : 500,
      y : 470,
      image:  theTree

    })
]
  
    scrollOffset = 0
    
}

// -------------------------------







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

   bountys.forEach(( bountyStandRight) => {
    bountyStandRight.draw()
})

rocks.forEach(( theRock) => {
    theRock.draw()
})

trees.forEach(( theTree) => {
    theTree.draw()
})

 player.update()
   

// Pour faire aller le carré a droite ou a gauche avec le suivis du canvas
    if (keys.ArrowRight.pressed && player.position.x < 400) {  // 400
        player.velocity.x = player.speed
    } else if(
        (keys.ArrowLeft.pressed && player.position.x > 400) || // 100
        (keys.ArrowLeft.pressed && scrollOffset === 0 &&
     player.position.x > 0 )
)  {  
        player.velocity.x = -player.speed
} else {
    player.velocity.x = 0



    if(keys.ArrowUp.pressed) {
        scrollVertical += player.position.y
           }


    // permet a mario de pouvoir se déplacer sur les plateformes sans que celles ci ne le suivent
    if(keys.ArrowRight.pressed) {
        scrollOffset += player.speed 
       
        platforms.forEach((platform) => {
            platform.position.x -= player.speed
           })

           genericObjects.forEach((genericObject) => {
            genericObject.position.x -= player.speed * 0.66
           })

           bountys.forEach((createBountySpriteSRight) => {
            createBountySpriteSRight.position.x -= player.speed
           })

           rocks.forEach((createRock) => {
            createRock.position.x -= player.speed
           })

           trees.forEach((createTree) => {
            createTree.position.x -= player.speed
           })
 
        //    grids.forEach((champiB) => {
        //     champiB.position.x -= player.speed
        //    })
 





 } else if (keys.ArrowLeft.pressed && scrollOffset > 0) {
    scrollOffset -= player.speed

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

     }

}





// Pour faire sauter le carré sur une plateforme
platforms.forEach((platform) => {
if(
    player.position.y + player.height <= platform.position.y && 
    player.position.y + player.height + player.velocity.y >= platform.position.y &&
    player.position.x + player.width >= platform.position.x + 23  &&  // ajustement des bords coté gauche de chaque plateformes lorsque mario tombe.
    player.position.x + player.width  <= platform.position.x + platform.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
    ) {
    player.velocity.y = 0
}
})


// Pour faire sauter mario sur un rocher
rocks.forEach((rock) => {
    if(
        player.position.y + player.height >= rock.position.y + 20   && 
        player.position.y + player.height + player.velocity.y >= rock.position.y  &&        
        player.position.x + player.width >= rock.position.x +20   &&  // ajustement des bords coté gauche de chaque rochers lorsque mario tombe.
        player.position.x + player.width  <= rock.position.x + rock.width + 35  // ajustement des bords coté droit de chaque plateformes lorsque mario tombe.
        ) {
        player.velocity.y = 0
    }
    })
    // Pour bloquer mario devant un rocher coté gauche
    rocks.forEach((rock) => {
        if(     
            player.position.x + player.width + player.velocity.x  <= rock.position.x + rock.width    && 
            player.position.x + player.width  + player.velocity.x >= rock.position.x + 27   && 
            player.position.y + player.height >= rock.position.y + 20   && 
            player.position.y + player.height + player.velocity.y >= rock.position.y     
            ) {
            player.velocity.x = -10 
        
        } 
        })
          // Pour bloquer mario devant un rocher coté droit
        rocks.forEach((rock) => {
            if(     
                player.position.x + player.width + player.velocity.x  <= rock.position.x + rock.width + 23    &&
                player.position.x + player.width + player.velocity.x >= rock.position.x + rock.width   && 
                player.position.y + player.height >= rock.position.y + 20   && 
                player.position.y + player.height + player.velocity.y >= rock.position.y     
                ) {
                player.velocity.x = 10 
            
            } 
            })


//   -------------------------------------------------------






if (scrollOffset < 20000) {
    //    console.log();
}




// si mario dépasse la limite du canvas en hauteur, il est propulsé en bas
if (player.position.y < canvas.height - 576) {
    player.velocity.y = +10
}


// condition de victoire
if (scrollOffset > 20000) {
    console.log('you win');
}


// // si mario tombe d'une plateforme, le jeu recommence
if (player.position.y > canvas.height) {
    init()
}


//  ______________________________________________________________________________________________________
// champiBleu
// grids.forEach((grid,indexGrid) =>{
//     grid.update();
//     grid.invaders.forEach((invader)=>{
//         invader.update({velocity:grid.velocity});
        
//     })     
// })
//  ______________________________________________________________________________________________________


// deleteBounty()

   
}
init()
animate() 


















// // Pour enlever les pièces d'or au passage de mario
// bountys.forEach(() => {

//     function deleteBounty() {
//     //    bounty 0
//         if(
//              ( //  scrollOffset == 273 ||
//                 scrollOffset == 280 ||
//                 scrollOffset == 287 ||
//                 scrollOffset == 294 ||
//                 scrollOffset == 301 || 
//                 scrollOffset == 308 ||
//                 scrollOffset == 315
//             ) 
//             &&
//            (  player.position.y <= 320 &&
//               player.position.y >= 309.5
//           ) 
//           ) {
//             delete  bountys[0];
//              }   
//         //    bounty 1
//         if(
//             (  
//                 scrollOffset == 2464 ||
//                 scrollOffset == 2471 ||
//                 scrollOffset == 2478 ||
//                 scrollOffset == 2492
//             ) 
//             &&
//            (  player.position.y <= 324.5 &&
//               player.position.y >= 285
//           ) 
//           ) {     
//             delete  bountys[1]        
//         }
//         //    bounty 2
//         if(
//             (   scrollOffset == 2513 ||
//                 scrollOffset == 2520 ||
//                 scrollOffset == 2527 ||
//                 scrollOffset == 2534 ||
//                 scrollOffset == 2541
//             ) 
//             &&
//            (  player.position.y <= 324.5 &&
//               player.position.y >= 285
//           ) 
//           ) {
//             delete  bountys[2]
//         }
     
     
//         //    bounty 3
//      if(     
//         (   scrollOffset == 7371 ||
//             scrollOffset == 7378 ||
//             scrollOffset == 7385 ||
//             scrollOffset == 7392 ||
//             scrollOffset == 7399
//         ) 
//         &&
//        (  player.position.y <= 292.5 &&
//           player.position.y >= 250
//       ) 
//       ) {
//         delete  bountys[3]
//     }
//     //    bounty 4
//     if(     
//         (   scrollOffset == 7434 ||
//             scrollOffset == 7441 ||
//             scrollOffset == 7448 ||
//             scrollOffset == 7455 ||
//             scrollOffset == 7462
//         ) 
//         &&
//        (  player.position.y <= 292.5 &&
//           player.position.y >= 250
//       ) 
//       ) {
//         delete  bountys[4]
//     }
//     //    bounty 5
//     if(     
//         (   scrollOffset == 7490 ||
//             scrollOffset == 7497 ||
//             scrollOffset == 7504 ||
//             scrollOffset == 7511 ||
//             scrollOffset == 7518
//         ) 
//         &&
//        (  player.position.y <= 292.5 &&
//           player.position.y >= 250
//       ) 
//       ) {
//         delete  bountys[5]
//     }
//     //    bounty 6
//     if(     
//         (   scrollOffset == 7553 ||
//             scrollOffset == 7560 ||
//             scrollOffset == 7567 ||
//             scrollOffset == 7574 ||
//             scrollOffset == 7581
//         ) 
//         &&
//        (  player.position.y <= 292.5 &&
//           player.position.y >= 250
//       ) 
//       ) {
//         delete  bountys[6]
//     }
//     //    bounty 7
//     if(     
//         (   scrollOffset == 7609 ||
//             scrollOffset == 7616 ||
//             scrollOffset == 7623 ||
//             scrollOffset == 7630 ||
//             scrollOffset == 7637
//         ) 
//         &&
//        (  player.position.y <= 292.5 &&
//           player.position.y >= 250
//       ) 
//       ) {
//         delete  bountys[7]
//     }
//     //    bounty 8
//     if(     
//         (   scrollOffset == 7679 ||
//             scrollOffset == 7686 ||
//             scrollOffset == 7693 ||
//             scrollOffset == 7700 ||
//             scrollOffset == 7707
//         ) 
//         &&
//        (  player.position.y <= 292.5 &&
//           player.position.y >= 250
//       ) 
//       ) {
//         delete  bountys[8]
//     }
    
//     //    bounty 9
//     if(     
//         (   scrollOffset == 8001 ||
//             scrollOffset == 8008 ||
//             scrollOffset == 8015 ||
//             scrollOffset == 8022 ||
//             scrollOffset == 8029 ||
//             scrollOffset == 8036 ||
//             scrollOffset == 8043 ||
//             scrollOffset == 8050 
            
//         ) 
//         &&
//        (  player.position.y <= 167 &&
//           player.position.y >= 127
//       ) 
//       ) {
//         delete  bountys[9]
//     }
    
//     //    bounty 10
//     if(     
//         (   
//             scrollOffset == 8414 ||
//             scrollOffset == 8421 ||
//             scrollOffset == 8428 ||
//             scrollOffset == 8435 ||
//             scrollOffset == 8442 
            
//         ) 
//         &&
//        (  player.position.y <= 140 &&
//           player.position.y >= 100
//       ) 
//       ) {
//         delete  bountys[10]
//     }
//     //    bounty 11
//     if(     
//         (   
//             scrollOffset == 11634 ||
//             scrollOffset == 11641 ||
//             scrollOffset == 11648 ||
//             scrollOffset == 11655 ||
//             scrollOffset == 11662 
            
//         ) 
//         &&
//        (  player.position.y <= 154.5 &&
//           player.position.y >= 114
//       ) 
//       ) {
//         delete  bountys[11]
//     }
    
    
//     //    bounty 12
//     if(     
//         (   
//             scrollOffset == 11683 ||
//             scrollOffset == 11690 ||
//             scrollOffset == 11697 ||
//             scrollOffset == 11704 ||
//             scrollOffset == 11711 
            
//         ) 
//         &&
//        (  player.position.y <= 154.5 &&
//           player.position.y >= 114
//       ) 
//       ) {
//         delete  bountys[12]
//     }
    
//     //    bounty 13
//     if(     
//         (   
//             scrollOffset == 11746 ||
//             scrollOffset == 11753 ||
//             scrollOffset == 11760 ||
//             scrollOffset == 11767 ||
//             scrollOffset == 11774 
            
//         ) 
//         &&
//        (  player.position.y <= 154.5 &&
//           player.position.y >= 114
//       ) 
//       ) {
//         delete  bountys[13]
//     }
    
//     //    bounty 14
//     if(     
//         (   
//             scrollOffset == 13944 ||
//             scrollOffset == 13951 ||
//             scrollOffset == 13958 ||
//             scrollOffset == 13965 ||
//             scrollOffset == 13972 
            
//         ) 
//         &&
//        (  player.position.y <= 474.5 &&
//           player.position.y >= 434
//       ) 
//       ) {
//         delete  bountys[14]
//     }
    
// }







// ----------------------------- CLAVIERS ----------------------------------


// Paramétrage des touches enfoncées
window.addEventListener('keydown', (event) => {
   switch (event.key) {
        case 'ArrowLeft' :
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
        case 'ArrowUp' :
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
         case 'ArrowLeft' :
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

         case 'ArrowUp' :
            keys.ArrowUp.pressed = false;

        break
        case 'ArrowDown':
           
        break
     }
 })

 c.imageSmoothingEnabled = true