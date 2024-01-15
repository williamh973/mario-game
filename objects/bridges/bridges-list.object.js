   import { Bridge, theBridgeLeft, theBridgeRight } from "../../class/bridges/bridges.class.js";
   
   export let bridges = [];


    bridges = [
    new Bridge ({
        x: 20260,
        y: 260,
        image: theBridgeLeft
    }),
    new Bridge ({
        x: 20430,
        y: 260,
        image: theBridgeRight
    }),
    ]