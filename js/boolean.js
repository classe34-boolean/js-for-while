// Scrivere la parola Boolean all'interno dell'h1, una lettera per riga

var titolo = "BOOLEAN";
var h1 = document.getElementById("title");

for (var i = 0; i < titolo.length; i++) {

    console.log(titolo[i]);
    h1.innerHTML += titolo[i] + "<br>"; 

}