import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchText: string;
  
  constructor() {

  }

  onSearchChange(search: string){
    // TODO : EXECUTE SEARCH
  }
}
