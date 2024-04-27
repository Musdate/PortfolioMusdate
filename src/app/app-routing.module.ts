import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule )
  },
  {
    path: 'muebles',
    loadChildren: () => import('./muebles/muebles.module').then( m => m.MueblesModule )
  },
  {
    path: 'cafeteria',
    loadChildren: () => import('./cafeteria/cafeteria.module').then( m => m.CafeteriaModule )
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
