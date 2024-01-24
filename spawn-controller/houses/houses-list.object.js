import { House, theHouse01, theHouse02, theHouse03 } from "../../class/houses/houses.class.js";

export let houses = [];   
   
   houses = [
        new House({
            x: 365,
            y: 341,
            image: theHouse01
        }),
      
        new House({
            x: 8900,
            y: 299,
            image: theHouse03
        }),
        
        new House({
            x: 14900,
            y: 325,
            image: theHouse02
        }),
    
    ]