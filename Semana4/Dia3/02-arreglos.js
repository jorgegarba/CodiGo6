// creando un arreglo con elementos iniciales;
var marcas = ["Hyundai","Toyota","Kia","Audi","Nissan"];
// creando un arreglo vacío:
var equipos = [];
// imprimiendo un elemento del arreglo marcas
console.log(marcas[2]);
console.log(`${marcas[0]} y ${marcas[3]}`);
// imprimiendo todo un arreglo
console.log(marcas);
// asignando el valor en una posicion del arreglo
marcas[3] = "Daewoo";
console.log(marcas);
// PROPIEDADES BASICAS DE LOS ARREGLOS
// Obtener la cantidad de elementos de un arreglo
// length => retorna la cantidad de elementos de un
// arreglo
var elementos = marcas.length;

console.log(elementos);

console.log(marcas.length);

// Recorriendo un arreglo
for(var i = 0; i < marcas.length; i++){
    console.log(`Posicion ${i} => ${marcas[i]}`);
}
// Ejercicios
// 1. Declarara un arreglo de 10 numeros enteros
// y modificar dichos numeros por sus cuadrados
// al final, imprimir el arreglo resultante
// Ejm [4,7,9,3] => [16, 49, 81, 9]

var enteros = [4,6,3,7,8,9,1,10,5];
console.log(enteros);
for(var i = 0; i < enteros.length; i++){
    enteros[i] = enteros[i] * enteros[i];
}
console.log(enteros);