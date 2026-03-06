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
let btnCheck = document.getElementById("btn_checken")
let spieler_einsatz = document.getElementById('spieler_einsatz')
let gegner_einsatz = document.getElementById('gegner_einsatz')

let gemeinschaftsKarten = gemeinschaftsKartenZiehen()

console.log(gemeinschaftsKarten)

let spieler = {
    name: "Spieler",
    chips: 100,
    karten: [],
    einsatz: 0
}
let gegner = {
    name: "Gegner",
    chips: 100,
    karten: [],
    einsatz: 0
}
let pot = 0
let potAnzeige = document.getElementById("pot-wert")
potAnzeige.innerText = `Chips: ${pot}`
function kartenZiehen(){
    spieler.karten.unshift(zufaelligeKarteZiehen())//Karten des Spilers random ziehen
    spieler.karten.unshift(zufaelligeKarteZiehen())

    gegner.karten.unshift(zufaelligeKarteZiehen())//Karten des Gegner random ziehen
    gegner.karten.unshift(zufaelligeKarteZiehen())
    console.log(spieler, gegner)
}


function flopsAufdecken(){
    gemeinschaftsKarten1.innerHTML = `<p class="farbe">${gemeinschaftsKarten.flop1[0].farbe}</p><br><p class="wert">${gemeinschaftsKarten.flop1[0].wert}</p>`;
    gemeinschaftsKarten2.innerHTML = `<p class="farbe">${gemeinschaftsKarten.flop2[0].farbe}</p><br><p class="wert">${gemeinschaftsKarten.flop2[0].wert}</p>`;
    gemeinschaftsKarten3.innerHTML = `<p class="farbe">${gemeinschaftsKarten.flop3[0].farbe}</p><br><p class="wert">${gemeinschaftsKarten.flop3[0].wert}</p>`;
    gemeinschaftsKarten4.classList.add('hidden')//fügt die Klasse die sie unsichtbar macht hinzu
    gemeinschaftsKarten5.classList.add('hidden')//fügt die Klasse die sie unsichtbar macht hinzu


}
function turnAufdecken(){
    gemeinschaftsKarten4.innerHTML = `<p class="farbe">${gemeinschaftsKarten.turn[0].farbe}</p><br><p class="wert">${gemeinschaftsKarten.turn[0].wert}</p>`;
    gemeinschaftsKarten4.classList.remove('hidden')//entfernt die Klasse die sie unsichtbar macht
}
function riverAufdecken(){
    gemeinschaftsKarten5.innerHTML = `<p class="farbe">${gemeinschaftsKarten.river[0].farbe}</p><br><p class="wert">${gemeinschaftsKarten.river[0].wert}</p>`;
    gemeinschaftsKarten5.classList.remove('hidden')//entfernt die Klasse die sie unsichtbar macht
}

export function spielStarten(){
    let kartenSpiel =spielKartenGenerieren();
    kartenZiehen()// jeder spieler erhält zwei Karten
    flopsAufdecken()

}

function einsatzAnzeigen(){
    spieler_einsatz.innerText=spieler.einsatz
    gegner_einsatz.innerText=gegner.einsatz
}

einsatzAnzeigen()