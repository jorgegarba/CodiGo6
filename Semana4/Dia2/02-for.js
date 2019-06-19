// algoritmo para imprimir los numero pares
// comprendidos entre 0 y 9
for (var i = 0; i < 10; i++) {
    if( i % 2 == 0){
        console.log(i);
    }
}
// algoritmo para imprimir la suma acumulada
// de los numeros impares comprendidos entre 0 y 100

// debugger;
// debugger interrumpe el ciclo regular de la aplicacion
// y el programa empieza a depurarse manualmente
// linea a linea

var sumatoria = 0;
for (var i = 0; i < 101; i++) {
    if( i % 2 != 0){
        sumatoria = sumatoria + i;
    }
}
console.log("sumatoria " + sumatoria);

// algoritmo para contar la cantidad de numeros pares
// y contar la cantidad de numeros impares
// entre 2 numeros dados por el usuario
// var inicio = +prompt("Ingrese el primer numero");
// var fin = +prompt("Ingrese el segundo numero");

// var totalPares = 0;
// var totalImpares = 0;
// for (var i = inicio;  i <= fin; i++) {
//     if(i%2==0){
//         totalPares++;
//     }else{
//         totalImpares++;
//     }
// }
// console.log("Total de pares " + totalPares);
// console.log("Total de Impares " + totalImpares);

// Algoritmo para mostrar los multiplos de 5
// dados dos numeros (inicio y fin)
// de forma descendente

var inicial = +prompt("Ingrese el primer numero");
var final = +prompt("Ingrese el segundo numero");
for(var i = final; i >= inicial ;i--){
    if(i % 5 == 0){
        console.log(i);
    }
}