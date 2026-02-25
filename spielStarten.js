// Gemeindschaftskarten (ziehen + Array)

import {karten} from "./karten.js";  // importieren der Karten aus karten.js
import {kartenSpiel, zufaelligeKarteZiehen} from "./zufaelligeKarte.js";  // importieren der zufaelligeKarteZiehen Funktion aus zufaelligeKarteZiehen.js


function kartenZiehen(){
    let spieler1 = []
    spieler1.unshift(zufaelligeKarteZiehen())
    spieler1.unshift(zufaelligeKarteZiehen())
    console.log("Karten des Spieler 1",spieler1)
    let spieler2 = []
    spieler2.unshift(zufaelligeKarteZiehen())
    spieler2.unshift(zufaelligeKarteZiehen())
    console.log("Karten des Spieler 2",spieler2)
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
}

