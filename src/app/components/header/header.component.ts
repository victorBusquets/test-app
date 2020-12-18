import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeWhile } from 'rxjs/operators';
import { RandomImageService } from 'src/app/modules/random-image/services/random-image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Lorem Ipsum App';
  searchPlaceholder: string = 'Busqueda';
  searchTextChanged = new Subject<string>();
  searchText: string;
  page: number;
  
  constructor(
    private randomImageService: RandomImageService
  ) {

  }

  ngOnInit() {
    this.searchTextChanged
      .pipe(debounceTime(1000))
      .pipe(takeWhile((text: string) => !!text))
      .subscribe(() => this.getRandomImagesByText());
  }

  onSearchChange(search: string){
    this.searchTextChanged.next(search);
  }

  private getRandomImagesByText() {
    this.randomImageService.setRequestParams(this.searchText);
  }
}
