/*Una resistencia es n componente electrónico que codifica su valor con colores

https://www.espaciohonduras.net/images/electronica/articuloselectronica/codigodecolorespararesistencias_1/codigo_colores_resistencias_5_bandas.png

cree una función que permita saber los 3 primeros valores de la resistencia, por ejemplo
si sus primeros colores son Rojo, Amarillo y Violeta esto equivaldria a 247*/

function menu (){
    alert(`Ingrese los colores de la resistencia
        NE - Negro
        M - Marron
        R - Rojo
        N - Naranja
        Y - Amarillo
        V -Verde
        A - Azul
        VI - Violeta
        G - Gris
        B - Blanco
    `)
}
//en este caso break servirá de salida para un loop pero al ser un función, return no solo retornará un valor tambien terminará la función.
function colores(color){
    switch (color){
        case "NE":
            return 0;
            //break;
        case "M":
            return 1;
            // break;
        case "R":
            return 2;
            // break;
        case "N":
            return 3;
            // break;
        case "Y":
            return 4;
            // break;
        case "V":
            return 5;
            // break;
        case "A":
            return 6;
            // break;
        case "VI":
            return 7;
            // break;
        case "G":
            return 8;
            // break;
        case "B":
            return 9;
            // break;
        default:
            alert("no es un color valido");
            break;
    }
}
//Manera de usarlo con Do While con un contador


// var contador = 0;
// var color1, color2, color3;
// do{
//     menu();
//     var Color = prompt("ingrese el color");
//     if(contador == 0){
//         color1 = colores(Color);
//     }
//     else if(contador == 1){
//         color2 = colores(Color);
//     }
//     else if(contador == 2){
//         color3 = colores(Color);
//     }
//     contador++;
// }while(contador < 3);

// console.log(color1);
// console.log(color2);
// console.log(color3);
// alert(`la resistencia sera de ${color1} ${color2} ${color3}`);

//Resuelto con un for,como vimos después podemos usar .push(valor), para añadir un valor al final del arregLo.
var resistencia = [];
for(i = 0;i < 3 ; i++){
    menu();
    var Color = prompt("ingrese el color");
    resistencia[i] = colores(Color);
    // resistencia.push(colores(Color));
}
alert(`la resistencia sera de ${resistencia}`);


