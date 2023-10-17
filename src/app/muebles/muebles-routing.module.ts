import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'tienda', component: TiendaComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MueblesRoutingModule { }
