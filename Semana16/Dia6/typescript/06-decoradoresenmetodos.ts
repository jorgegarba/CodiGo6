//Esta función va a ser mi decorador
function patrick(target,key){
    console.log("Ya pero después me llevas a comer " + key);
}

class Persona {
    private nombre:string;
    private apellido:string;

    constructor(nombre:string,apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    @patrick
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y me voy a consumir unas cevichelas`);
    }
}

let alumnoCodigo:Persona = new Persona("Jorge","Garnica");
alumnoCodigo.saludar();