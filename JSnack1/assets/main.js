// $("document").ready(function() {
//     // single bike empty obj
//     var bike = {
//         name: "", // bike name
//         weight: 0 // kg
//     };
//
//     // array of bicycles --> bike (obj) with name + weight
//     var bicycles = [
//         {
//             name: "SERIUS VALPAROLA",
//             weight: 9.56
//         },
//         {
//             name: "EDDY MERCKX LAVAREDO",
//             weight: 8.43
//         },
//         {
//             name: "FOCUS IZALCO MAX",
//             weight: 7.80
//         },
//         {
//             name: "VOTEC VRC",
//             weight: 8.90
//         },
//         {
//             name: "CANNONDALE SUPERSIX EVO",
//             weight: 8.54
//         },
//     ];
//
//     console.log(bicycles);
//
//     // // VERSION 1 - CYCLE VAR
//     // var lessWeight = bicycles[0].weight // first bike weight
//     // var lighterBikeIndex = 0; // first bike index
//     //
//     // console.log(lessWeight);
//     //
//     // // for cycle --> get the index of the bike that has less weight
//     // for (var i = 0; i < bicycles.length; i++) {
//     //     // CYCLE VAR
//     //     var currentBike = bicycles[i]; // current bike obj
//     //
//     //     // console.log(currentBike.weight);
//     //     if (currentBike.weight < lessWeight) {
//     //         lighterBikeIndex = i;
//     //         lessWeight = currentBike.weight;
//     //         // console.log(lighterBikeIndex);
//     //         // console.log(lessWeight);
//     //     }
//     //
//     // }
//     //
//     // // stamp the name of the bike that has less weight
//     // console.log("La bici che pesa meno è " + bicycles[lighterBikeIndex].name);
//
//     // // VERSION 2 - SORT THE ARRAY
//     // bicycles.sort(compareWeight);
//     //
//     // console.log(bicycles);
//     //
//     // // stamp the first bike (now it has min weight)
//     // var bikeText = "La bici che pesa meno è " + bicycles[0].name + ".";
//     // console.log(bikeText);
//     //
//     // // stamp in HTML --> clone
//     // var cloneSpan = $(".template .lighter-bike").clone(); // clone the span
//     // cloneSpan.text(bikeText); // insert the text
//     // $(".container").append(cloneSpan); // add to container
//
//
//
// });

// *******
// *******
// *******
// *******
// ES 6

// GLOBAL VAR
let name = "CANNONDALE SUPERSIX EVO";
let weight = 8.54;

const bike = { // bike-obj
    name,
    weight
};

const bicycles = [ // bike-obj-array
    {
        name: "SERIUS VALPAROLA",
        weight: 9.56
    },
    {
        name: "EDDY MERCKX LAVAREDO",
        weight: 8.43
    },
    {
        name: "FOCUS IZALCO MAX",
        weight: 7.80
    },
    {
        name: "VOTEC VRC",
        weight: 8.90
    }
];

bicycles.push(bike);

console.log(
    `
    *** bicycles-array:
    ${bicycles[0].name} di peso ${bicycles[0].weight}
    ${bicycles[1].name} di peso ${bicycles[1].weight}
    ${bicycles[2].name} di peso ${bicycles[2].weight}
    ${bicycles[3].name} di peso ${bicycles[3].weight}
    ${bicycles[4].name} di peso ${bicycles[4].weight}
    `
);

console.log(bicycles);

// ALGORITHM 1.0 search the lighter bike
// const lighterBike = bicycles[searchLighterBike(bicycles)];

// console.log(`La bici che pesa meno è la ${lighterBike.name}, che pesa: ${lighterBike.weight}`);

// // es5
// function searchLighterBike(bicycles) {
//     let lessWeight = bicycles[0].weight // first bike weight
//     let lighterBikeIndex = 0; // first bike index
//
//     for (let i = 0; i < bicycles.length; i++) {
//         // CYCLE VAR
//         let currentBike = bicycles[i]; // current bike obj
//
//         // console.log(currentBike.weight);
//
//         if (currentBike.weight < lessWeight) {
//             lighterBikeIndex = i;
//             lessWeight = currentBike.weight;
//             // console.log(lighterBikeIndex);
//             // console.log(lessWeight);
//         }
//     }
//
//     return lighterBikeIndex;
// }

// es6
const searchLighterBike = (array) => { // find the lighter bike
    let lessWeight = array[0].weight // first bike weight
    let lighterBikeIndex = 0; // first bike index
    let lighterBike;

    for (let i = 0; i < array.length; i++) {
        // CYCLE VAR
        let currentBike = array[i]; // current bike obj

        // console.log(currentBike.weight);

        if (currentBike.weight < lessWeight) {
            lighterBikeIndex = i;
            lessWeight = currentBike.weight;
            // console.log(lighterBikeIndex);
            // console.log(lessWeight);
        }
    }

    lighterBike = array[lighterBikeIndex];

    return lighterBike;
};

const lighterBike = searchLighterBike(bicycles);
console.log(lighterBike);

// function searchLighterBike(bicycles) {
//     let lessWeight = bicycles[0].weight // first bike weight
//     let lighterBikeIndex = 0; // first bike index
//
//     for (let i = 0; i < bicycles.length; i++) {
//         // CYCLE VAR
//         let currentBike = bicycles[i]; // current bike obj
//
//         // console.log(currentBike.weight);
//
//         if (currentBike.weight < lessWeight) {
//             lighterBikeIndex = i;
//             lessWeight = currentBike.weight;
//             // console.log(lighterBikeIndex);
//             // console.log(lessWeight);
//         }
//     }
//
//     return lighterBikeIndex;
// }




// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS compare the weight of the bike SSSSS
function compareWeight(a, b) {
    if (a.weight > b.weight) {
        return +1;
    } if (a.weight < b.weight) {
        return -1;
    } else {
        return 0;
    }

}
// #/2-fold EEEEE compare the weight of the bike EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
