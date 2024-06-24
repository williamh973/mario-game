import { canvasParams } from "../../../canvas.js";

export class Bush {
  constructor({ image }) {
    this.position = {
      x: 0,
      y: 0,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.scale = 0.65;
  }
  draw() {
    canvasParams.c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.image.width * this.scale,
      this.image.height * this.scale,
    );
  }

  placeBushOnRandomPlatform494x72(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(
      randomFactorX * (referencePlatform.width - 50) + 50,
    );

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - this.height + 40;
  }

  placeBushOnRandomPlatform202x56(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 50 + 20);

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - this.height + 40;
  }

  overlapsWith(otherObject) {
    return (
      this.position.x < otherObject.position.x + otherObject.width &&
      this.position.x + this.width > otherObject.position.x &&
      this.position.y < otherObject.position.y + otherObject.height &&
      this.position.y + this.height > otherObject.position.y
    );
  }

  placeBushAwayFromOtherBush(otherObject) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 50 + 20);

    this.position.x = otherObject.position.x + randomNumberX;
  }

  repositionBushOnOtherPlatform(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(
      randomFactorX * (referencePlatform.width - 20) + 20,
    );

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - this.height + 40;
  }

  drawDebugCollisionSquare() {
    const ctx = canvasParams.c;
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;

    ctx.rect(
      this.position.x,
      this.position.y,
      this.width * this.scale,
      this.height * this.scale,
    );

    ctx.stroke();
    ctx.closePath();
  }
}
