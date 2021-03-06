import { Component, Input } from '@angular/core';
import { RandomImageInterface } from 'src/app/interfaces';
const DEFAULT_PHOTO: string = '/assets/not-found.jpg';

@Component({
  selector: 'app-random-image-item',
  templateUrl: './random-image-item.component.html',
  styleUrls: ['./random-image-item.component.scss']
})
export class RandomImageItemComponent {
  @Input() randomImage: RandomImageInterface;
  @Input() searchText: string;

  constructor () { }

  setDefaultImage(randomImage: RandomImageInterface) {
    randomImage.photo = DEFAULT_PHOTO;
  }
}
