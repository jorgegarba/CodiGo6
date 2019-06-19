// analizar una estacion del año dado un numero 
// entre 1 y 4
// 1 => verano
// 2 => invierno
// 3 => primavera
// 4 => otonio
var estacion = +prompt("Ingresa un numero entre 1 y 4");
var rpta = "";
if(estacion == 1){
    rpta = "verano";
}else if(estacion == 2){
    rpta = "invierno";
}else if(estacion == 3){
    rpta = "primavera";
}else if(estacion == 4){
    rpta = "otonio";
}else{
    rpta = "Error";
}
console.log(`Estamos en ${rpta}`);

// EJERCICIOS PAGINA 88
// -> 3.1, 3.3, 3.4, 3.5, 3.9, 