//igualamos Titulo y al igualarlo lo estamos convirtiendo
//a un objeto document
// var Titulo = document.getElementById("title");
// // ya al tener la etiqueta en una variable podemos cambiar 
// //su estilo desde Javascript usando la propiedad style.<css>
// Titulo.style.color = "red";

//para poder modificar un elemento (sus atributos), requerimos acceder a sus propiedades
//style es una de ellas que nos permite cambiar los estilos de un elemento

//obtenemos el elemento
// var Imagen = document.getElementById("img");

//y modificamos sus propiedades tal como si estuvieran en CSS
// Imagen.style.borderRadius = "30px";
// Imagen.style.border = "10px dashed green";

var hojaEstilo = document.getElementById("css");
function cambiarEstilo(){
    //setAttribute va a recibir dos cosas,
    //1. El atributo que queremos cambiar (href, width, height...)
    //2. El valor de ese atributo
    hojaEstilo.setAttribute("href","./dark.css");
}


//=> llamamos a la función desdela consola