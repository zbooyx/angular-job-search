import {Component, OnInit} from '@angular/core';
import {Offers} from '../../../config/offers.config';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.scss']
})
export class RecomendedComponent {

  offers: {
    title: string,
    employer: string,
    location: string,
    logoURL: string,
    salary: number,
    date: string
  }[] = Offers;
  constructor() {

  }
}


