//también sera un decorador en una clase;
function loCorrecto(target){
    return class extends target{
        nombre = "Sr. James";
        apellido = "Bond";

        saludo(){
            return `Buen día yo soy el ${this.nombre} ${this.apellido}`
        }
    }
}

@loCorrecto
class Persona{
    nombre:string 
    apellido:string

    constructor(nombre:string,apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    //??????????????? no asi no se saluda
    saludo(){
        return `Holi me llamo ${this.nombre} ${this.apellido} XD que tal`;
    }
}

let Personita:Persona = new Persona("Patrick","Rodriguez");

console.log(Personita.saludo());