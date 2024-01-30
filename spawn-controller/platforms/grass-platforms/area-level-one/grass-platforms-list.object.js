import { dispachGrassPlatforms494x72, dispachGrassPlatforms84x72, dispachGrassPlatforms202x56, dispachGrassPlatforms150x72 } from "../../platforms-manager/platform-dispach.js";
import { checkFiveTimesIfPlatformsAreAdjusted } from "../../platforms-manager/platform-adjustment.js";
import { dispachRandomRedMushroom } from "../../../redMushroom/redMushroom-manager/redMushroom-dispach.js";
import { checkFiveTimesIfAllRedMushroomsAreAdjusted } from "../../../redMushroom/redMushroom-manager/redMushroom-adjustment.js";
import { dispachRandomGoldCoins } from "../../../coins/coins-manager/coins-dispach.js";
import { checkFiveTimesIfAllGoldCoinsAreAdjusted } from "../../../coins/coins-manager/coins-adjustment.js";


export async function spawnAreaLevelOne(platformAdded) {
   await dispachGrassPlatforms494x72();
   await dispachGrassPlatforms84x72();
   await dispachGrassPlatforms150x72();
   await dispachGrassPlatforms202x56();
   await checkFiveTimesIfPlatformsAreAdjusted();
   await dispachRandomRedMushroom();
   await checkFiveTimesIfAllRedMushroomsAreAdjusted();
   await dispachRandomGoldCoins();
   await checkFiveTimesIfAllGoldCoinsAreAdjusted();
   platformAdded = false;
};



    // new Platform({
    //     // x: theplatform.width - 3,
    //     // y: 515,
    //     x: randomNumberX,
    //     y: randomNumberY,
    //     image: theplatform
    // }),

//     new Platform({
//         x: theplatform.width * 2 + 200, 
//         y: 515,
//         image: theplatform
//     }),

//     new Platform({
//         x: theplatform.width * 3 + 400, //  
//         y: 515,
//         image: theplatform
//     }),
//     // plateforme 5
//     new Platform({
//         x: theplatform.width * 4 + 300, //  
//         y: 515,
//         image: theplatform
//     }),
//     // Moyenne plateforme en hauteur 1
//     new Platform({
//         x: thePlatformSmallTall.width * 5 + 2100,
//         y: 380,
//         image: thePlatformSmallTall
//     }),

//      // plateforme 6
//    new Platform({
//     x: theplatform.width * 6 + 400, //  
//     y: 515,
//     image: theplatform
// }),

// // Vide //

// // plateforme 7
// new Platform({
//     x: theplatform.width * 7 + 700, //  
//     y: 515,
//     image: theplatform
// }),
// // plateforme 8
// new Platform({
//     x: theplatform.width * 8 + 700, //  
//     y: 515,
//     image: theplatform
// }),
// // plateforme 9
// new Platform({
//     x: theplatform.width * 9 + 700, //  
//     y: 515,
//     image: theplatform
// }),

// // Vide //

// // plateforme 10
// new Platform({
//     x: theplatform.width * 10 + 700, //  
//     y: 515,
//     image: theplatform
// }),

// // Vide //

// // petite plateforme au sol 1
// new Platform({
//     x: thePlatformSmall.width * 82, //  
//     y: 515,
//     image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme au sol 2
// new Platform({
//     x: thePlatformSmall.width * 87, //  
//     y: 515,
//     image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme au sol 3
// new Platform({
//     x: thePlatformSmall.width * 92, //  
//     y: 515,
//     image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme en hauteur 1
// new Platform({
//     x: thePlatformSmall.width * 94, //  
//     y: 400,
//     image: thePlatformSmall
// }),

// // Vide //


// // petite plateforme en hauteur 2
// new Platform({
// x: 7200,
// y: 280,
// image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme en hauteur 3
// new Platform({
// x: 7100,
// y: 220,
// image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme en hauteur 4
// new Platform({
// x: 6900,
// y: 160,
// image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme en hauteur 5
// new Platform({
// x: 6700,
// y: 180,
// image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme en hauteur 6
// new Platform({
// x: 6500,
// y: 140,
// image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme en hauteur 7
// new Platform({
// x: 6270,
// y: 150,
// image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme en hauteur 8
// new Platform({
// x: 6062,
// y: 140,
// image: thePlatformSmall
// }),

// // Vide //

// // petite plateforme en hauteur 9
// new Platform({
// x: 5932,
// y: 160,
// image: thePlatformSmall
// }),

// // petite plateforme en hauteur 10
// new Platform({
// x: 5662,
// y: 140,
// image: thePlatformSmall
// }),

// // petite plateforme en hauteur 11
// new Platform({
// x: 5382,
// y: 140,
// image: thePlatformSmall
// })






// // sur-plateforme 1
// new Platform({
// x: 7750,
// y: 398,
// image: thePlatform02
// }),

//    // plateforme 11
//     new Platform({
//         x: 7710,
//         y: 470,
//         image: theplatform
//     }),

//     // Vide //

//     // plateforme 12
//     new Platform({
//         x: theplatform.width * 16 + 300,
//         y: 470,
//         image: theplatform
//     }),
//     // plateforme 13
//     new Platform({
//         x: theplatform.width * 17 + 300,
//         y: 470,
//         image: theplatform
//     }),
//     // plateforme 14
//     new Platform({
//         x: theplatform.width * 18 + 300,
//         y: 470,
//         image: theplatform
//     }),

//     // vide //

//     // Moyenne plateforme en hauteur 2
//     new Platform({
//         x: thePlatformSmallTall.width * 65,
//         y: 550,
//         image: thePlatformSmallTall
//     }),

//     // vide //

//     // petite plateforme en hauteur 2
//     new Platform({
//         x: thePlatformSmall.width * 127,
//         y: 403,
//         image: thePlatformSmall
//     }),

//     // vide //

//     // petite plateforme en hauteur 3
//     new Platform({
//         x: thePlatformSmall.width * 129,
//         y: 330,
//         image: thePlatformSmall
//     }),

//     // vide //

//     // petite plateforme en hauteur 4
//     new Platform({
//         x: thePlatformSmall.width * 126,
//         y: 240,
//         image: thePlatformSmall
//     }),

//     // vide //

//     // petite plateforme en hauteur 5
//     new Platform({
//         x: thePlatformSmall.width * 124,
//         y: 200,
//         image: thePlatformSmall
//     }),

//     // vide //

//     // plateforme 15
//     new Platform({
//         x: theplatform.width * 17 + 490,
//         y: 220,
//         image: theplatform
//     }),

//     // vide //

//     // petite plateforme en hauteur 6
//     new Platform({
//         x: thePlatformSmall.width * 131,
//         y: 240,
//         image: thePlatformSmall
//     }),

//     // vide //

//     // plateforme 16
//     new Platform({
//         x: theplatform.width * 21,
//         y: 210,
//         image: theplatform
//     }),

//     // Moyenne plateforme en hauteur 3
//     new Platform({
//         x: thePlatformSmallTall.width * 74.7,
//         y: 310,
//         image: thePlatformSmallTall
//     }),

//     // plateforme 19
//     new Platform({
//         x: theplatform.width * 23.5,
//         y: 515,
//         image: theplatform
//     }),

//     // vide //

//     // plateforme 20
//     new Platform({
//         x: theplatform.width * 24.5,
//         y: 515,
//         image: theplatform
//     }),



//     // sur-plateforme
//     new Platform({
//         x: thePlatform02.width * 24,
//         y: 437,
//         image: thePlatform02
//     }),


// //    GREEN Small platform 1
//     new Platform({
//         x: 12100,
//         y: 365,
//         image: theplateformGreenSmall
//     }),


// //    GREEN BIG platform 1
// new Platform({
// x: 12330,
// y: 257,
// image: theplateformGreen
// }),

//     // plateforme 21
//     new Platform({
//         x: theplatform.width * 25.5,
//         y: 150,
//         image: theplatform
//     }),
//     // plateforme 22
//     new Platform({
//         x: theplatform.width * 26 + 375,
//         y: 350,
//         image: theplatform
//     }),

//     // vide //

//     // petite plateforme en hauteur 7
//     new Platform({
//         x: thePlatformSmall.width * 177,
//         y: 220,
//         image: thePlatformSmall
//     }),

//     // vide //

//      // petite plateforme en hauteur 8
//      new Platform({
//         x: thePlatformSmall.width * 175,
//         y: 530,
//         image: thePlatformSmall
//     }),

//      // vide //

//     // petite plateforme en hauteur 9
//     new Platform({
//         x: thePlatformSmall.width * 183,
//         y: 530,
//         image: thePlatformSmall
//     }),

//     // vide //

//     // plateforme 22
//     new Platform({
//         x: theplatform.width * 30 - 164,
//         y: 515,
//         image: theplatform
//     }),

//    // vide //

// //    GREEN BIG platform 2
//   new Platform({
//     x: 15380,
//     y: 490,
//     image: theplateformGreen
//     }),

//   // vide //

//   //    GREEN BIG platform 2
//   new Platform({
//     x: 15650,
//     y: 450,
//     image: theplateformGreen
//     }),

//        // vide //

//   //    GREEN BIG platform 4
//   new Platform({
//     x: 16190,
//     y: 510,
//     image: theplateformGreen
//     }),

// //       // vide //

//   //    GREEN BIG platform 5
//   new Platform({
//     x: 16460,
//     y: 490,
//     image: theplateformGreen
//     }),

//       // vide //

//   //    GREEN BIG platform 6
//   new Platform({
//     x: 16700,
//     y: 460,
//     image: theplateformGreen
//     }),

//      // vide //

//      //    GREEN BIG platform 7
//   new Platform({
//     x: 16950,
//     y: 460,
//     image: theplateformGreen
//     }),

//  // vide //

//  // petite plateforme en hauteur 10
//  new Platform({
//     x: 17500,
//     y: 410,
//     image: thePlatformSmall
// }),

//   // vide //

// // Moyenne plateforme en hauteur 4
// new Platform({
// x: 17500,
// y: 190,
// image: thePlatformSmall
// }),

// // vide //

// //    petite platform en hauteur 3
// new Platform({
// x: 17650,
// y: 290,
// image: thePlatformSmall
// }),

//  // vide //

//  // Moyenne plateforme en hauteur 5
//  new Platform({
//     x: 17950,
//     y: 340,
//     image: thePlatformSmallTall
// }),

//   // vide //

//   // platform 23
//   new Platform({
//     x: 19020,
//     y: 410,
//     image: theplatform
// }),

// // petite plateforme en hauteur
// new Platform({
// x: 19600,
// y: 285,
// image: thePlatformSmall
// }),
// // petite plateforme en hauteur
// new Platform({
// x: 19600,
// y: 145,
// image: thePlatformSmall
// }),
// // petite plateforme en hauteur
// new Platform({
// x: 19700,
// y: 355,
// image: thePlatformSmall
// }),
// // petite plateforme en hauteur
// new Platform({
// x: 19700,
// y: 215,
// image: thePlatformSmall
// }),
// // petite plateforme en hauteur
// new Platform({
// x: 19700,
// y: 215,
// image: thePlatformSmall
// }),

// // platform superposé 6
//  new Platform({
//     x: 18885,
//     y: 140,
//     image: theplateform10
// }),

// // platform 24
// new Platform({
// x: 19620,
// y: 534,
// image: theplatform
// }),

// // platform 25
// new Platform({
// x: 20110,
// y: 534,
// image: thePlatformSmallTall
// }),

// // petite plateforme en hauteur
// new Platform({
//     x: 20067,
//     y: 261,
//     image: theplateform12
// }),
//  // platform BIG
//  new Platform({
//     x: 20070,
//     y: 316,
//     image: theplateform11
// }),

// // petite plateforme en hauteur
// new Platform({
//     x: 20505,
//     y: 261,
//     image: theplateform12
// }),




// // platform 26
// new Platform({
// x: 20510,
// y: 534,
// image: theplatform
// }),
// // platform 27
// new Platform({
// x: 20950,
// y: 534,
// image: theplatform
// }),
// // platform 28
// new Platform({
// x: 21250,
// y: 534,
// image: theplatform
// }),


// // platform superposé 1
// new Platform({
//     x: 19800,
//     y: 457,
//     image: theplateform4
// }),

// // platform superposé 2
// new Platform({
//     x: 20900,
//     y: 177,
//     image: theplateform8
// }),
// // platform superposé a la platform superposé 2
// new Platform({
//     x: 20978,
//     y: 107,
//     image: theplateform9
// }),



//  // platform superposé 3
//  new Platform({
//     x: 20570,
//     y: 432,
//     image: theplateform7
// }),

//  // platform finale
//  new Platform({
//     x: 21870,
//     y: 500,
//     image: theplateform8
// }),

//  new Platform({
//     x: 21933,
//     y: 430,
//     image: theplateformGreenSmall
// }),

