var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Esta función va a ser mi decorador
function patrick(target, key) {
    console.log("Ya pero después me llevas a comer " + key);
}
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola soy " + this.nombre + " " + this.apellido + " y me voy a consumir unas cevichelas");
    };
    __decorate([
        patrick
    ], Persona.prototype, "saludar");
    return Persona;
}());
var alumnoCodigo = new Persona("Jorge", "Garnica");
alumnoCodigo.saludar();
