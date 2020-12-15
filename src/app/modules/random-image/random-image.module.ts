import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomImageRoutingModule } from './random-image-routing.module';
import { RandomImageListComponent } from './components/random-image-list/random-image-list.component';
import { RandomImageItemComponent } from './components/random-image-item/random-image-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    RandomImageListComponent,
    RandomImageItemComponent
  ],
  imports: [
    RandomImageRoutingModule,
    CommonModule,
    InfiniteScrollModule,
  ],
  providers: []
})
export class RandomImageModule { }
