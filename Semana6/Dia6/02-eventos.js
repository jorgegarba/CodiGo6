var btn = document.getElementById("boton");


//nuestra función anónima al recibir como parámetro 'e', nos dará todas las propiedades del evento que se ha ejecutado
btn.onclick = function(e){
    
   console.log(e);
   //type es una propiedad de e que nos devuelve el tipo de evento que se ha ejecutado
    console.log(e.type);
}

var link = document.getElementById("hipervinculo");

//Hay elementos con comportamientos predefinidos, como un hipervínculo, preventDefault,nos permite capturar el evento y no ejecutar su comportamientoPredefinido
link.onclick = function(e){
    e.preventDefault();
}

var cuadrado = document.getElementById("cuadrado");
var redondo = document.getElementById("redondo");

function Click(e){
    console.log(e);
    //target hace referencia al objetivo del evento, en este caso al elemento al cuál le hacemos click
    console.log(e.target);
    //getAttribute es una propiedad(funcion) que me permite obtener un atributo del objetivo recibe un atributo del elemento
    console.log(e.target.getAttribute("goles"));
    
    if(e.target.getAttribute("id") === "cuadrado"){
        console.log("Es un cuadrado brasileño")
    }else{
        //setAttribute cambiará el valor de un atributo en el HTML, recibirá el atributo y el valor a cambiar 
        e.target.setAttribute("goles","4");
        console.log("este es un redondo guerrero");
        console.log(e.target.getAttribute("goles"));
    }
//  clientX y clientY nos dará las coordenadas respecto a la ventana, cuando hagamos click 
    console.log(`X => ${e.clientX} respecto a la ventana`);
    console.log(`Y => ${e.clientY} respecto a la ventana`);

//offsetX y offsetY nos dará las coordenadas en un ejeX y ejeY respectivamente pero respecto a nuestro elemento
    console.log(`X => ${e.offsetX} respecto al elemento`);
    console.log(`Y => ${e.offsetY} respecto al elemento`);

//altKey,shiftKey,ctrlKey es una propiedad que nos devolvera un booleano para saber si se ha hecho click con la tecla Alt,shift y control respectivamente
if(e.altKey === true){
    console.log("Me has hecho click presionando Alt!")
}
if(e.shiftKey === true){
    console.log("Me has hecho click presionando Shift!")
}
if(e.ctrlKey == true){
    console.log("Me has hecho click presionando Control!")
}
//this hará referencia al mismo objeto y en este caso será equivalente a e.target
console.log(this);

}

//Hacemos referencia a la función Click pero a partir de dos elementos distintos

cuadrado.onclick = Click;
redondo.onclick = Click;