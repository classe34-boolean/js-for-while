// Stampare tutti gli elementi di un array in pagina, all'interno di una lista.

var listaSpesa = [
    "Latte",
    "Biscotti",
    "Pasta",
    "Nutella",
    "Acqua"
];
var contenutoPrecedente;
var listaSpesaUl = document.getElementById("lista_spesa");


// soluzione #1: ciclo for
// for (var i = 0; i < listaSpesa.length; i++) {
//     console.log(listaSpesa[i]);

//     // contenutoPrecedente = document.getElementById("lista_spesa").innerHTML;

//     // document.getElementById("lista_spesa").innerHTML = document.getElementById("lista_spesa").innerHTML + "<li>" + listaSpesa[i] + "</li>";

//     listaSpesaUl.innerHTML += "<li>" + listaSpesa[i] + "</li>";

//     // x = x + "ciao";
//     // // shorthand
//     // x += "ciao";
// }

// soluzione #2: ciclo while
var i = 0;

while (i < listaSpesa.length) {
    // blocco di istruzioni
    listaSpesaUl.innerHTML += "<li>" + listaSpesa[i] + "</li>";
    // istruzioni per terminare il ciclo
    i++;
}