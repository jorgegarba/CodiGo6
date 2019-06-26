/*function NombreFuncion(variables,...masvariables){

}*/

//Creen una función que reciba X números e imprima la multiplicación de tooodos los números que estamos recibiendo como variables

function multiplicar (...numeros){
    var resultado = 1;
    for(let i = 0;i<numeros.length;i++){
        resultado = resultado * numeros[i];
    }
    // console.log("El resultado de la multiplicación será : " + resultado);

    return resultado;
}

var multiplicacion = multiplicar(2,3,6,10,20,5);

console.log(multiplicacion);
console.log(multiplicacion*1000);

console.log(`${multiplicar(9,9,10,8,7,2,3,4)}`);
console.log(`${multiplicar(9*9)}`);

function alerta(){
    var texto = "este es el mensaje de alerta, Chile ha perdido";
    return texto;
}

function alerta2(){
    return "Perú se salvó";
}

console.log(alerta());

console.log(alerta2());
//------------------------------------------
function menu(){
    alert(`//Opciones
            1.- Suma
            2.- Resta
            3.- Salir`);
}

function calculadora(operacion){
     var a = +prompt("Ingrese el primer número");
     var b = +prompt("Ingrese el segundo número");

     if (operacion == "sumar"){
         alert(`la suma de los valores será ${a + b}`);
     }else{
         alert(`la resta de los valores será ${a - b}`);
     }
}

do{
    menu();
    var opcion= +prompt("Elija una opción de las indicadas anteriormente");
    if(opcion == 1){
        calculadora("sumar");
    }else if(opcion == 2){
        calculadora("restar");
    }
}while(opcion !== 3);


