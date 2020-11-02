$("document").ready(function() {
    // PART 1
    // names
    var names = ["Marco", "Francesca", "Francesco", "Antonio", "Carla", "Alberto"];
    console.log(names);

    // PART 2
    // ask and push!
    var userNumbers = [];

    for (var i = 0; i < 2; i++) {
        currentNumber = askANumber(names) - 1; // ask -1 --> cause i want the index
        userNumbers.push(currentNumber); // push
        userNumbers.sort(); // sort the element
    }
    // stamp
    console.log(userNumbers);

    // PART 3
    // new array
    var newArray = [];
    for (var i = userNumbers[0]; i <= userNumbers[1]; i++) {
        newArray.push(names[i]);
    }
    // stamp
    console.log(newArray);

    // provare con filter


    // console.log(names.indexOf("Francesca"));

    // // filter the names depending on the userNumbers (index)
    // var filterName = names.filter(indexFiltrator(x));









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
function indexFiltrator(x) {
    // LOCAL VAR
    var index = indexOf(x); // return the index
    var filter; // return "true" if the index is between min and max



    return n;
};
// #/2-fold EEEEE index filtrator EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
