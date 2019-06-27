/* SINTAXIS
var objCelular = {
    pantalla: '6 pulgadas',
    marca: 'Huawei',
    memoria: '4 GB',
    sensorHuella: true
}
*/

//De un pequeño sistema de mantenimientos de autos

//vamos a definir un objeto vehiculo con variables,
//arreglos para agrupar una cantidad de propiedades
//que en este caso son los mantenimientos
//Y también vamos a añadir en las propiedades del vehiculo
//funciones que permitan obtener datos del vehiculo

var objVehiculo1 = {
    marca:'Toyota',
    modelo:'Corolla',
    color:"Rojo",
    anio:2018,
    mantenimientos:[
        {
            fecha:'01-01-2019',
            observaciones:'Sin observaciones',
            kilometraje: 9000
        },
        {
            fecha:'02-05-2019',
            observaciones:'Se observo un raspón',
            kilometraje: 10000
        }
    ],
    verVehiculo: function(){
        console.log(this);
    },
    mostrarMantenimientos: function(){
    //this va a hacer referencia a mi propio objeto
        for (i = 0; i<this.mantenimientos.length; i++){
            console.log(`El mantenimiento ${i}
            se llevo a cabo el 
            ${this.mantenimientos[i].fecha} 
            con un kilometraje de 
            ${this.mantenimientos[i].kilometraje} 
            y tiene las siguientes obs. 
            ${this.mantenimientos[i].observaciones}`);
        }
    }
}
// objVehiculo1.mostrarMantenimientos();

var mantenimientoAdicional = {
    fecha:'26-06-2019',
    observaciones:'Estaba cochino, no lo lavan',
    kilometraje:'11000'
}

objVehiculo1.mantenimientos.push(mantenimientoAdicional);

objVehiculo1.mostrarMantenimientos();

objVehiculo1.verVehiculo();

/* cree un carrito de compras que tenga NombredeUsuario
    Y una propiedad Productos que sea un arreglo donde 
    guarde todos los productos con 
    NombreDeProducto, Cantidad y Precio
    Y una funcion que me devuelva todos los 
    
    Recuerde usar this para hacer referencia a su objeto

*/

var objPersona = {
    nombres: 'Juan Perez',
    DNI:'779878643'
}
var carrito = {
    usuario:'Juan Perez',
    productos:[
        {
            nombreProducto:'Audifonos Phillips',
            cantidad:5,
            precio:90
        },
        {
            nombreProducto:'Mouse Logitech',
            cantidad:2,
            precio:50
        }, //recuerden las comas parar separar su arreglo y props objeto
        {
            nombreProducto:'Hub USB',
            cantidad:3,
            precio:20
        }

    ],
    mostrarCarrito:function(){
        var total = 0;
        for(i=0;i<this.productos.length;i++){
            console.log(`esta llevando ${this.productos[i].cantidad}
            ${this.productos[i].nombreProducto} cada uno a 
            ${this.productos[i].precio}`);
            total = total + this.productos[i].precio;
        }
        console.log(`Su compra es por : ${total}`);
    }
}

carrito.mostrarCarrito();
console.log(carrito);

//Peculariedades de objetos en Javascript

