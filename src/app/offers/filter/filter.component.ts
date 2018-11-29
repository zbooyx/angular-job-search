import {Component} from '@angular/core';
import {StateAndCity} from '../../../config/locations.config';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  stateAndCity: { state: string, cities: string[] }[] = StateAndCity;
  country = false;


  constructor() {

  }

}


// this.myVar2 = !this.myVar2;
