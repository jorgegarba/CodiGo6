//DOCUMENT
//Me va a hacer referencia al DOM
//lo obtenemos porID
var miTitulo = document.getElementById("titulo");

var Caja = document.getElementById("cajita");

//por su nombre de clase, esto nos devolvera un arreglo con los elementos que tengan esa clase
var Parrafos = document.getElementsByClassName("texto");

//o por su etiqueta, en este caso h2
var Titulos = document.getElementsByTagName("h2");

//Adicional
//podemos acceder por un selector muy al estilo de CSS, aqui buscamos un objeto con clase texto, en estecaso el 1ero
var texto = document.querySelector(".texto");

//de igual manera que en CSS, pero aqui buscamos todos los objetos con clase texto, en un arreglo
var textos = document.querySelectorAll(".texto");

console.log(miTitulo);
console.log(Caja);
console.log(Parrafos);
console.log(Titulos);
console.log(texto);
console.log(textos);
