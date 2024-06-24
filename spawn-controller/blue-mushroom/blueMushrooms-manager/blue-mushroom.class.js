import { canvasParams } from "../../../canvas.js";
import {
  createMushroomBSprite,
  mushroombSprite,
} from "./blue-mushroom-assets.js";

export class BlueMushroom {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.sprites = {
      stand: {
        right: createMushroomBSprite(mushroombSprite),
        left: createMushroomBSprite(mushroombSprite),
        cropWidth: 61,
        width: 60,
      },
    };
    this.width = 60;
    this.height = 60;
    this.image = createMushroomBSprite(mushroombSprite);
    this.frames = 0;
    this.platform = null;
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 61;
  }

  draw() {
    canvasParams.c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      60,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }

  update() {
    this.frames++;
    if (
      this.frames > 15 &&
      (this.currentSprite === this.sprites.stand.right ||
        this.currentSprite === this.sprites.stand.left)
    )
      this.frames = 0;
    this.draw();
  }

  overlapsWith(otherObject) {
    return (
      this.position.x < otherObject.position.x + otherObject.width &&
      this.position.x + this.width > otherObject.position.x &&
      this.position.y < otherObject.position.y + otherObject.height &&
      this.position.y + this.height > otherObject.position.y
    );
  }

  placeBlueMushroomOnRandomPlatform494x72(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(
      randomFactorX * (referencePlatform.width / 1.5),
    );

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - this.height + 5;
  }

  placeBlueMushroomOnRandomPlatform150x72(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(
      randomFactorX * (referencePlatform.width / 3),
    );

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - this.height + 5;
  }

  placeBlueMushroomOnRandomPlatform202x56(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(
      randomFactorX * (referencePlatform.width / 2),
    );

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - this.height + 5;
  }

  placeBlueMushroomAwayFromRedMushroom(referenceRedMushroom) {
    this.position.x = referenceRedMushroom.position.x + this.width;
  }

  drawDebugCollisionSquare() {
    const ctx = canvasParams.c;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 1;

    ctx.rect(this.position.x, this.position.y, this.width, this.height);

    ctx.stroke();
    ctx.closePath();
  }
}
