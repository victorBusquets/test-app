import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOREM_IPSUM_SEED } from 'src/app/constants/lorem-ipsum-seed';
import { RandomImageInterface } from 'src/app/interfaces';
import { RequestParamsInterface } from 'src/app/interfaces';

@Injectable()
export class RandomImageService {
  generatedRandomImages: RandomImageInterface[] = [];
  currentRequestParams: Observable<RequestParamsInterface>;
  private loremIpsumSeedWords: string[] = LOREM_IPSUM_SEED.split(' ');
  private requestParams = new BehaviorSubject(null);

  constructor() {
    this.currentRequestParams = this.requestParams.asObservable();

  }

  getRandomImages(requestParams: RequestParamsInterface): RandomImageInterface[] {
    const startIndex: number = requestParams.pageSize * (requestParams.page - 1);
    const endIndex: number = requestParams.pageSize * requestParams.page;

    if(!this.generatedRandomImages.length) {
      this.initializeRandomImages();
    }

    requestParams.hasMoreData = (startIndex + requestParams.pageSize) < this.generatedRandomImages.length;
    this.requestParams.next(requestParams);
    return this.filterGeneratedRandomImages(requestParams.search, startIndex, endIndex);
  }

  setRequestParams(search: string = '', page: number = 1, pageSize: number = 20) {
    this.requestParams.next({ search, page, pageSize, hasMoreData: true });
  }

  private filterGeneratedRandomImages(search: string, startIndex: number, endIndex: number) {
    const filteredRandomImages = search ?
      this.generatedRandomImages.filter(randomImage => this.randomImagesFilter(randomImage, search)) :
      this.generatedRandomImages;

    return filteredRandomImages.slice(startIndex, endIndex);
  }

  private randomImagesFilter(randomImage: RandomImageInterface, search: string) {
    return randomImage.text.indexOf(search) > -1 || randomImage.id.toString().indexOf(search) > -1;
  }

  private async initializeRandomImages() {
    const randomImagesNumber = 4000;
    this.generatedRandomImages = [];

     for (let i = 1; i <= randomImagesNumber; i++) {
      this.generatedRandomImages.push({
        id: i,
        photo: `https://picsum.photos/id/${i}/500/500`,
        text: this.generateRandomIpsum()
      });
    }

  }

  private generateRandomIpsum() {
    const miniumSeedSize: number = 5;
    const startIndex: number = this.randomIntFromInterval(0, this.loremIpsumSeedWords.length - miniumSeedSize);
    const endIndex: number = startIndex + this.randomIntFromInterval(5, 10);

    return this.loremIpsumSeedWords.slice(startIndex, endIndex).join(' ');
  }


  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
