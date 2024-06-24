import { player } from "../../../keyboard.js";
import { showParticlesRedMushroom } from "../../particles/particles-manager/particle-redMushroom.js";
import { addLife } from "../../../player-actions/player-interactions.js";
import { redMushroomList } from "./redMushroom-dispach.js";

export function takeRedMushroom() {
  redMushroomList.forEach((redMushroom) => {
    if (
      player.position.y + player.height >= redMushroom.position.y &&
      player.position.y <= redMushroom.position.y + redMushroom.height - 15 &&
      player.position.x + player.width >= redMushroom.position.x + 30 &&
      player.position.x <= redMushroom.position.x + redMushroom.width + 30
    ) {
      deleteRedMushroom(redMushroom);
      showParticlesRedMushroom();
      addLife();
    }
  });
}

function deleteRedMushroom(redMushroom) {
  const foundIndex = redMushroomList.indexOf(redMushroom);

  if (foundIndex !== -1) {
    redMushroomList.splice(foundIndex, 1);
  }
}
