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

parolAlcontraio (parolaUtente);

let controllo = false;

if (parolaUtente == parolAlcontraio) {
    controllo = true;
} 

if (controllo) {
    console.log("Questa è una parola Palindroma");
} else {
    console.log("Questa NON è una parola Palindroma");
}