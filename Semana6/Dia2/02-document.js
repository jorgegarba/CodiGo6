// document
// representa al DOM => Document Object Model
// manipulando el dom
// 1. referenciar a un elemento del dom
// mediante su ID o identificador
var miTitulo = document.getElementById("titulo");
console.log(miTitulo);

// 2. referenciar a un conjunto de elementos del dom
// dado el nombre de la clase que compartan
var miParrafos = document.getElementsByClassName("descripcion");
console.log(miParrafos);

// 3. referenciar a un conjunto de elementos del dom
// dado el nombre de su etiqueta
var misLis = document.getElementsByTagName("li");
console.log(misLis);

// 4. referenciar a un conjunto de elementos del dom
// dado un selector como en CSS

var misUls = document.querySelectorAll("section article ul");
console.log(misUls);

// 5. referenciar a la primera coincidencia dado un selector como en CSS
// OJO> Solo devuelve un elemento, asi exista mas de uno que coincida con 
// la seleccion
var unParrafo = document.querySelector("p");
console.log(unParrafo);