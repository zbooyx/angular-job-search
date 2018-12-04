import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OffersService} from '../services/offers.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  stateAndCity = [];
  hideList = false;

  constructor( private offers: OffersService ) {}
  ngOnInit(): void {
    this.offers.getCities().subscribe(
      (cities: any[]) => {
        this.stateAndCity = cities;
        this.stateAndCity = this.stateAndCity.map(state => {
            return Object.assign(state, {checked: false});
          }
        );
      }
    );
  }
}



