import { Request, Response } from 'express';
import { Aula } from '../configuracion/sequelize';

let getAulas = (req: Request, res: Response) => {

}

export let postAula = (req: Request, res: Response) => {
    let objAula = Aula.build(req.body.aula);
    objAula.save().then((aulaCreada:any)=>{
        res.status(201).json({
            message:'ok',
            content:aulaCreada
        })
    }).catch((error:any)=>{
        res.status(501).json({
            message:'error',
            error
        })
    })
}