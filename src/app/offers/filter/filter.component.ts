import {Component} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  first = true;
  second = false;
  third = true;
  fourth = false;
  hideList = false;


  constructor() {

  }

  public metoda123() {
    this.first = !this.first;
    this.second = !this.second;
    this.third = !this.third;
    this.fourth = !this.fourth;
    console.log(this.third);
  }
}


