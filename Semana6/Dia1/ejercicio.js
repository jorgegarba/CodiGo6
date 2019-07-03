/*Crear una función que reciba 4 parámetros (una URl, un target(_self,_blank) , el alto y el ancho para crear una nueva Ventana
     )
<a href="http://www.google.com" target="_blank">
Pueden hacerlo con variables o con prompt, es conveniente 
usar comillas invertidas 

Recordar que window hace referencia a una ventana de navegador
*/


//recibo las variables
var url = prompt("Ingrese la dirección Web");
var donde = prompt("Ingrese el target, puede ser _self ó _blank");
var ancho = parseInt(prompt("ingrese el ancho"));
var alto = parseInt(prompt("ingrese el alto"));
//Creo mi variable global para la ventana
var nuevaVentana;
//Una función que reciba estas variables
function crearVentana(Url,Donde,Alto,Ancho){
   //Recordemos que .open recibira 3 variables
    nuevaVentana = window.open(Url,Donde,`width=${Ancho},height=${Alto}`);
}
//llamamos :)
crearVentana(url,donde,ancho,alto);

