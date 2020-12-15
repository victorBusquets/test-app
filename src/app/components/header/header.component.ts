import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { RandomImageService } from 'src/app/modules/random-image/services/random-image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  title: string = 'Lorem Ipsum App';
  searchTextChanged = new Subject<string>();
  subscriptions: Subscription[] = [];
  searchText: string;
  page: number;
  
  constructor(private randomImageService: RandomImageService) {

  }

  ngOnInit() {
    this.subscriptions.push(this.searchTextChanged
      .pipe(debounceTime(1000))
     .subscribe(() => this.getRandomImagesByText())
   );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription)=>{
      subscription.unsubscribe();
    })
  }

  onSearchChange(search: string){
    this.searchTextChanged.next(search);
  }

  private getRandomImagesByText() {
    this.randomImageService.setRequestParams(this.searchText);
  }
}
