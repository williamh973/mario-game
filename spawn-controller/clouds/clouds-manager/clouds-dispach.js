import { theLittleCloud, theBigCloud, Cloud } from "./cloud.class.js";

export let littleCloudList = [];
export let bigCloudList = [];


export function dispachLittleClouds() {
    return new Promise((resolve) => {
        for (let i = 0; i < 10; i++) {
            
            let randomFactor = Math.random();
            let randomNumberBetweenX = Math.floor(randomFactor * (300)) + i * 500; 
        
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
            let randomNumberBetweenX = Math.floor(randomFactor * (300)) + i * 500; 
            
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