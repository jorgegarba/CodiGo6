//funciones flecha :)

function suma (a,b){
    return a+b;
}

// console.log(suma(10,20));
//la declaración es idéntica a la de una función anónima
//let nombreFunc = (parametros) => {código a ejecutar}
let sumaFlecha = (a,b) =>{
    return a+b;
}

console.log(sumaFlecha(10,20));

//si el código es corto y voy a retornar una sola cosa
//conviene evitar las llaves y poner directamente 
//lo que se va a retornar en vez de hacer esto

/**
 * let hola = (nombre) => {
 *  console.log(`Hola ${nombre}`)
 * };
 * 

hola("Patrick");
 */
let hola = (nombre) => console.log(`Hola ${nombre}`);

hola("Patrick");

//puedo obviar los parentesis al momento de recibir las variables de mi función siempre y cuando solo reciba una

//Math.pow eleva un numero a su potencia X donde el segundo parametro que recibe es X
let cuadrado = numero => Math.pow(numero,2);

console.log(cuadrado(6));

//Pueden utilizar la forma que deseen, todas son válidas
//Dato Adicional, cuidado con utilizar 'this' con funciones flecha