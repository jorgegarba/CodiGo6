function decorador(texto:string){
    return function(target){
        target.prototype.saludar = function(){
            console.log("Holi " + texto);
        }
        target.prototype.anio = new Date().getFullYear();
    }
}
//el decorador siempre se pone encima de lo que este decorando sin ;
@decorador("como estan :D")
class Promocion{
    integrantes:Array<string>;
    nombre:string;
    /**
     * @param  {Array<string>} integrantes
     * @param  {string} nombre
     */
    constructor(integrantes:Array<string>,nombre:string){
        this.integrantes = integrantes;
        this.nombre = nombre;
    }
    // saludar(texto){
    //     console.log("Holi" + texto)
    // }

    imprimirIntegrantes(){
        this.integrantes.forEach((integrante:string)=>{
            console.log(integrante);
        })
    }
}

let codigo6:Promocion = new Promocion(["Danny","Azucena","Gaby","Paloma","Marco","Ronald"],"Los cevichelas");

codigo6.saludar();
console.log(codigo6.anio);