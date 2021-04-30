// Stampare tutti i nomi in un array

// var nomi = ["Gianluca", "Andrea", "Adriano", "Sofia"];
// console.log(nomi);

// // for (var i = 0; i < nomi.length; i++) {
// //     console.log(nomi[i]);
// // }

// var i = 0;
// while (i < nomi.length) {
//     // blocco di istruzioni
//     console.log(nomi[i]);
//     // istruzioni per terminare il ciclo
//     i++;
// }

var emails = [
    "gianluca@boolean.careers",
    "andrea@boolean.careers",
    "adriano@boolean.careers",
    "sofia@boolean.careers",
];

var emailUtente = prompt("Inserisci una mail");

var trovato = false;
var i = 0;

while (trovato == false && i < emails.length) {

     // blocco di istruzioni
    console.log("Iterazione", i);
   
    if(emailUtente == emails[i]) {
        trovato = true;
    }

    // istruzioni per terminare il ciclo
    i++;
}

if(trovato) {
    alert("Sei nella lista");
} else {
    alert("Non sei nella lista");
}