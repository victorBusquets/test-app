import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from './constants';

const routes: Routes = [
  {
    path: APP_ROUTES.main,
    loadChildren: () => import('src/app/modules/random-image/random-image.module').then(m => m.RandomImageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
