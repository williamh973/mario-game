import { canvasParams } from "../../../canvas.js";
import { player } from "../../../keyboard.js";

export class Cloud {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    canvasParams.c.drawImage(this.image, this.position.x, this.position.y);
  }

  movementOnLeft() {
    const speedAdjust = 50;
    this.position.x -= player.speed / speedAdjust;
  }
}
