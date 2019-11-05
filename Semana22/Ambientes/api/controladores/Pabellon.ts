import { Model } from 'sequelize';
// PABELLON CONTROLLER
import { Request, Response } from 'express';
import { Pabellon } from './../configuracion/sequelize';

let getPabellones = (req: Request, res: Response) => {

}

export let postPabellon = (req: Request, res: Response) => {
  // validando si el req.body cumple con los parametros minimos
  // de entrada
  if (!req.body.pab_nom) {
    res.status(400).json(
      {
        ok: false,
        mensaje: "No se recibieron todos los campos en el request"
      }
    );
    return;
  }

  // creando una instanacia de la clase o modelo
  // Pabellon
  let objPabellon = Pabellon.build(req.body);


  // guardando el objeto pabellón en la base de datos
  objPabellon.save().then((objPabellonCreado: any) => {
    res.status(201).json(
      {
        ok: true,
        contenido: objPabellonCreado,
        mensaje: "Pabellon creado correctamente"
      }
    );
  }).catch((errorsh: any) => {
    res.status(500).json(
      {
        ok: false,
        mensaje: "Error interno en el servidor",
        contenido: errorsh
      }
    );
  })


}