var numeroPC = 3;
var numeroUtente;

// soluzione #1: while
// numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 9"));
// console.log(numeroUtente);

// while(isNaN(numeroUtente) || numeroUtente > 9 || numeroUtente < 1) {
//     numeroUtente = parseInt(prompt("Errore! Inserisci un numero compreso tra 1 e 9"));
// }

var primaIterazione = true;
var inizioMessaggio = "";
// soluzione #2: do-while
do {
    if(primaIterazione) {
        primaIterazione = false;
    } else {
        inizioMessaggio = "Errore! ";
    }
    numeroUtente = parseInt(prompt(inizioMessaggio + "Inserisci un numero compreso tra 1 e 9"));
} while (isNaN(numeroUtente) || numeroUtente > 9 || numeroUtente < 1);

var somma = numeroPC + numeroUtente;
console.log(somma);