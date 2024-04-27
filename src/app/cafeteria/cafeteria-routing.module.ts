import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'landing', component: DashboardComponent },
      // { path: 'nosotros', component: NosotrosComponent },
      // { path: 'tienda', component: TiendaComponent },
      // { path: 'blog', component: BlogComponent },
      // { path: 'galeria', component: GaleriaComponent },
      // { path: 'contacto', component: ContactoComponent },
      { path: '**', redirectTo: 'landing' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeteriaRoutingModule { }
