import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomImageListComponent } from './components/random-image-list/random-image-list.component';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RandomImageListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RandomImageRoutingModule { }
