// class Vehiculo {

//     constructor(tipo,marca){
//         this.tipo = tipo;
//         this.marca = marca
//     }

//     imprimirVehiculo(){
//         console.log(`Es un ${this.tipo} de marca ${this.marca}`);
//     }
// }

// class Avion extends Vehiculo{
//     constructor(){
//         super('Boeing 747', 'Boeing');
//     }
// }
// //Ya no puedo mandarsolo 1 clase
// //1. module.exports = Vehiculo;
// //2.Exportare mis dos o mas clases en un OBJ
// //Propiedad: Clase
// //
// module.exports = {
//     Vehiculo: Vehiculo,
//     Avion: Avion
// }

//3. Ya utilizando ECMAscript 6 
// export class Vehiculo {

//     constructor(tipo,marca){
//         this.tipo = tipo;
//         this.marca = marca
//     }

//     imprimirVehiculo(){
//         console.log(`Es un ${this.tipo} de marca ${this.marca}`);
//     }
// }

// export class Avion extends Vehiculo{
//     constructor(){
//         super('Boeing 747', 'Boeing');
//     }
// }

// export class Burro extends Vehiculo{
//     constructor(){
//         super('Burro de Shrek', 'Burrito');
//     }
// }

//4. Exportando algo por default

// export default class Vehiculo {

//     constructor(tipo,marca){
//         this.tipo = tipo;
//         this.marca = marca
//     }

//     imprimirVehiculo(){
//         console.log(`Es un ${this.tipo} de marca ${this.marca}`);
//     }
// }

// export class Avion extends Vehiculo{
//     constructor(){
//         super('Boeing 747', 'Boeing');
//     }
// }

// export class Burro extends Vehiculo{
//     constructor(){
//         super('Burro de Shrek', 'Burrito');
//     }
// }

//5. Utilizando *

export class Vehiculo {

    constructor(tipo,marca){
        this.tipo = tipo;
        this.marca = marca
    }

    imprimirVehiculo(){
        console.log(`Es un ${this.tipo} de marca ${this.marca}`);
    }
}

export class Avion extends Vehiculo{
    constructor(){
        super('Boeing 747', 'Boeing');
    }
}

export class Burro extends Vehiculo{
    constructor(){
        super('Burro de Shrek', 'Burrito');
    }
}


