import { Request, Response } from 'express';
import { Usuario } from '../configuracion/sequelize';
const Sequelize = require('sequelize');
const Op = Sequelize.Op; // Los operadores de comparacion de sequelize
export let crearUsuario = (req: Request, res: Response) => {
    // build => CONSTRUYE el objeto usuario, mas NO LO CREA en la base de datos
    let objUsuario = Usuario.build(req.body.usuario);
    objUsuario.setSaltYHash(req.body.usuario.usu_pass);
    // save()=> promesa que GUARDA el registro en la Base de Datos
    objUsuario.save().then((usuarioCreado: any) => {
        Usuario.findByPk(usuarioCreado.usu_id).then((usuarioEncontrado: any) => {
            res.status(201).json({
                message: 'Usuario creado',
                content: usuarioEncontrado
            })
        })
    }).catch((error: any) => {
        res.status(501).json({
            message: 'Error',
            content: error
        })
    })
}
export let encontrarUsuByNomOApe = (req: Request, res: Response) => { }
export let iniciarSesion = (req: Request, res: Response) => { }