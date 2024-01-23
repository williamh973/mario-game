import { canvasParams } from "../../canvas.js";


function createPlatform() {
    const platform = new Image()
    platform.src = "../../../images/platform1.png"
    return platform
}

function createPlatformSmallTall() {
    const platformSmallTall = new Image()
    platformSmallTall.src = "../../images/platformSmallTall.png"
    return platformSmallTall
}

function createPlatformSmall() {
    const platformSmall = new Image()
    platformSmall.src = "../../images/platformSmall.png"
    return platformSmall
}


function createplatform02() {
    const platform02 = new Image()
    platform02.src = "../../images/platform2.png"
    return platform02
}

function createPlatformMedium1() {
    const platformMedium1 = new Image()
    platformMedium1.src = "../../images/platform4.png"
    return platformMedium1
}

function createPlatformMedium2() {
    const platformMedium2 = new Image()
    platformMedium2.src = "../../images/platform5.png"
    return platformMedium2
}

function createPlatformMedium3() {
    const platformMedium3 = new Image()
    platformMedium3.src = "../../images/platform6.png"
    return platformMedium3
}

function createPlatformMedium4() {
    const platformMedium4 = new Image()
    platformMedium4.src = "../../images/platform7.png"
    return platformMedium4
}

function createPlatformMedium5() {
    const platformMedium5 = new Image()
    platformMedium5.src = "../../images/platform8.png"
    return platformMedium5
}

function createPlatformMedium6() {
    const platformMedium6 = new Image()
    platformMedium6.src = "../../images/platform9.png"
    return platformMedium6
}

function createPlatformPlate() {
    const platformPlate = new Image()
    platformPlate.src = "../../images/platform10.png"
    return platformPlate
}

function createPlatform11() {
    const platform11 = new Image()
    platform11.src = "../../images/platform11.png"
    return platform11
}

function createPlatform12() {
    const platform12 = new Image()
    platform12.src = "../../images/platform12.png"
    return platform12
}


export let thePlatform494x72 = createPlatform("../../images/platform1.png");
export let thePlatform02 = createplatform02("../../images/platform2.png")
export let theplateform4 = createPlatformMedium1("../../images/plateform4.png")
export let theplateform5 = createPlatformMedium2("../../images/plateform5.png")
export let theplateform6 = createPlatformMedium3("../../images/plateform6.png")
export let theplateform7 = createPlatformMedium4("../../images/plateform7.png")
export let theplateform8 = createPlatformMedium5("../../images/plateform8.png")
export let theplateform84x72 = createPlatformMedium6("../../images/plateform9.png")
export let theplateform10 = createPlatformPlate("../../images/plateform10.png")
export let theplateform11 = createPlatform11("../../images/plateform11.png")
export let theplateform202x56 = createPlatform12("../../images/plateform12.png")
export let thePlatform150x72 = createPlatformSmallTall("../../images/platformSmallTall.png")
export let thePlatformSmall = createPlatformSmall("../../images/platformSmall.png") 



export class Platform {
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
        canvasParams.c.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            )
    }
    overlapsWith(otherPlatform) {
       return (
           this.position.x < otherPlatform.position.x + otherPlatform.width &&
           this.position.x + this.width > otherPlatform.position.x &&
           this.position.y < otherPlatform.position.y + otherPlatform.height &&
           this.position.y + this.height > otherPlatform.position.y
       );
    }
    placePlatform494x72AwayFromPlatform494x72(referencePlatform) {
          let randomFactorX = Math.random(); 
          let randomNumberX = Math.floor(randomFactorX * (100)) + 100;

          let randomFactorY = Math.random(); 
          let randomNumberY = Math.floor(randomFactorY * (76)) + 100;
          
          this.position.x = referencePlatform.position.x + randomNumberX;
          this.position.y = referencePlatform.position.y + randomNumberY;
    }
     placePlatform84x72AwayFromPlatform84x72(referencePlatform) {
          let randomFactorX = Math.random(); 
          let randomNumberX = Math.floor(randomFactorX * (100)) + 100;

          let randomFactorY = Math.random(); 
          let randomNumberY = Math.floor(randomFactorY * (76)) + 100;
          
          this.position.x = referencePlatform.position.x + randomNumberX;
          this.position.y = referencePlatform.position.y + randomNumberY;
    }
    placePlatform84x72AwayFromPlatform150x72(referencePlatform) {
          let randomFactorX = Math.random(); 
          let randomNumberX = Math.floor(randomFactorX * (100)) + 100;

          let randomFactorY = Math.random(); 
          let randomNumberY = Math.floor(randomFactorY * (76)) + 75;
          
          this.position.x = referencePlatform.position.x + randomNumberX;
          this.position.y = referencePlatform.position.y + randomNumberY;
    }
    placePlatform84x72AwayFromPlatform202x56(referencePlatform) {
        let randomFactorX = Math.random(); 
        let randomNumberX = Math.floor(randomFactorX * (100)) + 100;

        let randomFactorY = Math.random(); 
        let randomNumberY = Math.floor(randomFactorY * (70)) - 130;
        
        this.position.x = referencePlatform.position.x + randomNumberX;
        this.position.y = referencePlatform.position.y - 70;
    }
    placePlatform84x72AwayFromPlatform494x72(referencePlatform) {
      let randomFactorX = Math.random(); 
      let randomNumberX = Math.floor(randomFactorX * (100)) + 100;
  
      let randomFactorY = Math.random(); 
      let randomNumberY = Math.floor(randomFactorY * (20)) - 100;
      
      this.position.x = referencePlatform.position.x + randomNumberX;
      this.position.y = referencePlatform.position.y - randomNumberY;
    }
};

