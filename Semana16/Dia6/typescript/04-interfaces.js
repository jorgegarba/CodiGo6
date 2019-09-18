var persona2 = {
    nombre: "Jorge",
    apellido: "Garnica",
    dni: 666666666
};
var mostrarDatos = function (persona) {
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if (persona.talla) {
        console.log(persona.talla);
    }
};
var objPersona = {
    nombre: "Patrick",
    apellido: "Rodri",
    dni: 12345670,
    talla: 1.70
};
mostrarDatos(objPersona);
