

var contador = 100;
do{
    console.log(`Saludo ${contador}`);
    contador++;
}while(contador < 5);

// Algoritmo para pedir al usuario una opcion
// Si el usuario ingresa el numero:
// 1 => El programa debe mostrar la palabra "LUNES"
// 2 => El programa debe mostrar la palabra "MARTES"
// sucesivamente hasta el numero 7(domingo)
// Luego de mostrar el dia de la semana, el programa
// debe pedir nuevamente al usuario que ingrese un nuevo numero
// si el usuario ingresa el numero 10,
// El programa debe finalizar
// si el usuario ingresa un numero diferente a 
// 10 y no está comprendido entre 1 y 7
// El programa debe pedir el ingreso del numero nuevamente
// de forma indefinida
var opcion;
do{
    opcion = +prompt(`Ingresa una opcion
                     entre 1 y 7. 10 para salir`);
    switch(opcion){
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sabado");
            break;
        case 7:
            console.log("Dormingo");
            break;
        case 10:
            console.log("Fin del programita");
            break;
        default:
            console.log("Error");
    }        
}while(opcion != 10);

// EJERCICIOS LIBRO PAG 138
// 4.2, 4.3, 4.5, 4.9, 4.8