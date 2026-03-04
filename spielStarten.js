import {karten} from "./karten.js";  // importieren der Karten aus karten.js
import {gemeinschaftsKartenZiehen, spielKartenGenerieren, zufaelligeKarteZiehen} from "./zufaelligeKarte.js";  // importieren der zufaelligeKarteZiehen Funktion aus zufaelligeKarteZiehen.js
let spielerKarte1 = document.getElementById('karten_spieler1')
let spielerKarte2 = document.getElementById('karten_spieler2')
let gegnerKarte1 = document.getElementById('karten_gegner1')
let gegnerKarte2 = document.getElementById('karten_gegner2')
let gemeinschaftsKarten1 = document.getElementById('flop1')
let gemeinschaftsKarten2 = document.getElementById('flop2')
let gemeinschaftsKarten3 = document.getElementById('flop3')
let gemeinschaftsKarten4 = document.getElementById('turn')
let gemeinschaftsKarten5 = document.getElementById('river')

let gemeinschaftsKarten = gemeinschaftsKartenZiehen()
console.log(gemeinschaftsKarten)

let spieler = {
    name: "Spieler",
    chips: 100,
    karten: []
}
let gegner = {
    name: "Gegner",
    chips: 100,
    karten: []
}
function kartenZiehen(){
    spieler.karten.unshift(zufaelligeKarteZiehen())//Karten des Spilers random ziehen
    spieler.karten.unshift(zufaelligeKarteZiehen())

    gegner.karten.unshift(zufaelligeKarteZiehen())//Karten des Gegner random ziehen
    gegner.karten.unshift(zufaelligeKarteZiehen())
    console.log(spieler, gegner)
}


function flopsAufdecken(){
    gemeinschaftsKarten1.innerHTML = gemeinschaftsKarten.flop1[0].farbe
    gemeinschaftsKarten2.innerHTML = gemeinschaftsKarten.flop2[0].farbe
    gemeinschaftsKarten3.innerHTML = gemeinschaftsKarten.flop3[0].farbe
}
function turnAufdecken(){
    gemeinschaftsKarten4.innerHTML = gemeinschaftsKarten.turn[0].farbe
}
function riverAufdecken(){
    gemeinschaftsKarten5.innerHTML = gemeinschaftsKarten.river[0].farbe
}

export function spielStarten(){
    let kartenSpiel =spielKartenGenerieren();
    kartenZiehen()
    flopsAufdecken()
    riverAufdecken()
    turnAufdecken()
}

