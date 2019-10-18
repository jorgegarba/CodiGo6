//1.La manera convencional!!!!!!!! sin ECS 6
// const  Vehiculo  = require('./Vehiculo');
//2. Importando por deestructuración Varias Clases.
// const { Vehiculo, Avion } = require('./Vehiculo');

// const Camioneta = new Vehiculo('Camioneta 4x4','Hyundai');
// const AvionComercial = new Avion();

// Camioneta.imprimirVehiculo();
// AvionComercial.imprimirVehiculo();

//3. Sha utilizando ECMAscript 6 con Imports

// import { Avion, Burro, Vehiculo } from './Vehiculo.mjs';

// const Camioneta = new Vehiculo('Camioneta 4x4','Hyundai');
// const AvionComercial = new Avion();
// const Burrito = new Burro();

// Camioneta.imprimirVehiculo();
// AvionComercial.imprimirVehiculo();
// Burrito.imprimirVehiculo();

//4. importando por default
// import Swal,{Clase1,Clase2} from 'sweetalert2';

// import Vehiculo, {Avion, Burro} from './Vehiculo.mjs';

// const Camioneta = new Vehiculo('Camioneta 4x4','Hyundai');
// const AvionComercial = new Avion();
// const Burrito = new Burro();

// Camioneta.imprimirVehiculo();
// AvionComercial.imprimirVehiculo();
// Burrito.imprimirVehiculo();

//5.importando con *
// importando todo como transportes desde la ubicacion.js
import * as Transportes from './Vehiculo.mjs'

const Camioneta = new Transportes.Vehiculo('Camioneta 4x4','Hyundai');
const AvionComercial = new Transportes.Avion();
const Burrito = new Transportes.Burro();

Camioneta.imprimirVehiculo();
AvionComercial.imprimirVehiculo();
Burrito.imprimirVehiculo();