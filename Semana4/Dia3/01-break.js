// break => sentencia que hace finalizar todas las iteraciones
// que le quedan a un ciclo for
var contadora = 0;
for(var i = 0; i < 1000; i++){
    if( i % 3 == 0 ){
        //aqui ya se que "i" es un multiplo de 3
        console.log(i);
        contadora++;
    }
    if(contadora == 5){
        break;
    }
}
// continue => sentencia que omite las operaciones que debe hacer el 
// ciclo for, hasta su proximo ciclo.
// esto depende de la ubicacion de la sentencia continue;
// Se omiten las operaciones desde donde se encuentra la sentencia
// 'continue' en adelante.

// suma acumulada de los numeros entre 0 y 500 excepto 
// los multiplos de 5
var total = 0;
// debugger;
for (var i = 0; i < 11; i++) {
    if(i % 5 == 0){
        continue;
    }
    total = total + i;
}
console.log(total);
