import { goldCoinList } from "../../coins/coins-manager/coins-adjustment.js";
import { Coin } from "../../../class/coins/coins.class.js";


export function dispachGoldCoins() {
        
        for (let i = 0; i < 2; i++) {

            let randomFactorX = Math.random();
            let randomNumberBetweenX = Math.floor(randomFactorX * (100)) + 100 + i * 200; 
          
            let randomFactorY = Math.random();
            let randomNumberBetweenY = Math.floor(randomFactorY * (500)) + 10; 


            let coin = new Coin({
                x: randomNumberBetweenX,
                y: randomNumberBetweenY,
            })
            goldCoinList.push(coin)
        }
        console.log(goldCoinList);

};




