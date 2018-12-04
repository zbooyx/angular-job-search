import {Component, OnInit} from '@angular/core';
import {OffersService} from '../services/offers.service';
import {OfferInterface} from '../interfaces/offer.interface';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.scss']
})
export class RecomendedComponent implements OnInit {


  offers: OfferInterface[];

  constructor(private recomendedOffers: OffersService) {
  }

  ngOnInit(): void {
    this.recomendedOffers.getOffers().subscribe(
      (offers: OfferInterface[]) => {
        this.offers = offers;
      }
    );
  }
}


