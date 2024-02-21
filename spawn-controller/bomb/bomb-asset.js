export function createImageBomb() {
    const bomb = new Image();
    bomb.src = "../../assets/images/bomb.png";
    return bomb;
};

export let theBomb = createImageBomb("../../assets/images/bomb.png");