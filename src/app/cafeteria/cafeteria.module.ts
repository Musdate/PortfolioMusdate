import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeteriaRoutingModule } from './cafeteria-routing.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CafeteriaRoutingModule,
    SharedModule
  ]
})
export class CafeteriaModule { }
