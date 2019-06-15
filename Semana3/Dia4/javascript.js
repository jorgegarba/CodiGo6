console.log("pruebita");

var nombre;
// primero el prefijo var ___________
// variable = valor;
// siempre pongan un ; al finalizas sentencias
nombre="Jorge";
nombre=7;

var PrimerNombre = "Jorge", SegundoNombre="Montesinos", ApellidoMaterno = "Aramayo",dni = 784158158158;

console.log(PrimerNombre);

var Nombre = "Lucia";
// por favor no utlicen simbolos raros ñ ´
//NUMEROS|NUMBER   TEXTO|STRING    BOOLEANOS

//NUMBER

var x=9;
var y=3.1415;
var e=10e10;

console.log(x);
console.log(y);
console.log(e);

//STRINGS - TEXTO

var string = 'Hola';
var caracter = 'A';

console.log(string);
console.log(caracter);

//VARIABLES BOOLEANAS

var lapizzavaconpina = true;
var piscoeschileno = false;

console.log(lapizzavaconpina);

//VALORES RAROS
// Valor Infinity
console.log(5/0);
// Not A number
console.log(5/"patata");

var algo;
//undefined si no damos ningún valor a nuestra variable
//OPERADORES

var n1 = 9;
var n2 = 7;

var suma = n1 + n2;
var resta = n1 - n2;
var multiplicacion = n1 * n2;
var division = n1/n2;
var residuo = n1%n2;

console.log("Operación suma " + suma);
console.log("Operación resta " + resta);
console.log("Operación Multiplicación " + multiplicacion);
console.log("Operación División" + division);
console.log("Operacion Residuo " + residuo);

//OPERADOR UNARIO

var mitexto = "Pizza con champiñones";
var pedazosdepizza = 8;
var notanumber = 5/"patata";

console.log(typeof(mitexto));
console.log(typeof(pedazosdepizza));
console.log("ejemplo " + typeof(notanumber));
//Imprimir caracteres extraños

var otrotexto = "\"Hola chicos ya \nse viene la pizza\"";

console.log(otrotexto);