// No hay problema si yo junto diferentes tipos de datos
//en mi arreglo
var paises = ['Perú','Venezuela','Brasil','Bolivia',1,4,2,3,true];
// 0,1,2,3,4,5,6

console.log(paises[0]);

var palabra = "Pizza ";

console.log(palabra[1]);
console.log(`La longitud de ${palabra} es ${palabra.length}`);

for(i = 0; i<palabra.length; i++){
    console.log(palabra[i]);
}

var grupoA = ['Bolivia','Brasil','Perú','Venezuela','Chile'];
var goles = [1,3,3,0,-10];
var estrellas = ['Chumacero','Neymar','Guerrero','Maduro','Sanchez'];

for(i = 0; i<grupoA.length;i++){
    console.log(`${grupoA[i]} metió ${goles[i]} y su mejor jugador es ${estrellas[i]}`);
}

//Bolivia metio 1 gole(s) y su mejor jugador es Chumacero

/*Son tres personas El Sr. Garnica, El Sr. Rodriguez y la Srta. Azucena, ambos Sres. son ingenieros y la Srta. es psicóloga, y tienen 27 26 y 40 años respectivamente

imprima de la sgte manera sus datos:

El Sr.( La Srta.) Tal tiene X años y es Desenrollador
 */


//de un arreglo con 9 8 2 15 8 7 6 7 8 2 1 regrese las ultimas X variables, verifique que X no sea mayor a la cantidad de elementos del arreglo

//Si ponemos 5 deberia devolver 1 2 8 7 6
//--------------------------------------------------
//Invierta el orden de las letras de una palabra, por Ej.:
//Si tiene la palabra 'Pizza' imprima 'azziP';

var numeros = [9,8,2,15,8,7,6,7,8,2,1];
var limite = 4;
var contador = 0;
for (i = numeros.length-1; i >= numeros.length-limite; i--){
    console.log(numeros[i]);
}

var comida = "Pizza";

for (i = comida.length-1; i >=0; i--){
    console.log(comida[i]);
}

//Sumaaaando matrices
console.log("----------------------\n");
var matriz1 = [[1,8,4],[3,2,5],[8,1,9]];
var matriz2 = [[3,1,2],[4,3,1],[0,2,1]];
var matriz4 = [[2,5,9],[8,7,5],[1,0,4]];

var matriz3 = [];
for(i = 0; i<matriz1.length;i++){
    // al declarar que matriz3[i] = [] estoy declarando
    //que en esa posición se contendrá otro arreglo
    matriz3[i] = [];
    for(j = 0; j<matriz1[i].length;j++){

        matriz3[i][j] = matriz1[i][j] + matriz2[i][j] + matriz4[i][j];
        // console.log(matriz1[i][j]);
    }
}
console.log(matriz3);

//TRANSPONER UNA MATRIZ

var matriz = [[5,6,3],[1,2,4]];
//http://tiny.cc/Transpuesta
// resultado sea =>  [[5,1],[6,2],[3,4]];



var matrizTranspuesta=[];

for (i = 0; i < inicial[0].length; i++){
    matrizTranspuesta[i] = [];
    for(j = 0; j < matriz.length;j++){
        matrizTranspuesta[i][j] = matriz[j][i];
    }
}
console.log(matrizTranspuesta);








