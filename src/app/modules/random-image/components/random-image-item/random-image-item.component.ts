import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-random-image-item',
  templateUrl: './random-image-item.component.html',
  styleUrls: ['./random-image-item.component.scss']
})
export class RandomImageItemComponent {
  @Input() randomImage;
  @Input() searchText: string;

  constructor () { }
}
