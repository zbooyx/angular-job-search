import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent  {

  first = true;
  second = false;

  constructor() {

  }
  public metoda123() {
    this.first = !this.first;
    this.second = !this.second;
    console.log(this.first);
  }
}


