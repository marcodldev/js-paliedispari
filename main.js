// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// - nome normale: 'Bob'
// - nome ribaltato: 'boB'
// - Bob == bob => si
// - parola palindroma

function parolAlcontraio(x) {

    let parola = x;
    let parolaReverse = '';

    for (let i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i]

    }
    console.log(`${parolaReverse}`);

    return parolaReverse;
}
//--------------- Fine Funzione

let parolaUtente = prompt("Inserisci qui una parola");

let parolaFinale = parolAlcontraio(parolaUtente);


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

let sceltaUtente = prompt("Pari o Dispari?").toLowerCase();


function numeroRandomPC(min, max) {

    let numeroRandom = Math.floor(Math.random() * (max - min + min)) + min;

    return numeroRandom;
}

function pariDispari(numero) {

    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


if (sceltaUtente == "pari" || sceltaUtente == "dispari") {
    let sceltaNumero = parseInt(prompt("scegli un numero da 1 a 5"));

    if (sceltaNumero >= 1 && sceltaNumero <= 5) {
        console.log(`hai scelto ${sceltaNumero}`);

        let numeroRandomicoPc = numeroRandomPC(1, 5);
        console.log(`il numero che ha scelto il pc è ${numeroRandomicoPc}`);

        let somma = sceltaNumero + numeroRandomicoPc;

        console.log(`la somma è ${somma}`);

        if (sceltaUtente == "pari" && pariDispari(somma) == true) {
            console.log("Hai vinto :)");
        } else  if (sceltaUtente == "dispari" && pariDispari(somma) == false) {
            console.log("Hai vinto :)");
        } else {
            console.log("Hai perso.");
        }

    } else {
        console.log("Scegli un numero valido GENTILMENTE.")
    }

} else {
    console.log("Scegli solo PARI o DISPARI");
}