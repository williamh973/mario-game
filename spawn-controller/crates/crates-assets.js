export function createCrate() {
  const crate = new Image();
  crate.src = "../../assets/images/caisse.png";
  return crate;
}

export function createCrateSmall() {
  const crateSmall = new Image();
  crateSmall.src = "../../assets/images/crate70x70.png";
  return crateSmall;
}

export let theCrate = createCrate("../../assets/images/crate70x70.png");
export let thecrateSmall = createCrateSmall(
  "../../assets/images/crate40x40.png",
);
