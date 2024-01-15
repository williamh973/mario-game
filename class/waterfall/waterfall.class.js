import { canvasParams } from "../../canvas.js";

function createWatefall() {
    const waterfallStand = new Image()
    waterfallStand.src = "../../images/waterfallSprite.png"
    return waterfallStand
}

export let waterfallStand = createWatefall("../../images/waterfallSprite.png")


export class Waterfall {
    constructor() {
        this.position = {
            x: 20267,
            y: 310
        },
        this.width = 95
        this.height = 179
        this.image = new Image()
        this.image.src = 'images/waterfallSprite.png'
        this.scale = 1.5
        this.framesMax = 8
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 8
    }
    draw() {
        canvasParams.c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height, 
      this.position.x,
      this.position.y,
      (this.image.width / this.framesMax ) * this.scale,
      this.image.height * this.scale
      )
    }
    animateFrames() {
      this.framesElapsed++
      
      if (this.framesElapsed % this.framesHold === 0) {
          if (this.framesCurrent < this.framesMax - 1) {
            this.framesCurrent++
        } else {
            this.framesCurrent = 0
        }  
    }
}
   update() {
       this.draw()
      this.animateFrames()
    }
}



export class Waterfall02 {
    constructor() {
        this.position = {
            x: 20363,
            y: 310
        },
        this.width = 95
        this.height = 179
        this.image = new Image()
        this.image.src = 'images/waterfallSprite.png'
        this.scale = 1.5
        this.framesMax = 8
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 8
    }
    draw() {
        canvasParams.c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height, 
            this.position.x,
            this.position.y,
            (this.image.width / this.framesMax ) * this.scale,
   this.image.height * this.scale
   )
}
animateFrames() {
    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
        if (this.framesCurrent < this.framesMax - 1) {
            this.framesCurrent++
        } else {
            this.framesCurrent = 0
        }  
   }
}
update() {
    this.draw()
    this.animateFrames()
}
}


export let waterfall = new Waterfall();
export let waterfall02 = new Waterfall02();