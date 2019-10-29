import { Request, Response } from "express";
import { listaProductos } from "../seeders/dbProductos";
import { Resolver } from "dns";

export let getProductos = (req: Request, res: Response) => {
  //validemos si hay datos ,que no recibamos un null
  res.status(200);
  res.send({
    success: true,
    message: "Lista de Productos",
    content: listaProductos
  });
};

export let getProductoById = (req: Request, res: Response) => {
  //params los vamos a recibir como si fueran texto
  console.log(req.params.idproducto);
  let idRecibido = parseInt(req.params.idproducto);
  for (let i = 0; i < listaProductos.length; i++) {
    if (idRecibido === listaProductos[i].id) {
      res.status(200);
      res.send({
        success: true,
        message: "Producto Encontrado",
        content: listaProductos[i]
      });
      //solamente podemos mandar un response por eso pongo un return para que apenas encuentre un producto
      //termine la ejecución de mi función
      return;
    }else{
      res.status(404);
      res.send({
        success: false,
        message: "producto no existente",
        content: ""
      });
    }
  } 
  
};

export let createProducto = (req: Request, res: Response) => {
  console.log(req.body);
  listaProductos.push(req.body);
  res.status(201);
  res.send({
    success:true,
    message:"producto creado",
    content:listaProductos
  });
};
