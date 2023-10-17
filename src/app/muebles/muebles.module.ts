import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MueblesRoutingModule } from './muebles-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SharedModule } from './shared/shared.module';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NosotrosComponent,
    TiendaComponent,
    BlogComponent,
    GaleriaComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    MueblesRoutingModule,
    SharedModule
  ]
})
export class MueblesModule { }
