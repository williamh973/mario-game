export function createWatefall() {
  const waterfallStand = new Image();
  waterfallStand.src = "../../assets/images/waterfallSprite.png";
  return waterfallStand;
}

export let waterfallStand = createWatefall(
  "../../assets/images/waterfallSprite.png",
);
