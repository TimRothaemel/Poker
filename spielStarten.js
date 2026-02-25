// Gemeindschaftskarten (ziehen + Array)

import {karten} from "./karten.js";  // importieren der Karten aus karten.js
import {kartenSpiel, zufaelligeKarteZiehen} from "./zufaelligeKarte.js";  // importieren der zufaelligeKarteZiehen Funktion aus zufaelligeKarteZiehen.js


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

function gemeinschaftsKartenZiehen() {
    let flop1 = zufaelligeKarteZiehen()
    let flop2 = zufaelligeKarteZiehen()
    let flop3 = zufaelligeKarteZiehen()
    let turn = zufaelligeKarteZiehen()
    let river = zufaelligeKarteZiehen()
}

function spielStarten(){
    kartenSpiel = karten;
    kartenZiehen()
    gemeinschaftsKartenZiehen()
    flopsAufdecken
}

function flopsAufdecken()

