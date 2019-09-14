/**
 * [Arreglo].map(()=>{}) recorrera un arreglo y transformará mi arreglo
 * devolviendo un nuevo arreglo transformado según lo que indiquemos que retorne
 */
let numeros = [4,9,16,25,36,49];


let mitades = numeros.map((numero)=>{
    return numero / 2; //un nuevo arreglo con mis números divididos /2
});

let raiz = numeros.map((elemento)=>{
    return Math.sqrt(elemento);
});

console.log(mitades);

console.log(raiz);

