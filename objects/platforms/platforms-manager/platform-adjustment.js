export function adjustGrassPlatform494x72Positions(platformList494x72) {
    for (let i = 0; i < platformList494x72.length; i++) {
        for (let j = i + 1; j < platformList494x72.length; j++) {
            if (platformList494x72[i].overlapsWith(platformList494x72[j])) {
                console.log("overlaps platformList494x72");
                platformList494x72[j].placePlatform494x72AwayFromPlatform494x72(platformList494x72[i]);
            }
        }
    }
}

export function adjustGrassPlatform84x72Positions(platformList84x72) {
    for (let i = 0; i < platformList84x72.length; i++) {
          for (let j = i + 1; j < platformList84x72.length; j++) {
    
            if (platformList84x72[j].overlapsWith(platformList84x72[i])) {
                    console.log("overlaps platformList84x72!");
                    platformList84x72[j].placePlatform84x72AwayFromPlatform84x72(platformList84x72[i]);
            }

        }
    }

};

 
export function adjustGrassPlatform84x72And150x72Positions(platformList84x72, platformList150x72) {
    for (let i = 0; i < platformList84x72.length; i++) {
          for (let j = 0; j < platformList150x72.length; j++) {
  
            if (platformList84x72[i].overlapsWith(platformList150x72[j])) {
                    console.log("overlaps platformList84x72 And 150x72!");
                    platformList84x72[i].placePlatform84x72AwayFromPlatform150x72(platformList150x72[j]);
            }

        }
    }

};


export function adjustGrassPlatform84x72And202x56Positions(platformList84x72, platformList202x56) {
    for (let i = 0; i < platformList84x72.length; i++) {
          for (let j = 0; j < platformList202x56.length; j++) {
  
            if (platformList84x72[i].overlapsWith(platformList202x56[j])) {
                    console.log("overlaps platformList84x72 And 202x56!");
                    platformList84x72[i].placePlatform84x72AwayFromPlatform202x56(platformList202x56[j]);
            }


        }
    }

};


export function adjustGrassPlatform84x72And494x72Positions(platformList84x72, platformList494x72) {
    for (let i = 0; i < platformList84x72.length; i++) {
          for (let j = 0; j < platformList494x72.length; j++) {
  
            if (platformList84x72[i].overlapsWith(platformList494x72[j])) {
                    console.log("overlaps platformList84x72 And 494x72!");
                    platformList84x72[i].placePlatform84x72AwayFromPlatform494x72(platformList494x72[j]);
            }

        }
    }

};