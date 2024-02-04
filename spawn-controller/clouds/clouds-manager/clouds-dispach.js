import { theLittleCloud, theBigCloud, Cloud } from "../../../class/cloud/cloud.class.js";

export let littleCloudList = [];
export let bigCloudList = [];


export function dispachLittleClouds() {
    return new Promise((resolve) => {
        for (let i = 0; i < 15; i++) {
            
            let randomFactor = Math.random();
            let randomNumberBetweenX = Math.floor(randomFactor * (500)) + i * 700; 
        
            randomFactor = Math.random();
            let randomNumberBetweenY = Math.floor(randomFactor * (250)); 
                    
            littleCloudList.push(
                new Cloud({
                    x: randomNumberBetweenX,
                    y: randomNumberBetweenY,
                    image: theLittleCloud
                })
            )
        }
        resolve();
    })
};

export function dispachBigClouds() {
    return new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            
            let randomFactor = Math.random();
            let randomNumberBetweenX = Math.floor(randomFactor * (500)) + i * 800; 
            
            randomFactor = Math.random();
            let randomNumberBetweenY = Math.floor(randomFactor * (250)); 
                    
            bigCloudList.push(
                    new Cloud({
                        x: randomNumberBetweenX,
                        y: randomNumberBetweenY,
                        image: theBigCloud
                    })
            )
        }
        resolve();
    })
};