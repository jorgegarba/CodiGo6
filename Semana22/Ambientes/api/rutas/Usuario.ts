import { Router } from 'express';
import * as usuario_controlador from '../controladores/Usuario';
export let usuario_router = Router();

usuario_router.post('/usuario', usuario_controlador.crearUsuario);
usuario_router.post('/usuario/find',usuario_controlador.encontrarUsuByNomOApe);
usuario_router.post('/usuario/loggin',usuario_controlador.iniciarSesion);
