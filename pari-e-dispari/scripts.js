/* 
* Pari e Dispari
* L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
* Sommiamo i due numeri
* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
* Dichiariamo chi ha vinto. 
*/

// Dichiaro una variabile per memorizzare il numero utente
let numeroUtente = "";

// Chiedo all'utente un numero che sia compreso tra 1 e 5.
// Se l'utente inserisce un numero che non rispetta i requisiti richiesti il ciclo non va avanti, continuando a chiedere all'utente un numero
while (numeroUtente > 5 || numeroUtente < 1){
    numeroUtente = prompt("Inserisci un numero da 1 a 5");
}

// Genero un numero random per il computer
let numeroComputer = generaRandom();

function generaRandom (){
    let numeroComputer = Math.floor(Math.random()*5 + 1);
    return numeroComputer;
}

// Sommo il numero inserito dall'utente e quello generato dal computer
const somma = parseInt(numeroUtente) + parseInt(numeroComputer);

// Stabilisco se la somma dei due numeri è pari o dispiari
function controllaPari (num1){
    if(num1 % 2 === 0){
        console.log("Il numero è pari");
    } else {
        console.log("Il numero è dispari");
    }
}
controllaPari(somma);



// Stampo in console il vincitore
if(numeroUtente > numeroComputer){
    console.log("Complimenti hai vinto con il numero " + numeroUtente + ". Il numero del Computer è " + numeroComputer);
} else if (numeroUtente === numeroComputer) {
    console.log("La partita è finita in pareggio");
} else {
    console.log("Mi dispiace. Ha vinto il computer con il numero " + numeroComputer + ". Il tuo numero è " + numeroUtente);
}

