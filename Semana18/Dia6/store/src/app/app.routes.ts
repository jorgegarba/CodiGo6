import { RouterModule, Routes, Router } from '@angular/router';

import { ListadoComponent } from './listado/listado.component';
import { CarritoComponent } from './carrito/carrito.component';

const RUTAS: Routes = [
    {
        path: '',
        component: ListadoComponent
    },
    {
        path: 'carrito',
        component: CarritoComponent
    }
];

export const MISRUTAS = RouterModule.forRoot(RUTAS);