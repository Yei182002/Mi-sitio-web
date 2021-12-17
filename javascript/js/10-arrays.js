"use strict"
for (var i = 1; i <= 10; i++) {
    console.log(i)
}
/*1er. forma declarar un array */
var usuario1 = new Array();
usuario1[0] = 1;
usuario1[1] = 1084330256;
usuario1[2] = "Roberto";
usuario1[3] = "Gomez";
usuario1[4] = "2012-11-25";
usuario1[5] = "Cartagena";
usuario1[0] = "Latam";
for (var j = 0; j <= usuario1.length -1; j++){
    console.log(usuario1[j]);
}
var usuario2 = new Array(2, "1034568976", "Kevin Stiven", "Ijaji","2004-08-13", "Paris", "Avianca");

var usuario3 = [3, "1025896874", "Stiven", "Ijaji", "2005-09-14", "Francia", "American Airlines"]

console.log("Nombre usuario1: " + usuario1[2]);
console.log("Nombre usuario2: " + usuario2[2]);
console.log("Nombre usuario3: " + usuario3[2]);




var mensajeUsuario = "No me gusto !";
var longitudMensajeUsuario = mensajeUsuario.length;

if (longitudMensajeUsuario >20) {
    console.log("El mensaje excede la longitud de carácteres permitidos");
}
else if (longitudMensajeUsuario < 20) {
    console.log("El mensaje fue enviado con éxito");
}
else {
    console.log("Ha surgido un error !");
}