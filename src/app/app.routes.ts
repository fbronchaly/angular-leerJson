import { RouterModule, Routes } from '@angular/router';
import { ElectricosComponent } from './electricos/electricos.component';
import { PresentacionComponent } from './presentacion/presentacion.component';


const APP_ROUTES: Routes = [
  { path: 'electricos', component: ElectricosComponent },
  { path: 'presentacion', component: PresentacionComponent },
 
  { path: '**', pathMatch: 'full', redirectTo: 'electricos' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
