import { karten } from "./karten.js"; // importieren der Karten aus karten.js

export function spielKartenGenerieren(){
  let spielKarten = karten; // Kartenstapel für karten im Spiel, wird mit karten aus karten.js gefüllt
  return spielKarten
}
let kartenSpiel = spielKartenGenerieren()
export function zufaelligeKarteZiehen() {
  // Funktion zum Ziehen einer zufälligen Karte
  let randomNumber = zufaelligeZahl();
  let Karte = kartenSpiel[randomNumber];
  kartenWeg(randomNumber);
  return Karte
}
function kartenWeg(randomNumber) {
  // Funktion zum Entfernen der gezogenen Karte aus dem Kartenstapel
  kartenSpiel.splice(randomNumber, 1);
}

function zufaelligeZahl() {
  // Funktion zum Generieren einer zufälligen Zahl basierend auf der Länge des Kartenstapels
  let randomNumber = Math.floor(Math.random() * kartenSpiel.length);
  return randomNumber;
}

let flop1 = []
let flop2 = []
let flop3 = []
let turn = []
let river = []

export function gemeinschaftsKartenZiehen() {
  flop1.unshift(zufaelligeKarteZiehen())
  flop2.unshift(zufaelligeKarteZiehen())
  flop3.unshift(zufaelligeKarteZiehen())
  turn.unshift(zufaelligeKarteZiehen())
  river.unshift(zufaelligeKarteZiehen())
  return {flop1, flop2, flop3, turn, river}
}
