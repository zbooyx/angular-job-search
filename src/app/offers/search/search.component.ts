import {Component, OnInit} from '@angular/core';
import {OffersService} from '../services/offers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  offersAmount = [];
  first = true;
  second = false;

  constructor(private offers: OffersService) {
  }
  ngOnInit(): void {
    this.offers.getNumberOfOffers().subscribe(
      (offersNumber: any[]) => {
        console.log(offersNumber);
        this.offersAmount = offersNumber[0].howManyOffers;
      }
    );
  }

  public metoda() {
    this.first = !this.first;
    this.second = !this.second;
    console.log('dddd');
  }
}

//
// this.recomendedOffers.getOffers().subscribe(
//   (offers: OfferInterface[]) => {
//     this.offers = offers;
//   }
