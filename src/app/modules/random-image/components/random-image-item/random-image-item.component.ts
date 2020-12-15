import { Component, Input } from '@angular/core';
import { RandomImageInterface } from 'src/app/interfaces';

@Component({
  selector: 'app-random-image-item',
  templateUrl: './random-image-item.component.html',
  styleUrls: ['./random-image-item.component.scss']
})
export class RandomImageItemComponent {
  @Input() randomImage;
  @Input() searchText: string;

  constructor () { }

  setDefaultImage(randomImage: RandomImageInterface) {
    randomImage.photo = '/assets/not-found.jpg';
  }
}
