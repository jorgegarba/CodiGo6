// Math => Clase que provee de funciones
// matematicas "sin la necesidad" de crear un objeto
// de dicha clase
// estas clases, son llamadas clases "estáticas".

// Raiz cuadrada de un numero
console.log(Math.sqrt(81));

// El piso de un numero
console.log("Piso de 9.8 => " + Math.floor(9.8));

// El techo de un nuermo
console.log("Techo de 9.1 => " + Math.ceil(9.1));

// Redondear un numero
console.log("Redondeo de 4.5 => " + Math.round(4.5));
console.log("Redondeo de 4.1 => " + Math.round(4.1));
console.log("Redondeo de 4.9 => " + Math.round(4.9));

// Numero random o aleatorio entre 0 y 1 en dechimales
console.log("Random entre 0 y 1 => " + Math.random());

// Numero random entre 2 numeros dados
console.log("Random entre 4 y 25 => " + Math.round((Math.random() * (25-4) + 4) ) );