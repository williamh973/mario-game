import {
  Rock,
  theRock,
  theRock02,
  theRock03,
  theRock04,
  thebigRock,
} from "../../class/rocks/rocks.class.js";

export let rocks = [];

rocks = [
  new Rock({
    x: 800,
    y: 470,
    image: theRock,
  }),

  new Rock({
    x: 2300,
    y: 425,
    image: thebigRock,
  }),
  new Rock({
    x: 2275,
    y: 470,
    image: theRock02,
  }),
  new Rock({
    x: 2390,
    y: 470,
    image: theRock,
  }),

  new Rock({
    x: 20310,
    y: 455,
    image: theRock04,
  }),
  new Rock({
    x: 20195,
    y: 455,
    image: theRock04,
  }),
  // gros rocher sous cascade
  new Rock({
    x: 20370,
    y: 455,
    image: thebigRock,
  }),
  new Rock({
    x: 20460,
    y: 485,
    image: theRock03,
  }),
];
