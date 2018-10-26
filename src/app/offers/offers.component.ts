import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer';
import { OFFERS } from '../mock-job-offers';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers = OFFERS;
  selectedOffer: Offer;

  constructor() { }

  ngOnInit() {
  }

  onSelect(offer: Offer): void {
    this.selectedOffer = offer;
  }

}
