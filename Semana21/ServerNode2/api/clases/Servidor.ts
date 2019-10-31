import express from 'express';
import { producto_router } from './../rutas/Producto';
import { empleado_router } from './../rutas/empleado';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { pruebaConexion } from '../config/sequelize';
import { sequelize } from '../config/sequelize';

export class Servidor {

  public app: express.Application;
  public puerto: number;

  constructor() {
    
    this.app = express();
    this.puerto = 3000;
    //bodyParser es un middleware que puede leer el body de mis peticiones
    //ya sea de forms o objetos json que me envie el cliente
    //bodyParser.json() - para leer objetos JSON
    this.app.use(bodyParser.json());
    //bodyParser.urlencoded para leer información de forms
    this.app.use(bodyParser.urlencoded({extended:true}));
    //si utilizamos middlewares como BodyParser debemos asegurarnos que nuestras rutas esten al final
    this.app.use(morgan('dev'));
    this.configurarRutas();
  }

  configurarRutas() {
    this.app.use(producto_router);
    this.app.use(empleado_router);
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log("Servidor corriendo correctamente en el puerto " + this.puerto);

      // pruebaConexion();
      //force: true --> cada vez que incie el proyecto y se ejecute, va a eliminar tablas,contenido, relaciones, que tengan para crear unas desde 0

      //force: false --> cada vez que inicie no tocara nada sin embargo si creamos una nueva tabla la creará sin problemas

      //sync sincroniza/crea, los modelos con la base de datos
      sequelize.sync({force:true}).then(()=>{
        console.log("Tablas creadas con exito");
      }).catch((error:any)=>{
        console.log("Algo a pasao llama a alguien de CodiGO :(", error);
      });
    });
  }
}
