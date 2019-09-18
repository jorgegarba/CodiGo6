interface iProducto {
    codigo:number;
    nombre:string;
    inventario:number;
    /**
     * sumarInventario sumar la cantidd actual de productos y retornará la cantidad de productos de la suma del inventario
     */
    sumarInventario(cantidad:number):number;
}

class Producto implements iProducto{
    public codigo:number;
    public nombre:string;
    public inventario:number;
    private id:string = "qwerty123";
    private formulaSecreta:string = "la formula X";

    constructor(codigo:number,nombre:string,inventario:number){
        this.codigo = codigo;
        this.nombre = nombre;
        this.inventario = inventario;
    }

    get Id():string{
        return this.id;
    }

    get Formula():string{
        return this.formulaSecreta;
    }

    sumarInventario(cantidad:number):number {
        this.inventario = this.inventario + cantidad;
        return this.inventario;
    }
}

let mouse:Producto = new Producto(1234,"Mouse Logitech",20);

console.log(mouse.codigo);

console.log(mouse.Formula);

let inventarioFinal:number = mouse.sumarInventario(30);
console.log(inventarioFinal); //50

console.log(mouse.Id);




