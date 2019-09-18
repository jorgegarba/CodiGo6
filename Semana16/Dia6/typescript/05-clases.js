class Producto {
    constructor(codigo, nombre, inventario) {
        this.id = "qwerty123";
        this.formulaSecreta = "la formula X";
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
    }
    get Id() {
        return this.id;
    }
    get Formula() {
        return this.formulaSecreta;
    }
    sumarInventario(cantidad) {
        this.inventario = this.inventario + cantidad;
        return this.inventario;
    }
}
let mouse = new Producto(1234, "Mouse Logitech", 20);
console.log(mouse.codigo);
console.log(mouse.id);
console.log(mouse.formulaSecreta);
console.log(mouse.Formula);
let inventarioFinal = mouse.sumarInventario(30);
console.log(inventarioFinal); //50
console.log(mouse.Id);
