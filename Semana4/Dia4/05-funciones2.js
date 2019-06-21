'use strict';
//use strict es una directiva que cambiará la manera que el
//navegador ejecuta el código, previene que se declaren
//variables sin var ej.:   x = 0    y hace respetar el ámbito
//de una variable. (entre muchas más cosas que se consideran 
//inseguras en JS)
function funcionSinVariables(){
    //No hay nadaaaaaa
}
funcionSinVariables();

function Saludo(nombre){
    console.log(`Hola ${nombre} como estas`);
}

Saludo("Lucia");
//num1 es la base num2 será el exponente
function potencia(num1,num2){
    let resultado = num1 ** num2;
    console.log(`El resultado será : ${resultado}`);
}

potencia(2,3);
potencia(10,10);
potencia(12,2);

function arreglo(array){
    console.log(array);
}

var otroArreglo = [2,3,4,5];

arreglo(otroArreglo);

var miFuncion = function(masTexto){
    console.log("Texto Aleatorio" + masTexto);
}

miFuncion("QWERTY");
// ...elementos (usando ... ) recibira variables extra y creará un arreglo
/* con esas variables, si no pasamos nada para elementos
creará un arreglo vacio */
function muchasVariables(a,b, ...elementos ){
    console.log(elementos);
    console.log(a);
    console.log(b);
}
muchasVariables(2,4);
muchasVariables(3,4,5,6,10,20000,1986);

//Crear una función para una tienda que me acepte 
/*el monto a pagar, la cantidad recibida, y me imprima 
esas dos variables más el vuelto 

==> el recibo es por ________ el cliente pago con ______
y su vuelto es __________
NT.: en el caso de usar prompt, recuerde que se debe 
convertir a float con parsefloat(variable) para que 
no lo reconozca como texto 

------------------------------------------------

Realice el mismo ejercicio de la parte superior pero 
reciba en vez de un solo monto a pagar un arreglo con el 
costo desglozado, el resultado deberia ser idéntico*/


