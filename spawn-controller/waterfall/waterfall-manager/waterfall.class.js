import { canvasParams } from "../../../canvas.js";
import { createWatefall, waterfallStand } from "./waterfall-assets.js";

export class Waterfall {
  constructor() {
    (this.position = {
      x: 0,
      y: 0,
    }),
      (this.width = 95);
    this.height = 179;
    this.image = new Image();
    this.image = createWatefall(waterfallStand);
    this.scale = 1.5;
    this.framesMax = 8;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 8;
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
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale,
    );
  }
  animateFrames() {
    this.framesElapsed++;

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }
  update() {
    this.draw();
    this.animateFrames();
  }
  overlapsWith(platform) {
    return (
      this.position.x < platform.position.x + platform.width &&
      this.position.x + this.width > platform.position.x &&
      this.position.y < platform.position.y + platform.height &&
      this.position.y + this.height > platform.position.y
    );
  }
  placeWaterfallOnPlatform630x217(platform) {
    this.position.x = platform.position.x + platform.width / 2.17;
    this.position.y = platform.position.y - 5;
  }
  placeWaterfallAwayFromOtherWaterfall(otherObject) {
    this.position.x = otherObject.position.x - this.width;
  }
}
