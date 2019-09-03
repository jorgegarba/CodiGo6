//también lo encuentran como destructuración 
//DESTRUCTURANDO ARREGLOS
let numeritos = [9, 6, 4,["x","y","z"],100,90,60,20,1000,50];
//forma tradicional, tendriamos que crear variables por cada elemento del arreglo
let segundo = numeritos[1];
let primero = numeritos[0];

console.log(primero);
console.log(segundo);


//destructurando un arreglo
let [uno, dos, tres, [xx,yy,zz], ...elsobrante] = numeritos;

console.log(uno);
console.log(dos);
console.log(tres);
console.log(tres-uno);

console.log(xx);
console.log(yy);
console.log(zz)

console.log(elsobrante);

//DESTRUCTURACIÓN DE OBJETOS
console.log("---------Objetos Destructurados--------");

let cevichela = {
    id:1,
    precio:30,
    descripcion:"Ceviche más chelas, plato preferido de Código",
    componentes:["Cerveza","Ceviche"],
    oferta:{
        descuento:5,
        condicion:"sábados y domingos"
    }
}

// let precio = cevichela.precio;
// let descripcion = cevichela.descripcion;

// console.log(precio);
// console.log(descripcion);

//Para destructurarun objeto, declaro el nombre de las propiedades conociendolas 
let {id,descripcion,precio:cuantoEsta} = cevichela;

console.log(descripcion);
console.log(cuantoEsta);

let {componentes:[pri,seg]} = cevichela;

console.log(pri);


let {oferta:{condicion}} = cevichela;

console.log(condicion);