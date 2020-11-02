$("document").ready(function() {
    // single bike empty obj
    var bike = {
        name: "", // bike name
        weight: 0 // kg
    };

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

    // CYCLE VAR
    var lessWeight = bicycles[0].weight // first bike weight
    console.log(lessWeight);

    // for cycle --> get the index of the bike that has less weight
    for (var i = 0; i < bicycles.length; i++) {
        // CYCLE VAR
        var lighterBikeIndex // current bike index
        var currentBike = bicycles[i]; // current bike obj

        // console.log(currentBike.weight);
        if (currentBike.weight < lessWeight) {
            lighterBikeIndex = i;
            lessWeight = currentBike.weight;
            // console.log(lighterBikeIndex);
            // console.log(lessWeight);
        }

    }

    // stamp the name of the bike that has less weight
    console.log("La bici che pesa meno è " + bicycles[lighterBikeIndex].name);



});

// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS region SSSSS

// #/2-fold EEEEE endregion EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
