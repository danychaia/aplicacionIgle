import { Routes, RouterModule } from '@angular/router';
import { IngresoForm } from './IngresoForm/IngresoForm.component';



const routes: Routes = [
    {
        path: '',
        component: IngresoForm
    }
];

export const routing = RouterModule.forRoot(routes);