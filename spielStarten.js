// Kartenstapel für die Spieler erstellen -> zufällig Karten ziehen (zwei Spieler)
// Gemeindschaftskarten (ziehen + Array)

import {karten} from "./karten.js";  // importieren der Karten aus karten.js
import {zufaelligeKarteZiehen} from "./zufaelligeKarte.js";  // importieren der zufaelligeKarteZiehen Funktion aus zufaelligeKarteZiehen.js




function kartenVerteilen(){
    let spieler1 = []
    spieler1.unshift(zufaelligeKarteZiehen())
    spieler1.unshift(zufaelligeKarteZiehen())
    console.log("Karten des Spieler 1",spieler1)
    let spieler2 = []
    spieler2.unshift(zufaelligeKarteZiehen())
    spieler2.unshift(zufaelligeKarteZiehen())
    console.log("Karten des Spieler 2",spieler2)
}