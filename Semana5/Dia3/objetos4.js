//https://3.bp.blogspot.com/-2UnEixzvpbA/WRJ9kXuKNqI/AAAAAAAAL6o/4tOKtRfChoMXP7_fqf2m0JmLfIb--BOvACLcB/s1600/Ejemplo%2Bgrafico%2Bde%2Bclases%2By%2Bobjetos.jpg
//
function Persona (nombreInicial, edadInicial, dniInicial,sueldoInicial=1000){
    var sueldo = sueldoInicial;
    var objPersona = {
        nombre:nombreInicial,
        edad:edadInicial,
        dni:dniInicial,
        genero:'No especifica',
        email:'No dice',
        verPersona:function(){
            console.log(`Nombre: ${this.nombre}
                        Edad: ${this.edad}
                        DNI: ${this.dni}
                        Género ${this.genero},
                        e-mail: ${this.email}
                        Sueldo: ${sueldo}`);
        },
        cambiarGenero:function(nuevoGenero){
            this.genero = nuevoGenero;
        },
        cambiarNombre:function(nuevoNombre){
            this.nombre = nuevoNombre;
        },
        cambiarSueldo:function(nuevoSueldo){
            sueldo = nuevoSueldo;
        },
        obtenerSueldo: function(){
            return sueldo;
        }
    }
    return objPersona;

}
var Maria = Persona('Maria','22','5151515156');
var Paolo = Persona('Paolo','35','1561561664');
// modificar el sueldo de Paolo
Paolo.cambiarSueldo(8000);
console.log(Paolo.obtenerSueldo());


Maria.verPersona();
Paolo.verPersona();

Maria.cambiarNombre("Mario")
Maria.cambiarGenero("Hombre");

Maria.verPersona();
//Maria no es Maria, es Mario, creen la función para 
//que pueda ser de Nombre 'Mario'



var arreglo = [1,2,3,4,5,6,7];
//va a eliminar X elementos desde una determinada posición
//va a eliminar desde la posición 3, 1 elemento
arreglo.splice(3,1)

console.log(arreglo);


