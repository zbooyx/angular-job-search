import {Component, Input, OnInit} from '@angular/core';
import {OfferInterface} from '../../interfaces/offer.interface';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.scss']
})
export class SingleOfferComponent implements OnInit {


  @Input() offer: OfferInterface;

  constructor() {

  }

  ngOnInit(): void {
    // console.log(this.offer);
  }
}


