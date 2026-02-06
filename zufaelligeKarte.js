// random karte
// random Zahl
// karte abziehen
// Kartenstapel für karten im Spiel

import {karten} from "./karten";

let kartenSpiel = karten
function kartenWeg(randomNumber){
    kartenSpiel.slice(randomNumber, 1 )
    console.log(randomNumber)
}
kartenWeg()