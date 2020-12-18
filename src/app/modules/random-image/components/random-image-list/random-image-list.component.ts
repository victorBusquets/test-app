import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { RandomImageInterface } from 'src/app/interfaces';
import { RequestParamsInterface } from 'src/app/interfaces/RequestParams.interface';
import { RandomImageService } from '../../services/random-image.service';

const INITIAL_REQUEST_PARAMS: RequestParamsInterface = {
  search: '',
  page: 1,
  pageSize: 20,
  hasMoreData: true
}

@Component({
  selector: 'app-random-image-list',
  templateUrl: './random-image-list.component.html',
  styleUrls: ['./random-image-list.component.scss']
})
export class RandomImageListComponent implements OnInit {
  randomImages: RandomImageInterface[];
  throttle: number = 300;
  scrollDistance: number = 3;
  scrollWindow: boolean = false;
  searchText: string;
  requestParams: RequestParamsInterface = INITIAL_REQUEST_PARAMS;
  notResultText: string = 'No existen resultados para la busqueda ';
  constructor(
    private randomImageService: RandomImageService
  ) {

  }
  
  ngOnInit() {
    this.getRandomImagePage();

    this.randomImageService.currentRequestParams
      .pipe(takeWhile((requestParams: RequestParamsInterface) => !!requestParams))
      .subscribe((requestParams: RequestParamsInterface) => {
        if(requestParams && this.requestParamsHasChanges(requestParams)){
          this.requestParams = requestParams;
          this.getRandomImagePage();
        }
      });
  }
  
  getRandomImagePage() {
    if (this.requestParams.hasMoreData) {
      const currentRandomImages: RandomImageInterface[] = this.randomImages && this.requestParams.page > 1 ? this.randomImages : [];
      const newRandomImages: RandomImageInterface[] = this.randomImageService.getRandomImages(this.requestParams);
      
      this.randomImages = currentRandomImages.concat(newRandomImages);
      this.requestParams.page++;
    }
  }

  
  onScrollDown() {
    this.getRandomImagePage();
  }

  trackByFn(index) {
    return index;
  }
  
  private requestParamsHasChanges(requestParams: RequestParamsInterface) {
    return this.requestParams.page !== requestParams.page ||
      this.requestParams.pageSize !== requestParams.pageSize ||
      this.requestParams.search !== requestParams.search;
  }
}
