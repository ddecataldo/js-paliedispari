/*
* Palidroma
* Chiedere all’utente di inserire una parola
* Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedere all'utente di inserire una parola
const parolaUtente = prompt("Inserisci una parola");

// Scomporre la parola e analizzarla lettara per lettera
// Il metodo .split() divide l' oggetto String in un Array di strighe separando la stringa in sottostringhe.
const splitParolaUtente = parolaUtente.split("");
/* console.log(splitParolaUtente); */

// Invertire l'ordine della parola inserita dall'utente
// Con il metodo .reverse() possiamo invertire i singoli elementi dell'array. 
// Il primo elemento sarà occuperà l'ultima posizione del nostro array e l'ultimo elemento occuperà la prima posizione del nostro array.
const reverseParolaUtente =  splitParolaUtente.reverse();
/* console.log(reverseParolaUtente); */

// Riunire le parole
// Con il metodo .join() possiamo ricongiunge tutti i singoli caratteri precedentemente separati dal metodo split() e ricomporre la parola.
const joinParolaUtente = reverseParolaUtente.join("");
/* console.log(joinParolaUtente); */

function verificaParolaUtente (){

    if(parolaUtente === joinParolaUtente){
        console.log("La parola " + parolaUtente + " è palindroma.")
    } else{
        console.log("La parola " + parolaUtente + " non è palindroma.")
    }

}

console.log(verificaParolaUtente());


