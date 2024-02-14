 import { canvasParams } from "../../../canvas.js";
 
 export class Particle {
    constructor({position, velocity, radius, color}) {
        this.position = position
        this.velocity = velocity
        this.radius = radius
        this.color = color
        this.opacity = 1
    }
    draw() {
        canvasParams.c.save();
        canvasParams.c.globalAlpha = this.opacity;                         
        canvasParams.c.beginPath();
        canvasParams.c.fillStyle = this.color;
        canvasParams.c.arc( this.position.x, this.position.y , this.radius, 0, Math.PI * 2 )
        canvasParams.c.fill()
        canvasParams.c.closePath()
        canvasParams.c.restore();
    }
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
            if(this.opacity > 0){
                this.opacity -= 0.01;
            }
        this.draw()
    }
 }