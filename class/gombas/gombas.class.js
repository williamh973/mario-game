import { canvasParams } from "../../canvas.js";


class Goomba {
    constructor() {
        this.position = {
            x: 5780,
            y: 460
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
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
      if (this.framesCurrent < this.framesMax - 1 )
     {
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
class Goomba02 {
    constructor() {
        this.position = {
            x: 9480,
            y: 413
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
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
      if (this.framesCurrent < this.framesMax - 1 )
     {
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
class Goomba03 {
    constructor() {
        this.position = {
            x: 11900,
            y: 460
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
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
      if (this.framesCurrent < this.framesMax - 1 )
     {
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
class Goomba04 {
    constructor() {
        this.position = {
            x: 13620,  
            y: 296
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
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
      if (this.framesCurrent < this.framesMax - 1 )
     {
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
class Goomba05 {
    constructor() {
        this.position = {
            x: 20010,  
            y: 400
        },
        this.width = 69
        this.height = 60
        this.image = new Image()
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
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
      if (this.framesCurrent < this.framesMax - 1 )
     {
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


export let goomba01 = new Goomba();
export let goomba02 = new Goomba02();
export let goomba03 = new Goomba03();
export let goomba04 = new Goomba04();
export let goomba05 = new Goomba05();

