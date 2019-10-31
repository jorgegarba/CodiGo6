import { Request, Response } from 'express';
import { Empleado } from '../config/sequelize';
import { Ventas } from '../config/sequelize';


export var empleado_controller = {
    getAll: (req:Request, res:Response) => {
        Empleado.findAll({
            include:[
                {model:Ventas}
            ]
        }).then((empleados:any) => {
            empleados.forEach((empleado:any)=>{
                empleado.mostrarDatos();
            });
            console.log("Empleados Obtenidos", empleados);
            res.status(200);
            res.send({
                success:true,
                message:'Lista de Empleados',
                content:empleados
            });
        }).catch((error:any) => {
            console.log(error);
            res.status(404);
            res.send({
                success:false,
                message:'Ha ocurrido un error al obtener los datos',
                content:''
            });
        })
    },
    create: (req:Request, res:Response) => {
        //obtengamos el req.body
        console.log(req.body);
        Empleado.create(req.body).then((empleadoCreado:any) => {
            if(empleadoCreado){
                //configuro mi respuesta
                let respuesta = {
                    success:true,
                    message:'Usuario creado',
                    content:empleadoCreado
                }
                //mando mi respuesta con su estado
                res.status(201).send(respuesta);
            }
        }).catch((error:any) => {
            console.log("Error al crear empleado",error);
            res.status(500).send("Ocurrio un error");
        });
    },
    getById: (req:Request, res:Response) => {
        let {id_empleado} = req.params;

        Empleado.findByPk(id_empleado).then((empleado)=>{
            if(empleado){
                let respuesta = {
                    success:true,
                    message:"Empleado encontrado",
                    content:empleado
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta = {
                    success:false,
                    message:"Empleado no encontrado",
                    content:''
                };
                res.status(404).send(respuesta);
            }
        }).catch((error)=>{
            console.log('Error al buscar por ID', error);
        })
        
    },
    deleteById: (req:Request, res:Response) => {
        let {id_empleado} = req.params;
        // console.log("delete",id_empleado)
        Empleado.destroy({
            where:{
                emp_id:id_empleado
            }
        }).then((cantidad) => {
            if(cantidad > 0){
                console.log("Cant",cantidad);
                let respuesta = {
                    success:true,
                    message:"Usuario Eliminado",
                    content:cantidad
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta = {
                    success:false,
                    message:"No se ha eliminado",
                    content:''
                }
                res.status(500).send(respuesta);
            }
        })
    },
    updateById: (req:Request, res:Response) => {
        //req.query
        let {id_empleado} = req.params;
        //El contenido a actualizar y que registro va a actualizar
        Empleado.update(req.body,{
            where:{
                emp_id: id_empleado
            }
        }).then((cantidad:any)=>{
            if(cantidad>0){
                let respuesta = {
                    success:true,
                    message:'Registro Actualizado',
                    content:cantidad
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta = {
                    success:false,
                    message:'Registro no Actualizado',
                    content:''
                }
                res.status(400).send(respuesta);
            }
        })
    }
}