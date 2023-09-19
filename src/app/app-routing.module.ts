import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PoliticaCalidadComponent } from './politica-calidad/politica-calidad.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'Politica_calidad', component: PoliticaCalidadComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
