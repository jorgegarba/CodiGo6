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
divRojo.addEventListener("click",Alerta);

var divBlanco = document.getElementById("blanco");