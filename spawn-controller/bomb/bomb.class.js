import { canvasParams } from "../../canvas.js"
import { createImageBomb, theBomb } from "./bomb-asset.js"
import { gravity } from "../../app.js";


export class Bomb {
    constructor({x, y}) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x : 10,
            y : 1
        }
        this.image = createImageBomb(theBomb)
        this.width = 25
        this.height = 25
        this.scale = 1
    }

    draw() {
        canvasParams.c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width * this.scale,
            this.height * this.scale
        )
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
            }
    }

    reverseDirection() {
        this.velocity.x = -5
    }

    collide(otherObject) {
        return (
            this.position.y + this.height >= otherObject.position.y &&
            this.position.y <= otherObject.position.y + otherObject.height &&
            this.position.x + this.width >= otherObject.position.x &&
            this.position.x <= otherObject.position.x + otherObject.width
        );
    };

    drawDebugCollisionSquare() {
        const ctx = canvasParams.c;
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;

        ctx.rect(
            this.position.x,
            this.position.y,
            this.width * this.scale,
            this.height * this.scale
        );

        ctx.stroke();
        ctx.closePath();
    }
}