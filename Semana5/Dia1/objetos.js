// Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre y un valor,

/*Como declaramos un objeto, separamos sus propiedades con comas:
var nombreobjeto = {
    propiedad1: valorpropiedad1,
    propiedad2: valorpropiedad2
}
*/

var objPerro = {
    raza:'Poodle',
    tamano:'Chiquito',
    color:'Blanquito',
    caracter:'Bullicioso',
    edad:11,
    hobbies:['masticarzapatos','perseguir gatos','dormir']
}
var objPerro2 = {
    raza:'Pastor Aleman',
    tamano:'Grande',
    color:'negro con cafe',
    genero:'Hembra',
}

console.log(objPerro);
console.log(objPerro2);

console.log(objPerro.edad);
console.log(objPerro.hobbies[1]);

console.log(objPerro2.hobbies);

var jauria = [objPerro,objPerro2];

console.log(jauria);

var objPersona1 = {
    nombres:'Marta',
    apellidos:'Rojas',
    edad:29,
    dni:78562185,
    domicilio:'Cerro Colorado',
    profesion:'Medica',
    telefono:'78547887'
}

var objPersona2 = {
    nombres:'Freddy',
    apellidos:'Polar',
    edad:30,
    dni:879898498,
    domicilio:'Cayma',
    profesion:'Chef',
    telefono:'74849849'
}
var personas = [];
objPersona1.celular = '4984984949';
personas.push(objPersona1);
personas.push(objPersona2);

for (i = 0; i<personas.length; i++){
    alert(`${personas[i].nombres} tiene el siguiente dni ${personas[i].dni}`);
    var nuevoDni = prompt("Ingrese su nuevo DNI");
    personas[i].dni = nuevoDni;
    var Genero = prompt("El género de la persona es ?");
    personas[i].genero = Genero;
}

console.log(personas);