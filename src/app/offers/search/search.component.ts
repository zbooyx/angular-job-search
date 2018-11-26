import {Component} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent {

  first = true;
  second = false;

  constructor() {

  }

  public metoda() {
    this.first = !this.first;
    this.second = !this.second;
  }
}

