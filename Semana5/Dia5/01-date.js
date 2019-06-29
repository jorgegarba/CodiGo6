var fecha = new Date();

// imprimir la fecha actual completa
console.log(fecha);

// imprimir el anio de la fecha en 4 digitos
console.log(fecha.getFullYear());

// imprimi el mes de la fecha en un numero entero [0-11]
console.log(fecha.getMonth());

// imprimir el numero del dia de la fecha
console.log(fecha.getDate());

// imprimir el numero del dia en la semana de la fecha [1-7]
console.log(fecha.getDay());

// imprimir la hora de la fecha
console.log(fecha.getHours());

// imprimir los minutos de a fecha actual
console.log(fecha.getMinutes());

// imprimir los segundos de la fecha actual
console.log(fecha.getSeconds());

// imprimir los milisegundos de la fecha actual
console.log(fecha.getMilliseconds());

console.log("modificando el año a 2030");
fecha.setFullYear(2030);
console.log("Nueva fecha");
console.log(fecha);

// setMonth([0-11]) => cambia el mes de la fecha
// setDate([1-31]) => cambia el numero del dia de la fecha
// setHours([0-23]) => cambia la hora de la fecha
// setMinutes([0-59]) => cambia los minutos de la fecha
// setSeconds([0-59]) => cambia los segundos de la fecha
// setMilliseconds([0-999]) => cambia los milisegundos de la fecha

// Formas de instanciar un objeto de tipo fecha
// Devuelve la fecha actual del ordenador (FRONT END)
var miFecha = new Date();
// Devuelve la fecha indicando el anio,mes y dia
var miFecha2 = new Date(2018,09,08);
// Devuelve la fecha indicando el anio, mesa, dia, horas, minutos y segundos
var miFecha3 = new Date(1991,09,08,02,10,45);

// 5 es Junio por que los meses inician en 0
var ayer = new Date(2019,05,27);


console.log(miFecha - ayer);
// ¿Cuántas semanas faltan para navidad?

var navidad = new Date(2019,11,25);
var milisegundos = navidad - miFecha;
var segundos = milisegundos/1000;
var minutos = segundos/60;
var horas = minutos/60;
var dias = horas/24;
var semanas = dias/7;

console.log(semanas);
