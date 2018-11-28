import {Component} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {


  city1 = false;
  city2 = false;
  city3 = false;
  city4 = false;
  voivodeship = false;
  country = false;


  constructor() {

  }

  public changeCities() {
    if (this.city1 && this.city2 && this.city3 && this.city4) {
      this.voivodeship = true;
    }
  }
}


// this.myVar2 = !this.myVar2;
