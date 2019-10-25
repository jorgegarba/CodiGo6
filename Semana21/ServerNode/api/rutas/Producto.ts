import { Router } from 'express';
import { getProductos, getProductoById } from './../controladores/Producto';
export let producto_router = Router();

producto_router.get("/productos", getProductos);
producto_router.get("/productos/:idproducto",getProductoById)