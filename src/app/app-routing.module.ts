import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    loadChildren: () => import('../app/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'lista-regalos',
    loadChildren: () => import('../app/regalos/regalos.module').then(m => m.RegalosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
