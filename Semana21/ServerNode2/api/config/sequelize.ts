import { producto_model } from '../models/producto';
import { Sequelize } from 'sequelize';

//Sequelize necesita para conectarse ('base de datos',usuario,contraseña,{opciones adicionales})
export const sequelize = new Sequelize('tiendita', 'root', 'admin',{
    host:'localhost',
    dialect:'mysql',
    timezone: '-05:00',
    logging: console.log
});

export const pruebaConexion = () => {
    sequelize.authenticate()
    .then(()=>{
        console.log("Nos hemos conectado a la BD de forma correcta! :D");
    }).catch((error:any) => {
        console.log("No se pudo conectar a la BD :( " , error);
    });
}

export const Producto = producto_model(sequelize, Sequelize);