import { Tree, theTree } from "./trees.class.js";
import { platformList202x56, platformList494x72 } from "../../platforms/platforms-manager/platform-adjustment.js";


export let treeList = [];


export async function dispachAllTrees() {
    return new Promise((resolve) => {
        for (let i = 0; i < 5; i++) {
            spawnTree();
        }
        resolve();
    })
};


function spawnTree() {
    let tree = new Tree({
        image : theTree,
        scale : 0.6
    });
    treeList.push(tree);
    dispachTree(tree);
};


function dispachTree(tree) {

                const randomPlatformIndex = Math.floor(Math.random() * platformList494x72.length);
                const randomPlatform = platformList494x72[randomPlatformIndex];  
    
                tree.placeTreeOnRandomPlatform494x72(randomPlatform);

                for (let i = 0; i < treeList.length; i++) {
                    for (let j = i + 1; j < treeList.length; j++) {
                    
                        if (treeList[i].overlapsWith(treeList[j]) ) {
                            console.log("overlaps tree with other tree");
                            const index = treeList.indexOf(tree);
                            
                            if (index !== -1) {
                                treeList.splice(index, 1);
                            }
                            
                        }
                   }
                }
};


