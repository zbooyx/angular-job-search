import {Component} from '@angular/core';
import {StateAndCity} from '../../../config/locations.config';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  stateAndCity = StateAndCity;

  constructor() {
    this.stateAndCity = this.stateAndCity.map(state => {
        return Object.assign(state, {checked: false});
      }
    );
  }
}


