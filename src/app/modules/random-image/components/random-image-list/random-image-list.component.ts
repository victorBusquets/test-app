import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-random-image-list',
  templateUrl: './random-image-list.component.html',
  styleUrls: ['./random-image-list.component.scss']
})
export class RandomImageListComponent {
  randomImages = [
    {
      id: 1,
      photo: `https://picsum.photos/id/1/500/500`,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }, {
      id: 2,
      photo: `https://picsum.photos/id/2/500/500`,
      text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    }, {
      id: 3,
      photo: `https://picsum.photos/id/3/500/500`,
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book'
    }, {
      id: 4,
      photo: `https://picsum.photos/id/4/500/500`,
      text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
    },
    {
      id: 11,
      photo: `https://picsum.photos/id/11/500/500`,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }, {
      id: 21,
      photo: `https://picsum.photos/id/21/500/500`,
      text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    }, {
      id: 31,
      photo: `https://picsum.photos/id/31/500/500`,
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book'
    }, {
      id: 41,
      photo: `https://picsum.photos/id/41/500/500`,
      text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
    }
  ];

  subscriptions: Subscription[] = [];

  constructor () {

  }

  trackByFn(index) {
    return index;
  }
}
