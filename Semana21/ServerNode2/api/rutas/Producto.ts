import { Router } from 'express';
import { getProductos, getProductoById, createProducto } from './../controladores/Producto';
export let producto_router = Router();

producto_router.get("/productos", getProductos);
producto_router.get("/productos/:idproducto",getProductoById);
producto_router.post("/productos",createProducto);

