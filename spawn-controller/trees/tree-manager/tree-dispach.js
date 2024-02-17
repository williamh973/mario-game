import { Tree } from "./trees.class.js";
import { platformList500x43 } from "../../platforms/platforms-manager/platform-adjustment.js";
import { theMiniTree } from "./tree-assets.js";


export let treeList = [];


export async function dispachAllTrees() {
    return new Promise((resolve) => {
        for (let i = 0; i < 15; i++) {
            spawnTree();
        }
        resolve();
    })
};


function spawnTree() {
    let tree = new Tree({
        image : theMiniTree,
        scale : 1
    });
    treeList.push(tree);
    dispachTree(tree);
};


function dispachTree(tree) {

    const randomPlatformIndex = Math.floor(Math.random() * platformList500x43.length);
    const randomPlatform = platformList500x43[randomPlatformIndex];  
    
    tree.placeTreeOnRandomPlatform500x43(randomPlatform);

    for (let i = 0; i < treeList.length; i++) {
        if (tree.overlapsWith(treeList[i])) {
            // console.log("overlaps tree with other tree");
            tree.placeTreeOnRandomPlatform500x43(randomPlatform);
        }
        
    }

};


