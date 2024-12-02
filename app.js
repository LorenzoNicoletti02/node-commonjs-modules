const objNames = require("./names");
const objHobbies = require("./hobbies");
// console.log(objNames, objHobbies);


function newFunction() {

    // Creo un oggetto dove le proprietà hanno il risultato di una funzione che sta in un oggetto che abbiamo importato da un altro file
    const finalObj = {fullName: objNames.names("Lorenzo", "Nicoletti"), hobbies: objHobbies.hobbiesFun("Boxe", "Film", "Manga")};
    return finalObj;
}

console.log(newFunction());

