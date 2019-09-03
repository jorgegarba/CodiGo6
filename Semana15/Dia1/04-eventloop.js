//:::Este archivo no es de código es de un concepto:::
//Javascript solo puede ejecutar una sola tarea a la vez
//y Por eso tenemos que tener cuidado con eventos asincronos
//como hacer una llamada a una API, una consulta que puede demorar X tiempo

// console.log("Hola");
// console.log("Chicos");
// console.log("Como están");

console.log("Hola");
setTimeout(function(){
    console.log("Chicos");
},0);
console.log("Como están");
//imprime de forma desordenada porque esta utilizando el event loop