// random karte
// random Zahl
// karte abziehen
// Kartenstapel für karten im Spiel

import {karten} from "./karten.js";

let kartenSpiel = karten

zufaelligeKarteZiehen()
function zufaelligeKarteZiehen(){
    let randomNumber = zufealligeZahl()
    let Karte = kartenSpiel[randomNumber]
    kartenWeg(randomNumber)
    console.log("Zufällige Karte: " , Karte)
}
function kartenWeg(randomNumber){
    kartenSpiel.splice(randomNumber, 1 )
    console.log(kartenSpiel, kartenSpiel.length)
}

function zufealligeZahl(){
    let randomNumber = Math.floor(Math.random() * kartenSpiel.length)
    console.log("Random Zahl: " + randomNumber)
    return randomNumber
}
