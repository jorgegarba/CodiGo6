
var nombre = " Asociacion Tecsup Arequipa ";
// obtener un texto en minusculas
console.log(nombre.toLowerCase());

// obtener un texto en mayusculas
console.log(nombre.toUpperCase());

// Longitud de una cadena
console.log(nombre.length);

// Obtener una porción de la cadena dada
// una posicion inicial y una posicion final
console.log(nombre.substring(11,17));

// Obtener una porción de la cadena dada
// una posición incial hasta el final
console.log(nombre.substring(11));

// Obtener un arreglo de subcadenas a partir 
// de un caracter separador
console.log(nombre.split(" "));

// obtener un caracter de la cadena dada su posición
// forma1 => tratar a la cadena como un arreglo
console.log(nombre[11]);
// forma2 => usando la función charAt([posicion])
console.log(nombre.charAt(11));

// obtener la posición desde donde inica un caracter
// o una subcadena
console.log(nombre.indexOf("ecsup"));

// obtener una cadena sin los espacios en blanco
// EN LOS EXTREMOS
console.log(nombre.trim());


for (let i = 0; i < nombre.length; i++) {
    console.log(nombre.charAt(i));
}


// EJERCICIOS
// 1. Obtener la cantidad de vocales mayusculas
// o minusculas de una cadena de texto

var minusculas = nombre.toLowerCase();
var vocales = 0;
for(var i=0; i<minusculas.length;i++){
    if(minusculas.charAt(i) == "a" ||
        minusculas.charAt(i) == "e" || 
        minusculas.charAt(i) == "i" || 
        minusculas.charAt(i) == "o" || 
        minusculas.charAt(i) == "u" ){
        vocales++;  
    }
}
console.log("Cantidad de vocales = " + vocales);

