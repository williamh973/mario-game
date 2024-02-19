export function createImageBomb() {
    const bomb = new Image();
    bomb.src = "../../images/bomb.png";
    return bomb;
};

export let theBomb = createImageBomb("../../images/bomb.png");