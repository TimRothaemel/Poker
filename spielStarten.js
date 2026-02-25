// Gemeindschaftskarten (ziehen + Array)

import {karten} from "./karten.js";  // importieren der Karten aus karten.js
import {zufaelligeKarteZiehen} from "./zufaelligeKarte.js";  // importieren der zufaelligeKarteZiehen Funktion aus zufaelligeKarteZiehen.js

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

function gemeinschaftsKartenZiehen(){
    let gemeinschaftsKarten = []
    gemeinschaftsKarten.unshift(zufaelligeKarteZiehen())
    gemeinschaftsKarten.unshift(zufaelligeKarteZiehen())
    gemeinschaftsKarten.unshift(zufaelligeKarteZiehen())
    console.log("Gemeinschaftskarten: ", gemeinschaftsKarten)
}


kartenZiehen()
gemeinschaftsKartenZiehen()
