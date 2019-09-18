let sumatoria = (a:number, b:number):number =>{
    return a + b;
}

let sum:number = sumatoria(8,2);

console.log(sum);

let mostrarData = (persona:any) => {
    console.log(persona.nombre);
    console.log(persona.apellido)
}

mostrarData({nombre:"Azucena",apellido:"Rodriguez"});