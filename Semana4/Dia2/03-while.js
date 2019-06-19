var contador = 0;

while(contador < 10){
    console.log(`Saludo ${contador}`);
    contador++;
}
// Algoritmo que imprima la tabla de multiplicar
// del 1 al 12 de un numero dado por
// el usuario.
// el resultado debe tener la forma
// 1 x N = N
// 2 x N = ?
var n = +prompt("Ingresa el numero para la tabla");
var contador = 0;
while(contador < 13){
    console.log(`${contador} x ${n} = ${contador*n}`);
    // console.log(contador + " x " + n + " = "+ (contador*n));
    contador++;
}