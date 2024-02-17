export let platformList494x72 = [];
export let platformList84x72 = [];
export let platformList150x72 = [];
export let platformList202x56 = [];
export let platformList500x43 = [];
export let platformList630x217 = [];
export let platformList158x78 = [];
export let platformList105x73 = [];



export function adjustGrassPlatform494x72Positions(platformList494x72) {
    return new Promise((resolve) => {
        for (let i = 0; i < platformList494x72.length; i++) {
            for (let j = i + 1; j < platformList494x72.length; j++) {
                if (platformList494x72[i].overlapsWith(platformList494x72[j])) {
                    // console.log("overlaps platformList494x72");
                    platformList494x72[j].placePlatform494x72AwayFromPlatform494x72(platformList494x72[i]);
                }
            }
        }  
        resolve()
    })
}

export function adjustGrassPlatform84x72Positions(platformList84x72) {
    return new Promise((resolve) => {    
    for (let i = 0; i < platformList84x72.length; i++) {
          for (let j = i + 1; j < platformList84x72.length; j++) {
    
            if (platformList84x72[j].overlapsWith(platformList84x72[i])) {
                    // console.log("overlaps platformList84x72!");
                    platformList84x72[j].placePlatform84x72AwayFromPlatform84x72(platformList84x72[i]);
            }

        }
    }
    resolve();
})
};


export function adjustGrassPlatform500x43Positions(platformList500x43) {
    return new Promise((resolve) => {    
    for (let i = 0; i < platformList500x43.length; i++) {
          for (let j = i + 1; j < platformList500x43.length; j++) {
    
            if (platformList500x43[j].overlapsWith(platformList500x43[i])) {
                    // console.log("overlaps platformList500x43!");
                    platformList500x43[j].placePlatform500x43AwayFromPlatform500x43(platformList500x43[i]);
            }

        }
    }
    resolve();
})
};



export function adjustGrassPlatform630x217Positions(platformList630x217) {
    return new Promise((resolve) => {    
    for (let i = 0; i < platformList630x217.length; i++) {
          for (let j = i + 1; j < platformList630x217.length; j++) {
    
            if (platformList630x217[j].overlapsWith(platformList630x217[i])) {
                    // console.log("overlaps platform 630x217!");
                    platformList630x217[j].placePlatform630x217AwayFromPlatform630x217(platformList630x217[i]);
            }

        }
    }
    resolve();
})
};
 
export function adjustGrassPlatform84x72And150x72Positions(platformList84x72, platformList150x72) {
    return new Promise((resolve) => {

    for (let i = 0; i < platformList84x72.length; i++) {
          for (let j = 0; j < platformList150x72.length; j++) {
  
            if (platformList84x72[i].overlapsWith(platformList150x72[j])) {
                    // console.log("overlaps platformList84x72 And 150x72!");
                    platformList84x72[i].placePlatform84x72AwayFromPlatform150x72(platformList150x72[j]);
            }

        }
    }
    resolve();
})
};


export function adjustGrassPlatform84x72And202x56Positions(platformList84x72, platformList202x56) {
    return new Promise((resolve) => {

    for (let i = 0; i < platformList84x72.length; i++) {
          for (let j = 0; j < platformList202x56.length; j++) {
  
            if (platformList84x72[i].overlapsWith(platformList202x56[j])) {
                    // console.log("overlaps platformList84x72 And 202x56!");
                    platformList84x72[i].placePlatform84x72AwayFromPlatform202x56(platformList202x56[j]);
            }


        }
    }
    resolve();
})
};


export function adjustGrassPlatform84x72And494x72Positions(platformList84x72, platformList494x72) {
    return new Promise((resolve) => {

    for (let i = 0; i < platformList84x72.length; i++) {
          for (let j = 0; j < platformList494x72.length; j++) {
  
            if (platformList84x72[i].overlapsWith(platformList494x72[j])) {
                    // console.log("overlaps platformList84x72 And 494x72!");
                    platformList84x72[i].placePlatform84x72AwayFromPlatform494x72(platformList494x72[j]);
            }

        }
    }
    resolve();
    })
};


export function adjustGrassPlatform202x56Positions(platformList202x56) {
    return new Promise((resolve) => {

    for (let i = 0; i < platformList202x56.length; i++) {
          for (let j = i + 1; j < platformList202x56.length; j++) {
  
            if (platformList202x56[i].overlapsWith(platformList202x56[j])) {
                    // console.log("overlaps platformList202x56 And other 202x56!");
                    platformList202x56[i].placePlatform202x56AwayFromPlatform202x56(platformList202x56[j]);
            }

        }
    }
    resolve();
    })
};



export function adjustGrassPlatform202x56And494x72Positions(platformList202x56, platformList494x72) {
    return new Promise((resolve) => {

    for (let i = 0; i < platformList202x56.length; i++) {
          for (let j = 0; j < platformList494x72.length; j++) {
  
            if (platformList202x56[i].overlapsWith(platformList494x72[j])) {
                    // console.log("overlaps platformList84x72 And 494x72!");
                    platformList202x56[i].placePlatform202x56AwayFromPlatform494x72(platformList494x72[j]);
            }

        }
    }
    resolve();
    })
};




export async function ajustAllPlatforms(platformList494x72, platformList84x72, platformList150x72, platformList202x56, platformList500x43, platformList630x217) {
   await adjustGrassPlatform494x72Positions(platformList494x72);
   await adjustGrassPlatform84x72Positions(platformList84x72);
   await adjustGrassPlatform500x43Positions(platformList500x43);
   await adjustGrassPlatform630x217Positions(platformList630x217);
   await adjustGrassPlatform202x56Positions(platformList202x56);
   await adjustGrassPlatform84x72And494x72Positions(platformList84x72, platformList494x72);
   await adjustGrassPlatform84x72And150x72Positions(platformList84x72, platformList150x72);
   await adjustGrassPlatform84x72And202x56Positions(platformList84x72, platformList202x56);
   await adjustGrassPlatform202x56And494x72Positions(platformList202x56, platformList494x72);
};


export async function checkFiveTimesIfPlatformsAreAdjusted() {
    for (let i = 0; i < 5; i++) {
      await ajustAllPlatforms(platformList494x72, platformList84x72, platformList150x72, platformList202x56, platformList500x43, platformList630x217);
    }

}