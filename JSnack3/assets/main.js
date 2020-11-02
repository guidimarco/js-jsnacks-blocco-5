$("document").ready(function() {

    // array of bicycles --> bike (obj) with name + weight
    var bicycles = [
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
        },
        {
            name: "CANNONDALE SUPERSIX EVO",
            weight: 8.54
        },
    ];

    console.log(bicycles);

    // PART 2
    // copy --> copy of every bike with "position"
    copyBicycles = [];

    for (var i = 0; i < bicycles.length; i++) {
        var currentBike = bicycles[i];
        // console.log(currentBike);

        // add a position property
        currentBike.position = "d";
        // currentBike["position"] = "d"

        // push in an array
        copyBicycles.push(currentBike);
    }

    console.log(copyBicycles);





});

// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS region SSSSS

// #/2-fold EEEEE endregion EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
