var cafe = "Latte";

var jugo = {
    ingrediente1:'papaya',
    ingrediente2:'agua',
    ingrediente3:'azucar',
    ingrediente4:null
}

delete cafe;
delete jugo.ingrediente4;
console.log(jugo);

//copiar objetos

var gato = {
    nombre: 'Salem',
    color: 'Negro'
}

var gato2 = gato;

console.log(gato);
console.log(gato2);

gato2.color = 'Blanco';

console.log(gato);
console.log(gato2);

// var gato3 = Object.assign(gato);
// aplicando {...objeto} copiamos un objeto pero sin hacer
//referencia a su misma dirección de memoria
var gato3 = {...gato};
gato3.color = 'Blanco';

console.log(gato);
console.log(gato3);

console.log("comparando gatos");

console.log(gato == gato2);
console.log(gato == gato3);

var auto = {
    motor: '6 cilindros',
    cambios:'manual',
    suspension:'Hidraulica',
    asientos:'tela'
}

console.log(Object.keys(auto));

//si desean saber este concepto esta dentro de destructuracion
//viene desde la v8 de ECMAscript
//estamos copiando de formar rápida el archivo y modificando
//sus propiedades
function retornarAuto (auto){
    return {...auto,
    asientos:'cuero',
    luces:'neón'};
}

console.log(retornarAuto());

var AutoNuevo = retornarAuto(auto);

console.log(AutoNuevo);