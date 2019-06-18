// si el sueldo es mayor a 3500
// retener el 13%;
// de lo contrario, pagar el 100% del sueldo
var sueldo = 3600.00;

if (sueldo > 3500) {
    console.log("Se retiene el 13%");
    console.log(`Total a pagar ${sueldo - sueldo * 0.13} soles.`);
} else {
    console.log("No se retiene el 13%");
    console.log(`Total a pagar ${sueldo} soles.`);
}

console.log("Fin del programa");

// El usuario ingrese
// horasTrabajadas =>number
// sueldoPorHora =>number
// ANOTACION: parseInt("6") =>  devuelve el numero 6 en entero(number)
var horasTrabajadas = +prompt("Ingrese horas trabajadas");
var sueldoPorHora = +prompt("Ingrese sueldo por hora");

// el total a pagar sera las 40 primeras horas
// multiplicado por el sueldo por hora,
// el exceso a las 40 horas, se paga el doble
// del sueldo por hora
var total = 0;
if (horasTrabajadas > 40) {
    var extras = horasTrabajadas - 40;
    total = (extras * 2 * sueldoPorHora) + (40 * sueldoPorHora);
} else {
    total = sueldoPorHora * horasTrabajadas;
}
console.log(`Total a pagar ${total}`);

// COMPARADORES ARITMETICOS
// a > b    =>   a mayor que b
// a < b    =>   a menor que b
// a <= b   =>   a menor o igual que b
// a >= b   =>   a mayor o igual que b
// a == b   =>   a igual que b
// a != b   =>   a diferente que b
// COMPARADORES LOGICOS
// p && q   =>   p y q
// p || q   =>   p ó q
//   !q     =>   no q

// evaluar si el anio es bisiesto
var anio = 2123;
// un anio es bisiesto cuando
// 1.- es multiplo de 4 pero no de 100
// 2.- o sea multiplo 400
if((anio % 4 == 0 && anio % 100 != 0) || anio%400 == 0){
    console.log("El anio es bisiesto");
}else{
    console.log("El anio no es bisiesto");
}
// if (anio % 4 == 0) {
//     if (anio % 100 != 0) {
//         console.log("El anio es bisiesto");
//     }else{
//         console.log("El anio NO es bisiesto");
//     }
// } else if(anio % 400 == 0 ){
//     console.log("El anio es bisiesto");
// }else{
//     console.log("El anio NO es bisiesto");
// }
