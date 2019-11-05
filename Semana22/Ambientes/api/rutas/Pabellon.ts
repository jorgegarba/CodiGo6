// PABELLON ROUTER
import { Router } from 'express';
import { postPabellon } from './../controladores/Pabellon';

export let pabellon_router = Router();

pabellon_router.post('/pabellon', postPabellon);