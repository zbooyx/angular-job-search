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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.offers.push(Offer);
      };


  onSelect(offer: Offer): void {
    this.selectedOffer = offer;
  }

}


