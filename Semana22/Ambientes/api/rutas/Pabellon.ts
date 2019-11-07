// PABELLON ROUTER
import { Router } from 'express';
import { postPabellon, getPabellones, getPabellonesById, updatePabellon, getAulasXPabellon, getAulasByPabellonId } from './../controladores/Pabellon';

export let pabellon_router = Router();

pabellon_router.post('/pabellon', postPabellon);
pabellon_router.get('/pabellon',getPabellones);
pabellon_router.get('/pabellon/:id',getPabellonesById);
pabellon_router.put('/pabellon',updatePabellon);
pabellon_router.get('/pabellones/aulas',getAulasXPabellon);
pabellon_router.get('/pabellones/:id/aulas',getAulasByPabellonId);