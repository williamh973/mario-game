import { gravity } from "../../../app.js";
import { canvasParams } from "../../../canvas.js";
import { createBoombaSpriteLeft, createBoombaSpriteRight, goombaSpriteLeft, goombaSpriteRight } from "./gombas-assets.js";


export class Goomba {
    constructor() {
        this.speed = 1
        this.position = {
            x: 0,
            y: 0
        },
        this.velocity = {
         x: 0,
         y: 0
        },
        this.width = 60
        this.height = 60
        this.scale = 1
        this.framesMax = 5
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 10
        this.sprites = {
           right : createBoombaSpriteRight(goombaSpriteRight),
           left : createBoombaSpriteLeft(goombaSpriteLeft)
         }
         this.image = this.sprites.right
         this.onPlatform = null
         this.isMovingRight = true
         this.isShooted = false 
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
      
      this.position.y += this.velocity.y 

      if (this.isShooted) {
        this.velocity.y += gravity * 1.5
      }
   }
      
   shooted() {
      this.isShooted = true;
   }

   overlapsWith(otherObject) {
      return (
          this.position.x < otherObject.position.x + otherObject.width &&
          this.position.x + this.width > otherObject.position.x &&
          this.position.y < otherObject.position.y + otherObject.height &&
          this.position.y + this.height > otherObject.position.y
      );
   }

   placeGombasnRandomplatformList500x43(referencePlatform) {
      let randomFactorX = Math.random(); 
      let randomNumberX = Math.floor(randomFactorX * (referencePlatform.width - this.width / 1.2));
   
      this.position.x = referencePlatform.position.x + randomNumberX;
      this.position.y = referencePlatform.position.y - this.height + 3;
   }

   moving() {
      if (this.isMovingRight) {
      
         if (this.position.x + this.width < this.onPlatform.position.x + this.onPlatform.width) {
             this.image = this.sprites.right;
             this.position.x += this.speed;
         } else {
            this.isMovingRight = false;
         }
      
      } else {
         if (this.position.x > this.onPlatform.position.x) {
             this.image = this.sprites.left;
             this.position.x -= this.speed;
         } else {
             this.isMovingRight = true;
         }
     }
   }

   placeGoombaAwayFromOtherGoomba(otherGoomba) {
     this.position.x = otherGoomba.position.x + otherGoomba.width
   }

   drawDebugCollisionSquare() {
        const ctx = canvasParams.c;
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;

        ctx.rect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

        ctx.stroke();
        ctx.closePath();
    }
}
