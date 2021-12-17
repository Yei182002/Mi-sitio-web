var ciudad1 = "MoNtEbOnItO";
/*Pasando todo a mayusculas */
ciudad1 = ciudad1.toUpperCase();
console.log(ciudad1);

/*pasando todo  a minùsculas */
ciudad1 = ciudad1.toLowerCase();
console.log(ciudad1)

/*Primera letra en mayuscula */
ciudad1 = ciudad1[0].toUpperCase() + ciudad1.slice(1);
console.log(ciudad1);

var anyo2 = "2019";
var auxConsecutivo = anyo2.slice(2, 4);
console.log(auxConsecutivo)

/*Contando caracteres */
var tematica = "Programación Orientada a Objetos";
console.log("Longitud: " + tematica.length);

/*Buscando Espacios dobles */
var nombres = "Kevin Stiven";
for (i = 0; i < nombres.length; i++) {
    if (nombres.slice(i, (i + 2)) === "  ") {
        console.log("La cadena contiene espacios ");
        break;
    }
}
/*Reemplazando parte de la cadena de texto */
var hobby = "Programar en Java";
var newLang = "Python";
for (i = 0; i < hobby.length; i++) {
    if (hobby.slice(i, i + 4) === "Java") {
        hobby = hobby.slice(0, i);
    }
}
console.log(hobby + newLang)
    /*metodo indexof para reemplazar parte de una cadena de texto. */
var hobby2 = "Programar en Javascript a tope";
var firstChar = hobby2.indexOf("Javascript")
if (firstChar !== -1) {
    console.log(firstChar);
    hobby2 = hobby2.slice(0, firstChar) + "php" + hobby2.slice(firstChar + 10);
    console.log(hobby2);
}

/*Estrayendo el primer caracter */
var primerNombre = "Kevin";
var primerCaracter = primerNombre.charAt(0);
console.log(primerCaracter);
/*Estrayendo el ultimo caracter */
var primerNombre = "Kevin";
var primerCaracter = primerNombre.charAt(primerNombre.length - 1);
console.log(primerCaracter)
    /*Buscando Caracteres Especiales */
var frase = "Hola!"
for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === "!") {
        console.log("La cadena tiene signos de admiración.");
    }
}
/*Reemplazar texto con el método replace */
var ciudad = "Pitalito Huila"
ciudad = ciudad.replace("Pitalito", "Huila");
console.log(ciudad);