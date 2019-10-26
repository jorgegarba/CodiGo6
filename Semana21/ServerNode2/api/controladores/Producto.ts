import { Request, Response } from 'express';

export let getProductos = (req: Request, res: Response) => {
  res.send("Entregando la lista de productos");
}

export let getProductoById = (req: Request, res: Response) => {
  console.log(req.params.idproducto);
  res.send("ok");
}

export let createProducto = ( req:Request, res:Response) => {
  console.log(req.body);
  res.send("Producto Creado");
}