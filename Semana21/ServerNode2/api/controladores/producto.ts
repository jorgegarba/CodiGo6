import {Request, Response} from 'express';
import { Producto } from '../config/sequelize';

export var producto_controller = {
    getAll: (req:Request, res:Response) => {
        Producto.findAll().then((productos:any)=>{
            console.log("Obteniendo los productos",productos);
            // res.send("Productos Obtenidos");
            res.send({
                "message":"Productos Obtenidos",
                "content":productos
            });
        });
    }
}