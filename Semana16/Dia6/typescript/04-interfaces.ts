interface iPersona{
    nombre:string,
    apellido:string,
    dni:number,
    talla?:number //que esta propiedad va a ser opcional con ?:
}

let persona2:iPersona = {
    nombre:"Jorge",
    apellido:"Garnica",
    dni:666666666,
}

let mostrarDatos = (persona:iPersona) =>{
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if(persona.talla){
        console.log(persona.talla)
    }
}

let objPersona:iPersona = {
    nombre:"Patrick",
    apellido:"Rodri",
    dni:12345670,
    talla:1.70
}

mostrarDatos(objPersona);
