//Eventos
//Evento va a ser un conjunto de instrucciones que se 
//ejecutarán cuando capturemos algún determinardo evento 
//o comportamiento en nuestro HTML, este dado por el usuario

//1.addEventListener   ->  oyente 

var divRojo = document.getElementById("rojo");

//addEventListener pedirÁ 1. el evento 2. la función a ejecutar
//1ra manera de pasarle la función será dandole una función anónima
// divRojo.addEventListener("click",function(){
//     alert("Has dado click en Rojo");
// });

function Alerta(){
    alert("Este es otro Alert!!");
}
//si les resulta un poquito confuso
// var Alerta = function(){
//     alert("Otra alerta pero asignada a una variable");
// }
//2da manera es recibir el evento y como 2do parámetro es recibir el nombre de la función a ejecutar pero solo referenciando el nombre, sin () al final
//Modelo de Eventos Standart
divRojo.addEventListener("click",Alert;

//------------------------------

var divBlanco = document.getElementById("blanco");

//Hacemos referencia directamente al evento del elemento
//Modelo de eventos Básico
//Hacemos regerencia y su evento directamente => elemento.evento = funcion anonima
//a comparación de los eventos con addEventListener, se le agregará el prefijo on => ej.: onclick
divBlanco.onclick = function(){
    console.error("Hola soy un error de JS :)");
}

//--------------------------------

var texto = function(){
    console.log("Has hecho click al botón");
}

var texto2 = function(){
    console.log("Has hecho click al botón y a ejecutado otra función");
}

var btnDocumento = document.getElementById("boton");

btnDocumento.addEventListener("click",texto);
btnDocumento.addEventListener("click",texto2);

//removeEventListener removerá la ejecución de un evento, y su función => removeEventListener(evento,funcion);
btnDocumento.removeEventListener("click",texto);

var entrada = document.getElementById("input");

//el evento focus hace referencia a un elemento de tipo input, cuando el cursor esta activo dentro.
// entrada.addEventListener("focus",function(){
//     console.log("Me has hecho focus");
// });

//el evento blur se activará cuando se quite el focus (marcador de escritura) de un elemento input
// entrada.addEventListener("blur",function(){
//     console.log("Me estoy ejecutando al salir");
// });

//el evento change se activará solamente cuando el contenido del input cambie, mientras no haya cambios no pasará nada!
entrada.addEventListener("change",function(){
    console.log("He cambiado!");
});
