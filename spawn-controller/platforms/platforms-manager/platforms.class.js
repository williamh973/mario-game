import { canvasParams } from "../../../canvas.js";

export class Platform {
  constructor({ x, y, image, scale }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.scale = scale;
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
    let randomNumberX = Math.floor(randomFactorX * 100) + 100;

    let randomFactorY = Math.random();
    let randomNumberY = Math.floor(randomFactorY * 76) + 100;

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y + randomNumberY;
  }

  placePlatform84x72AwayFromPlatform84x72(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 100) + 100;

    let randomFactorY = Math.random();
    let randomNumberY = Math.floor(randomFactorY * 76) + 100;

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y + randomNumberY;
  }

  placePlatform500x43AwayFromPlatform500x43(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 100);

    let randomFactorY = Math.random();
    let randomNumberY = Math.floor(randomFactorY * 25) + 75;

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y + randomNumberY;
  }

  placePlatform630x217AwayFromPlatform630x217(referencePlatform) {
    this.position.y = referencePlatform.position.y - this.height + 12;
  }

  placePlatform84x72AwayFromPlatform150x72(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 100) + 100;

    let randomFactorY = Math.random();
    let randomNumberY = Math.floor(randomFactorY * 76) + 75;

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y + randomNumberY;
  }

  placePlatform84x72AwayFromPlatform202x56(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 100) + 100;

    let randomFactorY = Math.random();
    let randomNumberY = Math.floor(randomFactorY * 50) - 100;

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - randomNumberY;
  }

  placePlatform84x72AwayFromPlatform494x72(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 100) + 100;

    let randomFactorY = Math.random();
    let randomNumberY = Math.floor(randomFactorY * 300) + 150;

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - randomNumberY;
  }

  placePlatform202x56AwayFromPlatform202x56(referencePlatform) {
    this.position.x = referencePlatform.position.x + 438;
  }

  placePlatform202x56AwayFromPlatform494x72(referencePlatform) {
    let randomFactorX = Math.random();
    let randomNumberX = Math.floor(randomFactorX * 180) + 70;

    let platform202x56Height = 56;

    this.position.x = referencePlatform.position.x + randomNumberX;
    this.position.y = referencePlatform.position.y - platform202x56Height;
  }

  placePlatform202x56OnPlatform630x217(referencePlatform) {
    this.position.x = referencePlatform.position.x - 3;
    this.position.y = referencePlatform.position.y - this.height;
  }

  placePlatform158x78OnLastPlatformList494x72(referencePlatform) {
    this.position.x =
      referencePlatform.position.x + referencePlatform.width - this.width;
    this.position.y = referencePlatform.position.y - this.height;
  }

  placePlatform105x73OnPlatformList158x78(referencePlatform) {
    this.position.x =
      referencePlatform.position.x + referencePlatform.width - this.width + 15;
    this.position.y = referencePlatform.position.y - this.height + 2;
  }
}
