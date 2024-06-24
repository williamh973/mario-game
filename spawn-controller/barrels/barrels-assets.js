export function createBarrel() {
  const barrel = new Image();
  barrel.src = "../../assets/images/Barrel.png";
  return barrel;
}

export function createBarrel02() {
  const barrel02 = new Image();
  barrel02.src = "../../assets/images/Barrel02.png";
  return barrel02;
}

export let theBarrel = createBarrel("../../assets/images/Barrel.png");
export let theBarrel02 = createBarrel02("../../assets/images/Barrel02.png");
