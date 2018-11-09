import {Component, OnInit} from '@angular/core';
import {Offer} from './Offer';
import {OFFERS} from '../mock-job-offers';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers: Offer[] = OFFERS;
  selectedOffer: Offer;
  offerName: string;
  offerID: number;
  ngOnInit() {
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.offers.push(new Offer(this.offers.length + 1, name));
    console.log(this.offers);
    this.offerName = '';
  }



  removeIt(id: string): void {

    const offer = this.offers.find(item => item.id.toString() === id );
    const index: number = this.offers.indexOf(offer);

    console.log(this.offers.indexOf(offer));
    if (!id) {
      return;
    }
    this.offers.splice(index, 1);
    console.log(this.offers);
    this.offerID = 0;
  }


  onSelect(offer: Offer): void {
    this.selectedOffer = offer;
  }

}


