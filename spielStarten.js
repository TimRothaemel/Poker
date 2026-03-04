import {karten} from "./karten.js";  // importieren der Karten aus karten.js
import {spielKartenGenerieren, zufaelligeKarteZiehen} from "./zufaelligeKarte.js";  // importieren der zufaelligeKarteZiehen Funktion aus zufaelligeKarteZiehen.js
let spielerKarte1 = document.getElementById('karten_spieler1')
let spielerKarte2 = document.getElementById('karten_spieler2')
let gegnerKarte1 = document.getElementById('karten_gegner1')
let gegnerKarte2 = document.getElementById('karten_gegner2')
let gemeinschaftsKarten1 = document.getElementById('flop1')
let gemeinschaftsKarten2 = document.getElementById('flop2')
let gemeinschaftsKarten3 = document.getElementById('flop3')
let gemeinschaftsKarten4 = document.getElementById('turn')
let gemeinschaftsKarten5 = document.getElementById('river')

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
    spieler.karten.unshift(zufaelligeKarteZiehen())
    spieler.karten.unshift(zufaelligeKarteZiehen())
    spieler.karten.unshift(zufaelligeKarteZiehen())

    gegner.karten.unshift(zufaelligeKarteZiehen())//Karten des Gegner random ziehen
    gegner.karten.unshift(zufaelligeKarteZiehen())
    gegner.karten.unshift(zufaelligeKarteZiehen())
    gegner.karten.unshift(zufaelligeKarteZiehen())
    gegner.karten.unshift(zufaelligeKarteZiehen())
    console.log(spieler, gegner)
}

let gemeinschaftsKarten = function gemeinschaftsKartenZiehen() {
    let flop1 = zufaelligeKarteZiehen()
    let flop2 = zufaelligeKarteZiehen()
    let flop3 = zufaelligeKarteZiehen()
    let turn = zufaelligeKarteZiehen()
    let river = zufaelligeKarteZiehen()
    return {flop1, flop2, flop3, turn, river}
}

function flopsAufdecken(){
    gemeinschaftsKarten1.innerHTML = gemeinschaftsKarten[0]
    gemeinschaftsKarten1.innerHTML = gemeinschaftsKarten[1]
    gemeinschaftsKarten1.innerHTML = gemeinschaftsKarten[2]
    console.log(gemeinschaftsKarten)
}
function turnAufdecken(){
    gemeinschaftsKarten1.innerHTML = gemeinschaftsKarten[3]
}
function riverAufdecken(){
    gemeinschaftsKarten1.innerHTML = gemeinschaftsKarten[4]
}

export function spielStarten(){
    let kartenSpiel =spielKartenGenerieren();
    kartenZiehen()
    flopsAufdecken()
    riverAufdecken()
    turnAufdecken()
}

