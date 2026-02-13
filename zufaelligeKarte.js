import { karten } from "./karten.js"; // importieren der Karten aus karten.js

let kartenSpiel = karten; // Kartenstapel für karten im Spiel, wird mit karten aus karten.js gefüllt

export function zufaelligeKarteZiehen() {
  // Funktion zum Ziehen einer zufälligen Karte
  let randomNumber = zufaelligeZahl();
  let Karte = kartenSpiel[randomNumber];
  kartenWeg(randomNumber);
  console.log("Zufällige Karte: ", Karte);
  return Karte
}
function kartenWeg(randomNumber) {
  // Funktion zum Entfernen der gezogenen Karte aus dem Kartenstapel
  kartenSpiel.splice(randomNumber, 1);
  console.log(kartenSpiel, kartenSpiel.length);
}

function zufaelligeZahl() {
  // Funktion zum Generieren einer zufälligen Zahl basierend auf der Länge des Kartenstapels
  let randomNumber = Math.floor(Math.random() * kartenSpiel.length);
  console.log("Random Zahl: " + randomNumber);
  return randomNumber;
}
