console.log('Hola chicos');

console.log('este es mi número', 6);

console.table('Hola estoy en un tabla');

//VARIABLES
//var nombrevariable = valor;

var nombre;

nombre = "Jorge";

var apellido = "Montesinos";

var dni = 7894561295, estadoCivil, genero="M", hobbies="Comer";

estadoCivil = "Soltero";

estadocivil = "Es complicado";

// NUMBERS / NUMEROS

var numero = 10;
var decimal = 3.5;
var exponencial = 10e5;
var negativo = -1000;

console.log("Hola soy un entero => " + numero);
console.log("hola soy un decimal = > " + decimal);
console.log("Hola soy un numero elevado con e = > " + exponencial);
console.log("hola soy negativo => " + negativo);

//TEXTOS /STRING

var miTexto = 'Hoy ganamos no?';
var miNota = "A";

console.log("Mi texto es => " + miTexto);
console.log("Mi nota será = > " + miNota);

console.log("HOY GANAMOS \n \"3 - 0\"");

//BOOLEANOS

var mequiere = true;
var perolaverdad = false;

console.log(mequiere);

//OPERADORES ARITMETICOS

var n1 = 5;
var n2 = 6;

var suma = n1+n2+5;
var resta=n1-n2;
var multiplicacion = n1 * n2;
var division = n1/n2;
var residuo = n2%n1;

console.log("mi suma es : " + suma);
console.log("mi resta será : " + resta);
console.log("mi multiplicación es : " + multiplicacion);
console.log("mi división será : " + division);
console.log(`mi residuo es ${residuo} y estas son operaciones aritmeticas`);

var operacion = 1.2*3;

operacion = 1.2*10*3/10;

console.log("mi operación con decimales es : " + operacion);

var edad = 24;
edad = "24 años";

console.log("la edad promedio es " + edad);

var miEdad = prompt("Ingresa tu edad");
// var Edad = parseInt(miEdad);

var goles = 1;
//goles = goles +1;
goles += 1;

var temperatura = 10;
temperatura -=1;

var peso = 6;
peso *=6;

console.log("Perú metió " + goles + " goles");
console.log("la temperatura en la noche es " + temperatura);
console.log("mi peso se ha multiplicado despues de tanta pizza " + peso);

//TIPOS ESPECIALES

console.log(5/0);
// NotANumber
console.log(10/"goles");

//Operadores Unarios

var numerito = 20;
var letras = "ABCDEF";
var ganamos = true;

console.log(typeof(numerito));
console.log(typeof(letras));
console.log(typeof(ganamos));

console.log(typeof(10/"camotes"));

console.log(8 * null);
console.log("5" - 2);
console.log("5" + 2);
console.log(false == 0);
console.log(NaN == NaN);

