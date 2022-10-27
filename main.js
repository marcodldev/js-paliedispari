// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// - nome normale: 'Bob'
// - nome ribaltato: 'boB'
// - Bob == bob => si
// - parola palindroma

function parolAlcontraio (x) {

let parola = x;
let parolaReverse = '';

for( let i = parola.length - 1 ; i >= 0 ; i-- ){
  parolaReverse += parola[i]

}
console.log( `${parolaReverse}` );

return parolaReverse;
}
//--------------- Fine Funzione

let parolaUtente = prompt("Inserisci qui una parola");

let parolaFinale = parolAlcontraio (parolaUtente);


let controllo = false;

if (parolaUtente === parolaFinale) {
    controllo = true;
}

if (controllo) {
    console.log("Questa è una parola Palindroma");
} else {
    console.log("Questa NON è una parola Palindroma");
}

 // funziona

//______________________________________________________________\\

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let pari = document.getElementById("Pari");
let dispari = document.getElementById("Dispari");
let scelta ="";

function sceltaPari (scelta) {
    let scelta = prompt("Inserisci qui un numero pari");

return scelta;
}
console.log(scelta);


function sceltaDispari () {
    let scelta = prompt("Inserisci qui un numero dispari");
}