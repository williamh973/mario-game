import { theHills, theSky, GenericObject } from "./generic.class.js";


export let genericObjectList = [];


export async function spawnGenericObject() {
    return new Promise((resolve) => {
        for (let i = 0; i < 1; i++) {
            spawnSky();
            spawnHills();
        }
        resolve();
    })
};


function spawnSky() {
    let sky = new GenericObject({
        x: 0,
        y: 0,
        image: theSky
    });
  
    genericObjectList.push(sky);
};


function spawnHills() {
    let hills = new GenericObject({
        x: 0,
        y: 0,
        image: theHills
    });
    
    genericObjectList.push(hills);
};

    