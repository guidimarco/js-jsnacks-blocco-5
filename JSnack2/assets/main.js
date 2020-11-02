$("document").ready(function() {
    // PART 1
    // names
    var names = ["Marco", "Francesca", "Francesco", "Antonio", "Carla", "Alberto"];
    console.log("Insieme di partenza");
    console.log(names);

    // PART 2
    // ask and push!
    var userNumbers = [];

    for (var i = 0; i < 2; i++) { // ask 2 number
        currentNumber = askANumber(names) - 1; // ask -1 --> cause i want the index
        userNumbers.push(currentNumber); // push
        userNumbers.sort(); // sort the element
    }
    // stamp
    console.log("Indici scelti dall'utente:");
    console.log(userNumbers);

    // // PART 3 - VERSIONE 1
    // // new array
    // var newArray = [];
    // for (var i = userNumbers[0]; i <= userNumbers[1]; i++) {
    //     newArray.push(names[i]);
    // }
    // // stamp
    // console.log("Nomi scelti dall'utente:");
    // console.log(newArray);

    // PART 3 - VERSION 2
    // filter the names depending on the userNumbers
    // filter the indexFiltrator function (see below) with userNumbers array argument
    var filterName = names.filter(indexFiltrator, userNumbers);

    console.log(filterName);














});

// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS ask a number from 1 to array.length SSSSS
function askANumber(array) {
    // LOCAL VAR
    var n; // user-number

    do {
        n = parseInt(prompt("Inserisci un numero compreso fra 1 e " + array.length + ":"));
    } while (isNaN(n) || n < 1 || n > array.length); // check

    return n;
};
// #/2-fold EEEEE ask a number from 1 to array.length EEEEE

// #2-fold SSSSS index filtrator SSSSS
function indexFiltrator(x, i) {
    // x is the value of the start-array-element
    // i is the index of the start-array-element
    // this is the argument --> userNumbers-array-index

    if (i >= this[0] && i <= this[1]) {
        return true;
    } else {
        return false;
    }

};
// #/2-fold EEEEE index filtrator EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
