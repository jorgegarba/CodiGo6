import { conexion } from './../configuracion/sequelize';
import express, { Request, Response } from 'express';
import { pabellon_router } from './../rutas/Pabellon';
let bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

import * as swaggerDocument from './../apidocs/documentacion.json';


export class Server {
  public app: express.Application;
  public puerto: any;
  constructor() {
    this.app = express();
    // obtener el puerto que nos asignará heroku
    // o establer por defecto el puerto 3000
    this.puerto = process.env.PORT || 3000;
    // la configuracion de body-parser, siempre debe estas
    // antes de configurar las rutas
    this.configurarBodyParser();
    this.configurarRutas();
  }

  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }

  configurarRutas() {
    // configurando una ruta por defecto o de prueba
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send("BIENVENIDO AL SERVIDOR");
    });
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    this.app.use(pabellon_router);
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor OK en el puerto ${this.puerto}`);
      // force:true, elimina todas las tablas y las crea nuevamente
      // force:false, si las tablas no existen en la base de datos
      // las crea. Si las tablas ya existían en la base de datos
      // sólo crea las nuevas tablas en caso de que hubieran
      conexion.sync({ force: true }).then(() => {
        console.log("Base de datos creada correctamente");
      })
    });
  }

}