import {Request, Response, NextFunction} from 'express';

var jwt = require('jsonwebtoken');

export let verificarToken = (token:string)=>{
    try {
        let data = jwt.verify(token,'codigo6',{algorithm:'RS256'});
        return data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}
export let wachiman = (req:Request,res:Response,next:NextFunction)=>{
    // La funcion next sirve para verificar si todo esta correcto da paso a la siguiente ruta
    if(req.headers.authorization){
        let token = req.headers.authorization.split(" ")[1]; // Aca separamos la autor. que viene "BEARER 12312312312.123123123.123123"
        let data = verificarToken(token);
        if(data){
            next();
        }else{
            res.status(401).json({
                message:'error',
                content:'la token no es valida o ya expiró'
            })
        }

    }else{
        // en este caso no hay token
        res.status(401).json({
            message:'Error',
            content:'Falta la token'
        })
    }
}