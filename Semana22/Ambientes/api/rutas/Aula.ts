import { Router } from 'express';
import { postAula } from '../controladores/Aula'
export let aulas_router = Router();

aulas_router.post('/aula', postAula);