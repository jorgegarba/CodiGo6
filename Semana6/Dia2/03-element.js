var divCuadrado = document.getElementById("cuadrado");

// GET ancho de un elemento
// devuelve un valor numero en pixeles
console.log(divCuadrado.clientWidth);
// SETTEANDO => el ancho
divCuadrado.style.width = "250px";
// Para colocar los estilos
// Cuando el estilo es de un sola palabra
// Por ejemplo: width, height, margin, padding, border, etc.
// la asignación será [elemento].style.[el mismo atributo];

// Cuando el estilo es de una palabra compuesta
// Por ejemplo: background-color, border-radius, margin-top, etc.
// la asignación será usando Camel Case
// Ejemplo: backgroundColor, borderRadius, marginTop

// GET alto de un elemento
// devuelve un valor numero en pixeles
console.log(divCuadrado.clientHeight);

//Nos devuelve el ancho (CON BORDES)
console.log(divCuadrado.offsetWidth);

//Nos devolverá el alto (Con Bordes)
console.log(divCuadrado.offsetHeight);

//Nos va a devolver el desplazamiento según la parte superior
//a partir del contenedor en el que se encuentre
console.log(divCuadrado.offsetTop);

//nos devolverá el desplazamiento del lado izquierdo a partir 
//del contenedor en el que se encuentre
console.log(divCuadrado.offsetLeft);

//La posición del elemento con referencia al top,
//obtendrá el número de pixeles del elemento que ha sido desplazado con la barra de desplazamiento vertical
console.log(divCuadrado.scrollTop);

//Devolverá la posicion del elemento con referencia al Left
//obtendrá el número de pixeles del elemento que ha sido desplazado con la barra de desplazamiento horizontaL
console.log(divCuadrado.scrollLeft);

function deslizar(){
    var miCaja = document.getElementById("miDiv");
    miCaja.scrollTop = miCaja.scrollTop+20;
    miCaja.scrollLeft = miCaja.scrollLeft+10;
}
// =>y con la consola llamemos a esta función para ver que hace scrollTop 

//como asignar una función a un determinado evento
//que en este caso va a ser el evento "click"
var boton = document.getElementById("botoncito");

//addEventListener va a recibir 2 cosas,
//1ra. va a recibir el evento que hay que escuchar
//2da. una función, algo que ejecutar
boton.addEventListener("click",function(){
    // alert("Me has dado click!");
    divCuadrado.style.height = `${divCuadrado.clientHeight+5}px`;
    divCuadrado.style.left = `${divCuadrado.offsetLeft+6}px`;
});

var btnCambiarClase = document.getElementById("cambiarClase");

btnCambiarClase.addEventListener("click",function(){
    //className => obtiene la clase del elemento
    // console.log(divCuadrado.className);

    if(divCuadrado.className=="redondo"){
        divCuadrado.className = "cuadrado";
    }else{
        divCuadrado.className = "redondo";
    }

});

var multiclase = document.querySelector("#multiclase");
//classList que nos va a dar un arreglo con todas clases que tiene nuestro elemento
//Obtenemos el botón 
var btnAgregarClase = document.getElementById("agregarClase");

btnAgregarClase.addEventListener("click",function(){
    multiclase.classList.remove("fondo");
    multiclase.classList.add("margen");
});

